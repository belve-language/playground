import type {FunctionAbstractSyntaxTreeNodeChildren} from "./children/FunctionAbstractSyntaxTreeNodeChildren.ts";
import {ReturnFunctionCallingResult} from "../../../function-calling-result/implementations/return/ReturnFunctionCallingResult.ts";
import {StepFunctionCallingResult} from "../../../function-calling-result/implementations/step/StepFunctionCallingResult.ts";
import {SuccessFunctionCallingResult} from "../../../function-calling-result/implementations/success/SuccessFunctionCallingResult.ts";
import type {SupportedFunctionCallingResult} from "../../../function-calling-result/supported/SupportedFunctionCallingResult.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import {computeKnowns} from "./computing-knowns/computeKnowns.ts";
import type {Functions} from "../../../functions/Functions.ts";
import {returnStatementExecutingResultTypeName} from "../../../statement-executing-result/implementations/return/type-name/returnStatementExecutingResultTypeName.ts";
import {stepStatementExecutingResultTypeName} from "../../../statement-executing-result/implementations/step/type-name/stepStatementExecutingResultTypeName.ts";
import {successStatementExecutingResultTypeName} from "../../../statement-executing-result/implementations/success/type-name/successStatementExecutingResultTypeName.ts";
import type {SupportedStatementExecutingResult} from "../../../statement-executing-result/supported/SupportedStatementExecutingResult.ts";
import type {Variables} from "../../../variables/Variables.ts";
import type {FunctionHeaderAbstractSyntaxTreeNode} from "../function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
import type {FunctionsAbstractSyntaxTreeNode} from "../functions/FunctionsAbstractSyntaxTreeNode.ts";
export abstract class FunctionAbstractSyntaxTreeNode<
	FunctionHeaderAbstractSyntaxTreeNodeToUse extends
		FunctionHeaderAbstractSyntaxTreeNode | null,
> extends AbstractSyntaxTreeNode<
	FunctionAbstractSyntaxTreeNodeChildren<FunctionHeaderAbstractSyntaxTreeNodeToUse>
> {
	public constructor(
		children: FunctionAbstractSyntaxTreeNodeChildren<FunctionHeaderAbstractSyntaxTreeNodeToUse>,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
	public *call(
		functions: Functions,
		knownsValues: readonly unknown[],
	): Generator<SupportedFunctionCallingResult, void, void> {
		const knowns = computeKnowns(this.children.header, knownsValues);
		const bodyExecutingResults = this.children.body.execute(functions, knowns);
		for (const bodyExecutingResult of bodyExecutingResults) {
			switch (bodyExecutingResult.typeName) {
				case stepStatementExecutingResultTypeName: {
					const functionCallingResult: StepFunctionCallingResult =
						new StepFunctionCallingResult(bodyExecutingResult.data.node);
					yield functionCallingResult;
					break;
				}
				case successStatementExecutingResultTypeName: {
					const functionCallingResult: SuccessFunctionCallingResult =
						new SuccessFunctionCallingResult(bodyExecutingResult.data.node);
					yield functionCallingResult;
					break;
				}
				case returnStatementExecutingResultTypeName: {
					const unknownsValues = this.computeUnknownsValues(
						bodyExecutingResult.data.variables,
					);
					const functionCallingResult: ReturnFunctionCallingResult =
						new ReturnFunctionCallingResult(unknownsValues);
					yield functionCallingResult;
					break;
				}
			}
			continue;
		}
	}
	public abstract computeUnknownsValues(
		variables: Variables,
	): readonly unknown[];
	public abstract createFunctions(): FunctionsAbstractSyntaxTreeNode;
	public abstract putIntoFunctions(
		functions: FunctionsAbstractSyntaxTreeNode,
	): FunctionsAbstractSyntaxTreeNode;
}
