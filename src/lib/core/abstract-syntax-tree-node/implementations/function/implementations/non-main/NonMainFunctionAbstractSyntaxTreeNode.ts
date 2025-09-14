import {computeUnknownsValues} from "./computing-unknowns-values/computeUnknownsValues.ts";
import {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import type {Variables} from "../../../../../variables/Variables.ts";
import type {FunctionHeaderAbstractSyntaxTreeNode} from "../../../function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
import {FunctionsAbstractSyntaxTreeNode} from "../../../functions/FunctionsAbstractSyntaxTreeNode.ts";
import {FunctionAbstractSyntaxTreeNode} from "../../FunctionAbstractSyntaxTreeNode.ts";
import type {FunctionAbstractSyntaxTreeNodeChildren} from "../../children/FunctionAbstractSyntaxTreeNodeChildren.ts";
export class NonMainFunctionAbstractSyntaxTreeNode extends FunctionAbstractSyntaxTreeNode {
	public static create(
		children: FunctionAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	): NonMainFunctionAbstractSyntaxTreeNode {
		const id = children.header.id;
		const node = new this(children, id, spanIndexes);
		return node;
	}
	private constructor(
		children: FunctionAbstractSyntaxTreeNodeChildren,
		id: string,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
		this.id = id;
	}
	public override addToFunctions(
		functions: FunctionsAbstractSyntaxTreeNode,
	): FunctionsAbstractSyntaxTreeNode {
		if (this.id in functions.children.functions) {
			// TODO
			throw new Error(`Duplicate function ID: ${this.id}`);
		} else {
			const newFunctions = new FunctionsAbstractSyntaxTreeNode(
				{
					...functions.children,
					functions: {...functions.children.functions, [this.id]: this},
				},
				new SpanIndexes(this.spanIndexes.from, functions.spanIndexes.until),
			);
			return newFunctions;
		}
	}
	public override computeUnknownsValues(
		variables: Variables,
	): readonly unknown[] {
		const unknownsValues = computeUnknownsValues(
			this.children.header.unknownsNames,
			variables,
		);
		return unknownsValues;
	}
	public override createFunctions(): FunctionsAbstractSyntaxTreeNode {
		const functions = new FunctionsAbstractSyntaxTreeNode(
			{functions: {[this.id]: this}, mainFunction: null},
			this.spanIndexes,
		);
		return functions;
	}
	public readonly id: string;
	public *mutate(
		functionsHeaders: readonly FunctionHeaderAbstractSyntaxTreeNode[],
	): Generator<NonMainFunctionAbstractSyntaxTreeNode, void, void> {
		for (const mutatedBody of this.children.body.mutate(
			functionsHeaders,
			this.children.header.unknownsNames,
			this.children.header.knownsNames,
		)) {
			// TODO
			const nonMainFunction = NonMainFunctionAbstractSyntaxTreeNode.create(
				{...this.children, body: mutatedBody},
				new SpanIndexes(0, 0),
			);
			yield nonMainFunction;
		}
	}
}
