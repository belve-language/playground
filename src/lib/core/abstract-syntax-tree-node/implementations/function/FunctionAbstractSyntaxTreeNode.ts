import type {FunctionAbstractSyntaxTreeNodeChildren} from "./children/FunctionAbstractSyntaxTreeNodeChildren.ts";
import type {SupportedAbstractifyingResult} from "../../../abstractifying-result/supported/SupportedAbstractifyingResult.ts";
import type {FunctionConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/function/FunctionConcreteSyntaxTreeNode.ts";
import {FailureFunctionCallingResult} from "../../../function-calling-result/implementations/failure/FailureFunctionCallingResult.ts";
import {ReturnFunctionCallingResult} from "../../../function-calling-result/implementations/return/ReturnFunctionCallingResult.ts";
import {StepFunctionCallingResult} from "../../../function-calling-result/implementations/step/StepFunctionCallingResult.ts";
import {SuccessFunctionCallingResult} from "../../../function-calling-result/implementations/success/SuccessFunctionCallingResult.ts";
import type {SupportedFunctionCallingResult} from "../../../function-calling-result/supported/SupportedFunctionCallingResult.ts";
import type {Functions} from "../../../non-main-functions/NonMainFunctions.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {failureStatementExecutingResultTypeName} from "../../../statement-executing-result/implementations/failure/type-name/failureStatementExecutingResultTypeName.ts";
import {returnStatementExecutingResultTypeName} from "../../../statement-executing-result/implementations/return/type-name/returnStatementExecutingResultTypeName.ts";
import {stepStatementExecutingResultTypeName} from "../../../statement-executing-result/implementations/step/type-name/stepStatementExecutingResultTypeName.ts";
import {successStatementExecutingResultTypeName} from "../../../statement-executing-result/implementations/success/type-name/successStatementExecutingResultTypeName.ts";
import type {Variables} from "../../../variables/Variables.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {FunctionsAbstractSyntaxTreeNode} from "../functions/FunctionsAbstractSyntaxTreeNode.ts";
export abstract class FunctionAbstractSyntaxTreeNode extends AbstractSyntaxTreeNode<FunctionAbstractSyntaxTreeNodeChildren> {
	public constructor(
		children: FunctionAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
	public abstract addToFunctions(
		functions: FunctionsAbstractSyntaxTreeNode,
	): SupportedAbstractifyingResult<FunctionsAbstractSyntaxTreeNode>;
	public *call(
		nonMainFunctions: NonMainFunctions,
		knownsValues: readonly unknown[],
	): Generator<SupportedFunctionCallingResult, void, void> {
		const knowns = this.children.header.computeKnowns(knownsValues);
		const bodyExecutingResults = this.children.body.execute(functions, knowns);
		for (const bodyExecutingResult of bodyExecutingResults) {
			switch (bodyExecutingResult.typeName) {
				case stepStatementExecutingResultTypeName: {
					const functionCallingResult: StepFunctionCallingResult =
						new StepFunctionCallingResult(
							bodyExecutingResult.data.node,
							bodyExecutingResult.data.variables,
						);
					yield functionCallingResult;
					break;
				}
				case successStatementExecutingResultTypeName: {
					const functionCallingResult: SuccessFunctionCallingResult =
						new SuccessFunctionCallingResult(
							bodyExecutingResult.data.node,
							bodyExecutingResult.data.variables,
						);
					yield functionCallingResult;
					break;
				}
				case returnStatementExecutingResultTypeName: {
					const unknownsValues = this.computeUnknownsValues(
						bodyExecutingResult.data.variables,
					);
					const functionCallingResult: ReturnFunctionCallingResult =
						new ReturnFunctionCallingResult(
							unknownsValues,
							bodyExecutingResult.data.variables,
						);
					yield functionCallingResult;
					break;
				}
				case failureStatementExecutingResultTypeName: {
					const functionCallingResult = new FailureFunctionCallingResult(
						bodyExecutingResult.data.node,
						bodyExecutingResult.data.variables,
					);
					yield functionCallingResult;
					break;
				}
			}
		}
	}
	public abstract computeUnknownsValues(
		variables: Variables,
	): readonly unknown[];
	public override concretify(): FunctionConcreteSyntaxTreeNode {
		const header = this.children.header.concretify();
		const body = this.children.body.concretify();
		const atom: FunctionConcreteSyntaxTreeNodeAtom = ThenAtom.create(
			header,
			body,
		);
		const function_: FunctionConcreteSyntaxTreeNode =
			new FunctionConcreteSyntaxTreeNode(atom);
		return function_;
	}
	public abstract createFunctions(): FunctionsAbstractSyntaxTreeNode;
	public lint(): readonly string[] {
		const bodyMessages = this.children.body.lint();
		const functionMessages = bodyMessages;
		return functionMessages;
	}
}
