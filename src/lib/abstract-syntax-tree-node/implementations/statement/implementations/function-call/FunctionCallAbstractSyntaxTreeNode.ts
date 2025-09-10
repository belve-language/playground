import type {FunctionCallAbstractSyntaxTreeNodeChildren} from "./children/FunctionCallAbstractSyntaxTreeNodeChildren.ts";
import {computeUnknowns} from "./computing-unknowns/computeUnknowns.ts";
import {SuccessAbstractifyingResult} from "../../../../../concrete-syntax-tree-node/abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {returnFunctionCallingResultTypeName} from "../../../../../function-calling-result/implementations/return/type-name/returnFunctionCallingResultTypeName.ts";
import {stepFunctionCallingResultTypeName} from "../../../../../function-calling-result/implementations/step/type-name/stepFunctionCallingResultTypeName.ts";
import {successFunctionCallingResultTypeName} from "../../../../../function-calling-result/implementations/success/type-name/successFunctionCallingResultTypeName.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {FailureStatementExecutingResult} from "../../../../../statement-executing-result/implementations/failure/FailureStatementExecutingResult.ts";
import {failureStatementExecutingResultTypeName} from "../../../../../statement-executing-result/implementations/failure/type-name/failureStatementExecutingResultTypeName.ts";
import {StepStatementExecutingResult} from "../../../../../statement-executing-result/implementations/step/StepStatementExecutingResult.ts";
import type {SupportedStatementExecutingResult} from "../../../../../statement-executing-result/supported/SupportedStatementExecutingResult.ts";
import type {Variables} from "../../../../../variables/Variables.ts";
import type {FunctionAbstractSyntaxTreeNodeChildrenFunctions} from "../../../functions/children/functions/FunctionAbstractSyntaxTreeNodeChildrenFunctions.ts";
import {StatementAbstractSyntaxTreeNode} from "../../StatementAbstractSyntaxTreeNode.ts";
import {computeId} from "./computing-id/computeId.ts";
import {computeKnownsNames} from "./computing-knowns-names/computeKnownsNames.ts";
import {computeKnownsValues} from "./computing-knowns-values/computeKnownsValues.ts";
import {computeUnknownsNames} from "./computing-unknowns-names/computeUnknownsNames.ts";
import type {Functions} from "../../../../../functions/Functions.ts";
import {ReturnStatementExecutingResult} from "../../../../../statement-executing-result/implementations/return/ReturnStatementExecutingResult.ts";
import {SuccessStatementExecutingResult} from "../../../../../statement-executing-result/implementations/success/SuccessStatementExecutingResult.ts";
export class FunctionCallStatementAbstractSyntaxTreeNode extends StatementAbstractSyntaxTreeNode<FunctionCallAbstractSyntaxTreeNodeChildren> {
	public static create(
		children: FunctionCallAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	): FunctionCallStatementAbstractSyntaxTreeNode {
		const id = computeId(children.segments);
		const knownsNames = computeKnownsNames(children.segments);
		const unknownsNames = computeUnknownsNames(children.segments);
		const node = new this(
			children,
			id,
			knownsNames,
			spanIndexes,
			unknownsNames,
		);
		return node;
	}
	private constructor(
		children: FunctionCallAbstractSyntaxTreeNodeChildren,
		id: string,
		knownsNames: readonly string[],
		spanIndexes: SpanIndexes,
		unknownsNames: readonly string[],
	) {
		super(children, spanIndexes);
		this.id = id;
		this.knownsNames = knownsNames;
		this.unknownsNames = unknownsNames;
	}
	public override *execute(
		functions: Functions,
		variables: Variables,
	): Generator<SupportedStatementExecutingResult, void, void> {
		yield new StepStatementExecutingResult(this);
		const function_ = functions[this.id];
		if (function_ === undefined) {
			throw new Error(`Function "${this.id}" not found.`);
		} else {
			const knownsValues = computeKnownsValues(this.knownsNames, variables);
			const functionCallingResults = function_.call(functions, knownsValues);
			let hasFailed = true;
			for (const functionCallingResult of functionCallingResults) {
				switch (functionCallingResult.typeName) {
					case stepFunctionCallingResultTypeName: {
						const statementExecutingResult = new StepStatementExecutingResult(
							functionCallingResult.data.node,
						);
						yield statementExecutingResult;
						break;
					}
					case successFunctionCallingResultTypeName: {
						const statementExecutingResult =
							new SuccessStatementExecutingResult(
								functionCallingResult.data.node,
							);
						yield statementExecutingResult;
						break;
					}
					case returnFunctionCallingResultTypeName: {
						hasFailed = false;
						const unknowns: Variables = computeUnknowns(
							this.unknownsNames,
							functionCallingResult.data.unknownsValues,
						);
						const statementExecutingResult = new ReturnStatementExecutingResult(
							unknowns,
						);
						yield new SuccessStatementExecutingResult(this);
						yield statementExecutingResult;
						break;
					}
					case failureStatementExecutingResultTypeName: {
						const statementExecutingResult =
							new FailureStatementExecutingResult(
								functionCallingResult.data.node,
							);
						yield statementExecutingResult;
						break;
					}
				}
			}
			if (hasFailed) {
				yield new FailureStatementExecutingResult(this);
			}
		}
	}
	private readonly id: string;
	private readonly knownsNames: readonly string[];
	private readonly unknownsNames: readonly string[];
}
