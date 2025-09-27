import {ErrorAbstractifyingResult} from "../../../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import type {Variables} from "../../../../../variables/Variables.ts";
import {WithMainFunctionFunctionsAbstractSyntaxTreeNode} from "../../../functions/implementations/with-main-function/WithMainFunctionFunctionsAbstractSyntaxTreeNode.ts";
import type {SupportedFunctionsAbstractSyntaxTreeNode} from "../../../functions/supported/SupportedFunctionsAbstractSyntaxTreeNode.ts";
import {FunctionAbstractSyntaxTreeNode} from "../../FunctionAbstractSyntaxTreeNode.ts";
import type {FunctionAbstractSyntaxTreeNodeChildren} from "../../children/FunctionAbstractSyntaxTreeNodeChildren.ts";
export class MainFunctionAbstractSyntaxTreeNode extends FunctionAbstractSyntaxTreeNode<null> {
	public constructor(
		children: FunctionAbstractSyntaxTreeNodeChildren<null>,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
	public override addToFunctions(
		functions: SupportedFunctionsAbstractSyntaxTreeNode,
	):
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<SupportedFunctionsAbstractSyntaxTreeNode> {
		if (functions.children.mainFunction !== null) {
			const addingToFunctionsResult: ErrorAbstractifyingResult =
				new ErrorAbstractifyingResult(
					`There are duplicate main function definitions.`,
				);
			return addingToFunctionsResult;
		} else {
			const addingFunctionResult = functions.addMainFunction(this);
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
	}
	public override computeKnowns(knownsValues: readonly unknown[]): Variables {
		const knowns: Variables = {};
		return knowns;
	}
	public override computeUnknownsValues(
		variables: Variables,
	): readonly unknown[] {
		const unknownsValues: readonly unknown[] = [];
		return unknownsValues;
	}
	public override createFunctions(): WithMainFunctionFunctionsAbstractSyntaxTreeNode {
		const functions: WithMainFunctionFunctionsAbstractSyntaxTreeNode =
			new WithMainFunctionFunctionsAbstractSyntaxTreeNode(
				{mainFunction: this, nonMainFunctions: {}},
				this.spanIndexes,
			);
		return functions;
	}
}
