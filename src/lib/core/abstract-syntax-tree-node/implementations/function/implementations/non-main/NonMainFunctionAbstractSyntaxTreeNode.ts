import type {Functions} from "../../../../../functions/Functions.ts";
import {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import type {Variables} from "../../../../../variables/Variables.ts";
import {WordFunctionCallSegmentAbstractSyntaxTreeNode} from "../../../function-call-segment/implementations/word/WordFunctionCallSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderAbstractSyntaxTreeNode} from "../../../function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
import {
	FunctionsAbstractSyntaxTreeNode,
	pickBfslyFromInfiniteGenerators,
} from "../../../functions/FunctionsAbstractSyntaxTreeNode.ts";
import {OperatedStatementAbstractSyntaxTreeNode} from "../../../operated-statement/OperatedStatementAbstractSyntaxTreeNode.ts";
import {OrOperatorAbstractSyntaxTreeNode} from "../../../operator/implementations/or/OrOperatorAbstractSyntaxTreeNode.ts";
import {ThenOperatorAbstractSyntaxTreeNode} from "../../../operator/implementations/then/ThenOperatorAbstractSyntaxTreeNode.ts";
import {BlockStatementAbstractSyntaxTreeNode} from "../../../statement/implementations/block/BlockStatementAbstractSyntaxTreeNode.ts";
import {FunctionCallStatementAbstractSyntaxTreeNode} from "../../../statement/implementations/function-call/FunctionCallStatementAbstractSyntaxTreeNode.ts";
import type {SupportedStatementAbstractSyntaxTreeNode} from "../../../statement/supported/SupportedStatementAbstractSyntaxTreeNode.ts";
import {StatementsAbstractSyntaxTreeNode} from "../../../statements/StatementsAbstractSyntaxTreeNode.ts";
import {FunctionAbstractSyntaxTreeNode} from "../../FunctionAbstractSyntaxTreeNode.ts";
import type {FunctionAbstractSyntaxTreeNodeChildren} from "../../children/FunctionAbstractSyntaxTreeNodeChildren.ts";
import {computeUnknownsValues} from "../../computing-unknowns-values/computeUnknownsValues.ts";
export class NonMainFunctionAbstractSyntaxTreeNode extends FunctionAbstractSyntaxTreeNode<FunctionHeaderAbstractSyntaxTreeNode> {
	public static create(
		children: FunctionAbstractSyntaxTreeNodeChildren<FunctionHeaderAbstractSyntaxTreeNode>,
		spanIndexes: SpanIndexes,
	): NonMainFunctionAbstractSyntaxTreeNode {
		const id = children.header.id;
		const node = new this(children, id, spanIndexes);
		return node;
	}
	private constructor(
		children: FunctionAbstractSyntaxTreeNodeChildren<FunctionHeaderAbstractSyntaxTreeNode>,
		id: string,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
		this.id = id;
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
		functions: Functions,
	): Generator<NonMainFunctionAbstractSyntaxTreeNode, void, void> {
		const mutatedBodies = this.children.body.mutate(functions);
		for (const mutatedBody of mutatedBodies) {
			yield NonMainFunctionAbstractSyntaxTreeNode.create(
				{...this.children, body: mutatedBody},
				new SpanIndexes(0, 0),
			);
		}
	}
	public override putIntoFunctions(
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
}
