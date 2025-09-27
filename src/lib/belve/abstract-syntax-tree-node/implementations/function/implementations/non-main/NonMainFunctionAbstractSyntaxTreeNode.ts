import {ErrorAbstractifyingResult} from "../../../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import type {Variables} from "../../../../../variables/Variables.ts";
import type {FunctionHeaderAbstractSyntaxTreeNode} from "../../../function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
import {WithoutMainFunctionFunctionsAbstractSyntaxTreeNode} from "../../../functions/implementations/without-main-function/WithoutMainFunctionFunctionsAbstractSyntaxTreeNode.ts";
import type {SupportedFunctionsAbstractSyntaxTreeNode} from "../../../functions/supported/SupportedFunctionsAbstractSyntaxTreeNode.ts";
import {FunctionAbstractSyntaxTreeNode} from "../../FunctionAbstractSyntaxTreeNode.ts";
import type {FunctionAbstractSyntaxTreeNodeChildren} from "../../children/FunctionAbstractSyntaxTreeNodeChildren.ts";
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
	public override addToFunctions(
		functions: SupportedFunctionsAbstractSyntaxTreeNode,
	):
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<SupportedFunctionsAbstractSyntaxTreeNode> {
		const addingFunctionResult = functions.addNonMainFunction(this);
		switch (addingFunctionResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const addingToFunctionsResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(addingFunctionResult.message);
				return addingToFunctionsResult;
			}
			case successAbstractifyingResultTypeName: {
				const newFunctions = addingFunctionResult.data;
				const addingToFunctionsResult: SuccessAbstractifyingResult<SupportedFunctionsAbstractSyntaxTreeNode> =
					new SuccessAbstractifyingResult<SupportedFunctionsAbstractSyntaxTreeNode>(
						newFunctions,
					);
				return addingToFunctionsResult;
			}
		}
	}
	public computeKnowns(knownsValues: readonly unknown[]): Variables {
		const knowns: Variables = this.children.header.computeKnowns(knownsValues);
		return knowns;
	}
	public computeUnknowns(variables: Variables): Variables {
		const unknowns: Variables = Object.fromEntries<unknown>(
			this.children.header.unknownsNames.map((name) => {
				if (name in variables) {
					return [name, variables[name]];
				} else {
					// TODO
					throw new Error(`Variable not found: ${name}`);
				}
			}),
		);
		return unknowns;
	}
	public override computeUnknownsValues(
		variables: Variables,
	): readonly unknown[] {
		const unknownsValues: readonly unknown[] =
			this.children.header.unknownsNames.map((name: string): unknown => {
				if (name in variables) {
					return variables[name];
				} else {
					// TODO
					throw new Error(`Variable not found: ${name}`);
				}
			});
		return unknownsValues;
	}
	public override createFunctions(): WithoutMainFunctionFunctionsAbstractSyntaxTreeNode {
		const functions = new WithoutMainFunctionFunctionsAbstractSyntaxTreeNode(
			{mainFunction: null, nonMainFunctions: {[this.id]: this}},
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
