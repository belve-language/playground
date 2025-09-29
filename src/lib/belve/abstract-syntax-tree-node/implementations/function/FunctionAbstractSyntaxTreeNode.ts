import type {FunctionAbstractSyntaxTreeNodeChildren} from "./children/FunctionAbstractSyntaxTreeNodeChildren.ts";
import type {SupportedAbstractifyingResult} from "../../../abstractifying-result/supported/SupportedAbstractifyingResult.ts";
import {FunctionConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/function/FunctionConcreteSyntaxTreeNode.ts";
import type {Function} from "../../../function/Function.ts";
import {FailureLogFunctionCallingResult} from "../../../function-calling-result/implementations/log/implementations/failure/FailureLogFunctionCallingResult.ts";
import {StepLogFunctionCallingResult} from "../../../function-calling-result/implementations/log/implementations/step/StepLogFunctionCallingResult.ts";
import {SuccessLogFunctionCallingResult} from "../../../function-calling-result/implementations/log/implementations/success/SuccessLogFunctionCallingResult.ts";
import type {SupportedLogFunctionCallingResult} from "../../../function-calling-result/implementations/log/supported/SupportedLogFunctionCallingResult.ts";
import {ReturnFunctionCallingResult} from "../../../function-calling-result/implementations/return/ReturnFunctionCallingResult.ts";
import type {NonMainFunctions} from "../../../non-main-functions/NonMainFunctions.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {failureLogStatementExecutingResultActionTypeName} from "../../../statement-executing-result/implementations/log/implementations/failure/action-type-name/failureLogStatementExecutingResultActionTypeName.ts";
import {stepLogStatementExecutingResultActionTypeName} from "../../../statement-executing-result/implementations/log/implementations/step/action-type-name/stepLogStatementExecutingResultActionTypeName.ts";
import {successLogStatementExecutingResultActionTypeName} from "../../../statement-executing-result/implementations/log/implementations/success/action-type-name/successLogStatementExecutingResultActionTypeName.ts";
import {logStatementExecutingResultTypeName} from "../../../statement-executing-result/implementations/log/type-name/logStatementExecutingResultTypeName.ts";
import {returnStatementExecutingResultTypeName} from "../../../statement-executing-result/implementations/return/type-name/returnStatementExecutingResultTypeName.ts";
import type {Variables} from "../../../variables/Variables.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {FunctionHeaderAbstractSyntaxTreeNode} from "../function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
import type {SupportedFunctionsAbstractSyntaxTreeNode} from "../functions/supported/SupportedFunctionsAbstractSyntaxTreeNode.ts";
import type {NonMainFunctionAbstractSyntaxTreeNode} from "./implementations/non-main/NonMainFunctionAbstractSyntaxTreeNode.ts";
import type {BuiltInFunction} from "../../../../playground/built-in-functions/built-in-function/BuiltInFunction.ts";
export abstract class FunctionAbstractSyntaxTreeNode<
	FunctionHeaderAbstractSyntaxTreeNodeToUse extends
		FunctionHeaderAbstractSyntaxTreeNode | null,
> extends AbstractSyntaxTreeNode<
	FunctionAbstractSyntaxTreeNodeChildren<FunctionHeaderAbstractSyntaxTreeNodeToUse>
> {
	protected constructor(
		children: FunctionAbstractSyntaxTreeNodeChildren<FunctionHeaderAbstractSyntaxTreeNodeToUse>,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
	public abstract addToFunctions(
		functions: SupportedFunctionsAbstractSyntaxTreeNode,
	): SupportedAbstractifyingResult<SupportedFunctionsAbstractSyntaxTreeNode>;
	public *call(
		nonMainFunctions: NonMainFunctions<Function>,
		knownsValues: readonly unknown[],
	): Generator<
		ReturnFunctionCallingResult | SupportedLogFunctionCallingResult,
		void,
		void
	> {
		const knowns: Variables = this.computeKnowns(knownsValues);
		const availables: Variables = knowns;
		const functionCallingResult1 = new StepLogFunctionCallingResult(
			availables,
			this,
		);
		yield functionCallingResult1;
		const bodyExecutingResults = this.children.body.execute(
			availables,
			nonMainFunctions,
		);
		let hasFailed = true;
		for (const bodyExecutingResult of bodyExecutingResults) {
			switch (bodyExecutingResult.typeName) {
				case logStatementExecutingResultTypeName: {
					switch (bodyExecutingResult.actionTypeName) {
						case failureLogStatementExecutingResultActionTypeName: {
							const functionCallingResult2: FailureLogFunctionCallingResult =
								new FailureLogFunctionCallingResult(
									bodyExecutingResult.availables,
									bodyExecutingResult.node,
								);
							yield functionCallingResult2;
							break;
						}
						case stepLogStatementExecutingResultActionTypeName: {
							const functionCallingResult2: StepLogFunctionCallingResult =
								new StepLogFunctionCallingResult(
									bodyExecutingResult.availables,
									bodyExecutingResult.node,
								);
							yield functionCallingResult2;
							break;
						}
						case successLogStatementExecutingResultActionTypeName: {
							const functionCallingResult2: SuccessLogFunctionCallingResult =
								new SuccessLogFunctionCallingResult(
									bodyExecutingResult.availables,
									bodyExecutingResult.node,
									bodyExecutingResult.unknowns,
								);
							yield functionCallingResult2;
							break;
						}
					}
					break;
				}
				case returnStatementExecutingResultTypeName: {
					hasFailed = false;
					const unknowns: Variables = bodyExecutingResult.unknowns;
					const functionCallingResult2: SuccessLogFunctionCallingResult =
						new SuccessLogFunctionCallingResult(availables, this, unknowns);
					yield functionCallingResult2;
					const unknownsValues: readonly unknown[] =
						this.computeUnknownsValues(unknowns);
					const functionCallingResult3: ReturnFunctionCallingResult =
						new ReturnFunctionCallingResult(unknownsValues);
					yield functionCallingResult3;
					break;
				}
			}
		}
		if (hasFailed) {
			const functionCallingResult2: FailureLogFunctionCallingResult =
				new FailureLogFunctionCallingResult(availables, this);
			yield functionCallingResult2;
		}
	}
	public abstract computeKnowns(knownsValues: readonly unknown[]): Variables;
	public abstract computeUnknownsValues(
		unknowns: Variables,
	): readonly unknown[];
	public concretify(): FunctionConcreteSyntaxTreeNode {
		// TODO
		throw new Error("Method not implemented.");
		// const header = this.concretifyHeader();
		// const body = this.children.body.concretify();
		// const functionAtom: FunctionConcreteSyntaxTreeNodeAtom = new ThenAtom(
		// 	new NonTerminalAtom(header),
		// 	new NonTerminalAtom(body),
		// );
		// const function_: FunctionConcreteSyntaxTreeNode =
		// 	new FunctionConcreteSyntaxTreeNode(functionAtom);
		// return function_;
	}
	public abstract createFunctions(): SupportedFunctionsAbstractSyntaxTreeNode;
	// public abstract concretifyHeader(): OptionalFunctionHeaderConcreteSyntaxTreeNode;
	// public abstract createFunctions(): SupportedFunctionsAbstractSyntaxTreeNode;
	public lint(
		builtInFunctions: NonMainFunctions<BuiltInFunction>,
		nonMainFunctions: NonMainFunctions<NonMainFunctionAbstractSyntaxTreeNode>,
	): readonly string[] {
		// TODO
		const bodyLintingResults = this.children.body.lint(
			builtInFunctions,
			[],
			true,
			nonMainFunctions,
		);
		const functionLintingResults: readonly string[] = bodyLintingResults;
		return functionLintingResults;
	}
}
