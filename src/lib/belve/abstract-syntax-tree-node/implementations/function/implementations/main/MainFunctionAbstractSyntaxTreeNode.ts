import {ErrorAbstractifyingResult} from "../../../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {SuccessAbstractifyingResult} from "../../../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import type {Variables} from "../../../../../variables/Variables.ts";
import {FunctionsAbstractSyntaxTreeNode} from "../../../functions/FunctionsAbstractSyntaxTreeNode.ts";
import {FunctionAbstractSyntaxTreeNode} from "../../FunctionAbstractSyntaxTreeNode.ts";
import type {FunctionAbstractSyntaxTreeNodeChildren} from "../../children/FunctionAbstractSyntaxTreeNodeChildren.ts";
export class MainFunctionAbstractSyntaxTreeNode extends FunctionAbstractSyntaxTreeNode {
	public constructor(
		children: FunctionAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
	public override addToFunctions(
		functions: FunctionsAbstractSyntaxTreeNode,
	):
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<FunctionsAbstractSyntaxTreeNode> {
		if (functions.children.mainFunction !== null) {
			const addingToFunctionsResult: ErrorAbstractifyingResult =
				new ErrorAbstractifyingResult(
					`There are duplicate main function definitions.`,
				);
			return addingToFunctionsResult;
		} else {
			const newFunctions = new FunctionsAbstractSyntaxTreeNode(
				{...functions.children, mainFunction: this},
				// TODO: Make sure
				new SpanIndexes(this.spanIndexes.from, functions.spanIndexes.until),
			);
			const addingToFunctionsResult: SuccessAbstractifyingResult<FunctionsAbstractSyntaxTreeNode> =
				new SuccessAbstractifyingResult(newFunctions);
			return addingToFunctionsResult;
		}
	}
	public override computeUnknownsValues(
		variables: Variables,
	): readonly unknown[] {
		const unknownsValues: readonly unknown[] = [];
		return unknownsValues;
	}
	public override createFunctions(): FunctionsAbstractSyntaxTreeNode {
		const functions = new FunctionsAbstractSyntaxTreeNode(
			{mainFunction: this, nonMainFunctions: {}},
			this.spanIndexes,
		);
		return functions;
	}
}
