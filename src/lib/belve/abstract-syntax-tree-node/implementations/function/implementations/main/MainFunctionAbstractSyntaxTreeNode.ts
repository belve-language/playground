import {ErrorAbstractifyingResult} from "../../../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import type {OptionalFunctionHeaderConcreteSyntaxTreeNode} from "../../../../../concrete-syntax-tree-node/implementations/optional-function-header/OptionalFunctionHeaderConcreteSyntaxTreeNode.ts";
import {FailureLogFunctionCallingResult} from "../../../../../function-calling-result/implementations/log/implementations/failure/FailureLogFunctionCallingResult.ts";
import {failureLogFunctionCallingResultActionTypeName} from "../../../../../function-calling-result/implementations/log/implementations/failure/action-type-name/failureLogFunctionCallingResultActionTypeName.ts";
import {StepLogFunctionCallingResult} from "../../../../../function-calling-result/implementations/log/implementations/step/StepLogFunctionCallingResult.ts";
import {SuccessLogFunctionCallingResult} from "../../../../../function-calling-result/implementations/log/implementations/success/SuccessLogFunctionCallingResult.ts";
import type {SupportedLogFunctionCallingResult} from "../../../../../function-calling-result/implementations/log/supported/SupportedLogFunctionCallingResult.ts";
import {ReturnFunctionCallingResult} from "../../../../../function-calling-result/implementations/return/ReturnFunctionCallingResult.ts";
import type {NonMainFunctions} from "../../../../../non-main-functions/NonMainFunctions.ts";
import {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {failureStatementExecutingResultTypeName} from "../../../../../statement-executing-result/implementations/failure/type-name/failureStatementExecutingResultTypeName.ts";
import {stepLogStatementExecutingResultActionTypeName} from "../../../../../statement-executing-result/implementations/log/implementations/step/action-type-name/stepLogStatementExecutingResultActionTypeName.ts";
import {successLogStatementExecutingResultActionTypeName} from "../../../../../statement-executing-result/implementations/log/implementations/success/action-type-name/successLogStatementExecutingResultActionTypeName.ts";
import {logStatementExecutingResultTypeName} from "../../../../../statement-executing-result/implementations/log/type-name/logStatementExecutingResultTypeName.ts";
import {returnStatementExecutingResultTypeName} from "../../../../../statement-executing-result/implementations/return/type-name/returnStatementExecutingResultTypeName.ts";
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
	public *call(
		nonMainFunctions: NonMainFunctions,
	): Generator<
		ReturnFunctionCallingResult | SupportedLogFunctionCallingResult,
		void,
		void
	> {
		const knowns: Variables = {};
		const variables: Variables = knowns;
		const bodyExecutingResults = this.children.body.execute(
			nonMainFunctions,
			variables,
		);
		for (const bodyExecutingResult of bodyExecutingResults) {
			switch (bodyExecutingResult.typeName) {
				case failureStatementExecutingResultTypeName: {
					break;
				}
				case logStatementExecutingResultTypeName: {
					switch (bodyExecutingResult.actionTypeName) {
						case failureLogFunctionCallingResultActionTypeName: {
							const mainFunctionCallingResult: FailureLogFunctionCallingResult =
								new FailureLogFunctionCallingResult(
									bodyExecutingResult.node,
									bodyExecutingResult.variables,
								);
							yield mainFunctionCallingResult;
							break;
						}
						case stepLogStatementExecutingResultActionTypeName: {
							const mainFunctionCallingResult: StepLogFunctionCallingResult =
								new StepLogFunctionCallingResult(
									bodyExecutingResult.node,
									bodyExecutingResult.variables,
								);
							yield mainFunctionCallingResult;
							break;
						}
						case successLogStatementExecutingResultActionTypeName: {
							const mainFunctionCallingResult: SuccessLogFunctionCallingResult =
								new SuccessLogFunctionCallingResult(
									bodyExecutingResult.node,
									bodyExecutingResult.unknowns,
									bodyExecutingResult.variables,
								);
							yield mainFunctionCallingResult;
							break;
						}
					}
					break;
				}
				case returnStatementExecutingResultTypeName: {
					const unknownsValues: readonly unknown[] = [];
					const mainFunctionCallingResult: ReturnFunctionCallingResult =
						new ReturnFunctionCallingResult(unknownsValues);
					yield mainFunctionCallingResult;
					break;
				}
			}
		}
	}
	public override concretifyHeader(): OptionalFunctionHeaderConcreteSyntaxTreeNode {
		// TODO: Implement
		throw new Error("Method not implemented.");
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
