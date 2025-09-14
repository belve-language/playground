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
			const abstractifyingResult: ErrorAbstractifyingResult =
				new ErrorAbstractifyingResult(
					`There are duplicate main function definitions.`,
				);
			return abstractifyingResult;
		} else {
			const newFunctions = new FunctionsAbstractSyntaxTreeNode(
				{...functions.children, mainFunction: this},
				new SpanIndexes(this.spanIndexes.from, functions.spanIndexes.until),
			);
			const abstractifyingResult: SuccessAbstractifyingResult<FunctionsAbstractSyntaxTreeNode> =
				new SuccessAbstractifyingResult(newFunctions);
			return abstractifyingResult;
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
			{functions: {}, mainFunction: this},
			this.spanIndexes,
		);
		return functions;
	}
}
