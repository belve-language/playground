import type {FunctionCallStatementAbstractSyntaxTreeNodeChildren} from "./children/FunctionCallStatementAbstractSyntaxTreeNodeChildren.ts";
import {computeId} from "./computing-id/computeId.ts";
import {computeKnownsNames} from "./computing-knowns-names/computeKnownsNames.ts";
import {computeKnownsValues} from "./computing-knowns-values/computeKnownsValues.ts";
import {computeUnknownsNames} from "./computing-unknowns-names/computeUnknownsNames.ts";
import {
	failureLogFunctionCallingResultTypeName,
	stepLogFunctionCallingResultTypeName,
	successLogFunctionCallingResultTypeName,
} from "../../../../../function-calling-result/implementations/log/LogFunctionCallingResult.ts";
import {logFunctionCallingResultTypeName} from "../../../../../function-calling-result/implementations/log/type-name/logFunctionCallingResultTypeName.ts";
import {returnFunctionCallingResultTypeName} from "../../../../../function-calling-result/implementations/return/type-name/returnFunctionCallingResultTypeName.ts";
import type {NonMainFunctions} from "../../../../../non-main-functions/NonMainFunctions.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {FailureStatementExecutingResult} from "../../../../../statement-executing-result/implementations/failure/FailureStatementExecutingResult.ts";
import {
	FailureLogStatementExecutingResult,
	StepLogStatementExecutingResult,
	SuccessLogStatementExecutingResult,
	type SupportedLogStatementExecutingResult,
} from "../../../../../statement-executing-result/implementations/log/LogStatementExecutingResult.ts";
import {ReturnStatementExecutingResult} from "../../../../../statement-executing-result/implementations/return/ReturnStatementExecutingResult.ts";
import type {Variables} from "../../../../../variables/Variables.ts";
import type {FunctionHeaderAbstractSyntaxTreeNode} from "../../../function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
import {StatementAbstractSyntaxTreeNode} from "../../StatementAbstractSyntaxTreeNode.ts";
export class FunctionCallStatementAbstractSyntaxTreeNode extends StatementAbstractSyntaxTreeNode<FunctionCallStatementAbstractSyntaxTreeNodeChildren> {
	public static create(
		children: FunctionCallStatementAbstractSyntaxTreeNodeChildren,
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
		children: FunctionCallStatementAbstractSyntaxTreeNodeChildren,
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
	private computeUnknowns(unknownsValues: readonly unknown[]): Variables {
		const unknowns: Variables = Object.fromEntries(
			this.unknownsNames.map(
				(name: string, index: number): readonly [string, unknown] => {
					return [name, unknownsValues[index]];
				},
			),
		);
		return unknowns;
	}
	public override *execute(
		nonMainFunctions: NonMainFunctions,
		variables: Variables,
	): Generator<
		| FailureStatementExecutingResult
		| ReturnStatementExecutingResult
		| SupportedLogStatementExecutingResult,
		void,
		void
	> {
		const functionCallStatementExecutingResult1 =
			new StepLogStatementExecutingResult(this, variables);
		yield functionCallStatementExecutingResult1;
		const function_ = nonMainFunctions[this.id];
		if (function_ === undefined) {
			throw new Error(`Function "${this.id}" not found.`);
		} else {
			const knownsValues = computeKnownsValues(this.knownsNames, variables);
			const functionCallingResults = function_.call(
				nonMainFunctions,
				knownsValues,
			);
			let hasFailed = true;
			for (const functionCallingResult of functionCallingResults) {
				switch (functionCallingResult.typeName) {
					case logFunctionCallingResultTypeName: {
						// const functionCallStatementExecutingResult =
						// 	new LogStatementExecutingResult(
						// 		functionCallingResult.actionTypeName,
						// 		functionCallingResult.node,
						// 		functionCallingResult.variables,
						// 	);
						// yield functionCallStatementExecutingResult;
						switch (functionCallingResult.actionTypeName) {
							case stepLogFunctionCallingResultTypeName: {
								const functionCallStatementExecutingResult2 =
									new StepLogStatementExecutingResult(
										functionCallingResult.node,
										functionCallingResult.variables,
									);
								yield functionCallStatementExecutingResult2;
								break;
							}
							case successLogFunctionCallingResultTypeName: {
								const functionCallStatementExecutingResult2 =
									new SuccessLogStatementExecutingResult(
										functionCallingResult.node,
										functionCallingResult.unknowns,
										functionCallingResult.variables,
									);
								yield functionCallStatementExecutingResult2;
								break;
							}
							case failureLogFunctionCallingResultTypeName: {
								const functionCallStatementExecutingResult2 =
									new FailureLogStatementExecutingResult(
										functionCallingResult.node,
										functionCallingResult.variables,
									);
								yield functionCallStatementExecutingResult2;
								break;
							}
						}
						break;
					}
					case returnFunctionCallingResultTypeName: {
						hasFailed = false;
						const unknowns: Variables = this.computeUnknowns(
							functionCallingResult.unknownsValues,
						);
						const functionCallStatementExecutingResult2 =
							new SuccessLogStatementExecutingResult(this, unknowns, variables);
						yield functionCallStatementExecutingResult2;
						const functionCallStatementExecutingResult3 =
							new ReturnStatementExecutingResult(unknowns);
						yield functionCallStatementExecutingResult3;
						break;
					}
				}
			}
			if (hasFailed) {
				const functionCallStatementExecutingResult2 =
					new FailureLogStatementExecutingResult(this, variables);
				yield functionCallStatementExecutingResult2;
				const functionCallStatementExecutingResult3 =
					new FailureStatementExecutingResult();
				yield functionCallStatementExecutingResult3;
			}
		}
	}
	private readonly id: string;
	private readonly knownsNames: readonly string[];
	public override *mutate(
		functionsHeaders: readonly [
			FunctionHeaderAbstractSyntaxTreeNode,
			...FunctionHeaderAbstractSyntaxTreeNode[],
		],
		unknownsNames: readonly string[],
		userVariablesNames: readonly string[],
	): Generator<FunctionCallStatementAbstractSyntaxTreeNode, void, void> {
		// TODO
	}
	private readonly unknownsNames: readonly string[];
}
