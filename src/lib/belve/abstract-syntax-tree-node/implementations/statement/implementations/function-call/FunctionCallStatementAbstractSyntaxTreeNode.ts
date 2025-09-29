import type {FunctionCallStatementAbstractSyntaxTreeNodeChildren} from "./children/FunctionCallStatementAbstractSyntaxTreeNodeChildren.ts";
import {computeId} from "./computing-id/computeId.ts";
import {computeKnownsNames} from "./computing-knowns-names/computeKnownsNames.ts";
import {computeKnownsValues} from "./computing-knowns-values/computeKnownsValues.ts";
import {computeUnknownsNames} from "./computing-unknowns-names/computeUnknownsNames.ts";
import type {BuiltInFunction} from "../../../../../../playground/built-in-functions/built-in-function/BuiltInFunction.ts";
import type {Function} from "../../../../../function/Function.ts";
import {failureLogFunctionCallingResultActionTypeName} from "../../../../../function-calling-result/implementations/log/implementations/failure/action-type-name/failureLogFunctionCallingResultActionTypeName.ts";
import {stepLogFunctionCallingResultActionTypeName} from "../../../../../function-calling-result/implementations/log/implementations/step/action-type-name/stepLogFunctionCallingResultActionTypeName.ts";
import {successLogFunctionCallingResultActionTypeName} from "../../../../../function-calling-result/implementations/log/implementations/success/action-type-name/successLogFunctionCallingResultActionTypeName.ts";
import {logFunctionCallingResultTypeName} from "../../../../../function-calling-result/implementations/log/type-name/logFunctionCallingResultTypeName.ts";
import {returnFunctionCallingResultTypeName} from "../../../../../function-calling-result/implementations/return/type-name/returnFunctionCallingResultTypeName.ts";
import type {NonMainFunctions} from "../../../../../non-main-functions/NonMainFunctions.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {ReturnStatementExecutingResult} from "../../../../../statement-executing-result/implementations/return/ReturnStatementExecutingResult.ts";
import type {Variables} from "../../../../../variables/Variables.ts";
import type {FunctionHeaderAbstractSyntaxTreeNode} from "../../../function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
import {StatementAbstractSyntaxTreeNode} from "../../StatementAbstractSyntaxTreeNode.ts";
import {computeUnknowns} from "./computing-unknowns/computeUnknowns.ts";
import {FailureLogStatementExecutingResult} from "../../../../../statement-executing-result/implementations/log/implementations/failure/FailureLogStatementExecutingResult.ts";
import {StepLogStatementExecutingResult} from "../../../../../statement-executing-result/implementations/log/implementations/step/StepLogStatementExecutingResult.ts";
import {SuccessLogStatementExecutingResult} from "../../../../../statement-executing-result/implementations/log/implementations/success/SuccessLogStatementExecutingResult.ts";
import type {SupportedLogStatementExecutingResult} from "../../../../../statement-executing-result/implementations/log/supported/SupportedLogStatementExecutingResult.ts";
import type {NonMainFunctionAbstractSyntaxTreeNode} from "../../../function/implementations/non-main/NonMainFunctionAbstractSyntaxTreeNode.ts";
import type {SupportedStatementAbstractSyntaxTreeNode} from "../../supported/SupportedStatementAbstractSyntaxTreeNode.ts";
import type {BlockStatementAbstractSyntaxTreeNode} from "../block/BlockStatementAbstractSyntaxTreeNode.ts";
export class FunctionCallStatementAbstractSyntaxTreeNode extends StatementAbstractSyntaxTreeNode<FunctionCallStatementAbstractSyntaxTreeNodeChildren> {
	public static create(
		children: FunctionCallStatementAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	): FunctionCallStatementAbstractSyntaxTreeNode {
		const id: string = computeId(children.segments);
		const knownsNames: readonly string[] = computeKnownsNames(
			children.segments,
		);
		const unknownsNames: readonly string[] = computeUnknownsNames(
			children.segments,
		);
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
	public override checkIfBlockIsEqualTo(
		other: BlockStatementAbstractSyntaxTreeNode,
	): readonly string[] {
		return [];
	}
	public override checkIfFunctionCallIsEqualTo(
		other: FunctionCallStatementAbstractSyntaxTreeNode,
	): readonly string[] {
		// TODO
		return (
				this.id === other.id
					&& this.knownsNames.length === other.knownsNames.length
					&& this.knownsNames.every(
						(knownName, index) => knownName === other.knownsNames[index],
					)
					&& this.unknownsNames.length === other.unknownsNames.length
					&& this.unknownsNames.every(
						(unknownName, index) => unknownName === other.unknownsNames[index],
					)
			) ?
				[
					`Function call statement "${this.id}" already present in the same branch.`,
				]
			:	[];
	}
	// TODO: no public?
	public override checkIfWasAlreadyUsed(
		encounteredStatements: readonly SupportedStatementAbstractSyntaxTreeNode[],
	): readonly string[] {
		return encounteredStatements.flatMap((encounteredStatement) => {
			return encounteredStatement.checkIfFunctionCallIsEqualTo(this);
		});
	}
	public override *execute(
		availables: Variables,
		nonMainFunctions: NonMainFunctions<Function>,
	): Generator<
		ReturnStatementExecutingResult | SupportedLogStatementExecutingResult,
		void,
		void
	> {
		const functionCallStatementExecutingResult1 =
			new StepLogStatementExecutingResult(availables, this);
		yield functionCallStatementExecutingResult1;
		const function_ = nonMainFunctions[this.id];
		if (function_ === undefined) {
			throw new Error(`Function "${this.id}" not found.`);
		} else {
			const knownsValues = computeKnownsValues(availables, this.knownsNames);
			const functionCallingResults = function_.call(
				nonMainFunctions,
				knownsValues,
			);
			let hasFailed = true;
			for (const functionCallingResult of functionCallingResults) {
				switch (functionCallingResult.typeName) {
					case logFunctionCallingResultTypeName: {
						switch (functionCallingResult.actionTypeName) {
							case failureLogFunctionCallingResultActionTypeName: {
								const functionCallStatementExecutingResult2: FailureLogStatementExecutingResult =
									new FailureLogStatementExecutingResult(
										functionCallingResult.availables,
										functionCallingResult.node,
									);
								yield functionCallStatementExecutingResult2;
								break;
							}
							case stepLogFunctionCallingResultActionTypeName: {
								const functionCallStatementExecutingResult2: StepLogStatementExecutingResult =
									new StepLogStatementExecutingResult(
										functionCallingResult.availables,
										functionCallingResult.node,
									);
								yield functionCallStatementExecutingResult2;
								break;
							}
							case successLogFunctionCallingResultActionTypeName: {
								const functionCallStatementExecutingResult2: SuccessLogStatementExecutingResult =
									new SuccessLogStatementExecutingResult(
										functionCallingResult.availables,
										functionCallingResult.node,
										functionCallingResult.unknowns,
									);
								yield functionCallStatementExecutingResult2;
								break;
							}
						}
						break;
					}
					case returnFunctionCallingResultTypeName: {
						hasFailed = false;
						const unknowns: Variables = computeUnknowns(
							this.unknownsNames,
							functionCallingResult.unknownsValues,
						);
						const functionCallStatementExecutingResult2: SuccessLogStatementExecutingResult =
							new SuccessLogStatementExecutingResult(
								availables,
								this,
								unknowns,
							);
						yield functionCallStatementExecutingResult2;
						const functionCallStatementExecutingResult3: ReturnStatementExecutingResult =
							new ReturnStatementExecutingResult(unknowns);
						yield functionCallStatementExecutingResult3;
						break;
					}
				}
			}
			if (hasFailed) {
				const functionCallStatementExecutingResult2: FailureLogStatementExecutingResult =
					new FailureLogStatementExecutingResult(availables, this);
				yield functionCallStatementExecutingResult2;
			}
		}
	}
	private readonly id: string;
	private readonly knownsNames: readonly string[];
	public override lint(
		builtInFunctions: NonMainFunctions<BuiltInFunction>,
		encounteredStatements: readonly SupportedStatementAbstractSyntaxTreeNode[],
		hasEncounteredOtherStatements: boolean,
		nonMainFunctions: NonMainFunctions<NonMainFunctionAbstractSyntaxTreeNode>,
	): readonly string[] {
		console.log(this.id);
		return [
			...(this.id in builtInFunctions || this.id in nonMainFunctions ?
				[]
			:	[`Function "${this.id}" not found.`]),
			...this.checkIfWasAlreadyUsed(encounteredStatements),
		];
	}
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
