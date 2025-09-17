import type {BlockStatementAbstractSyntaxTreeNodeChildren} from "./children/BlockStatementAbstractSyntaxTreeNodeChildren.ts";
import type {BlockStatementConcreteSyntaxTreeNode} from "../../../../../concrete-syntax-tree-node/implementations/block-statement/BlockStatementConcreteSyntaxTreeNode.ts";
import type {NonMainFunctions} from "../../../../../non-main-functions/NonMainFunctions.ts";
import {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {FailureStatementExecutingResult} from "../../../../../statement-executing-result/implementations/failure/FailureStatementExecutingResult.ts";
import {failureStatementExecutingResultTypeName} from "../../../../../statement-executing-result/implementations/failure/type-name/failureStatementExecutingResultTypeName.ts";
import {
	FailureLogStatementExecutingResult,
	StepLogStatementExecutingResult,
	SuccessLogStatementExecutingResult,
	type SupportedLogStatementExecutingResult,
} from "../../../../../statement-executing-result/implementations/log/LogStatementExecutingResult.ts";
import {logStatementExecutingResultTypeName} from "../../../../../statement-executing-result/implementations/log/type-name/logStatementExecutingResultTypeName.ts";
import {ReturnStatementExecutingResult} from "../../../../../statement-executing-result/implementations/return/ReturnStatementExecutingResult.ts";
import {returnStatementExecutingResultTypeName} from "../../../../../statement-executing-result/implementations/return/type-name/returnStatementExecutingResultTypeName.ts";
import type {Variables} from "../../../../../variables/Variables.ts";
import type {FunctionHeaderAbstractSyntaxTreeNode} from "../../../function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
import {StatementAbstractSyntaxTreeNode} from "../../StatementAbstractSyntaxTreeNode.ts";
export class BlockStatementAbstractSyntaxTreeNode extends StatementAbstractSyntaxTreeNode<BlockStatementAbstractSyntaxTreeNodeChildren> {
	public constructor(
		children: BlockStatementAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
	public concretify(): BlockStatementConcreteSyntaxTreeNode {
		// TODO
		throw new Error("Method not implemented.");
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
		const blockStatementExecutingResult1 = new StepLogStatementExecutingResult(
			this,
			variables,
		);
		yield blockStatementExecutingResult1;
		const statements = this.children.statements;
		const statementsExecutingResults = statements.execute(
			nonMainFunctions,
			variables,
		);
		for (const statementsExecutingResult of statementsExecutingResults) {
			switch (statementsExecutingResult.typeName) {
				case logStatementExecutingResultTypeName: {
					const blockStatementExecutingResult2 = statementsExecutingResult;
					// TODO
					// new LogStatementExecutingResult(
					// 	statementsExecutingResult.actionTypeName,
					// 	statementsExecutingResult.node,
					// 	statementsExecutingResult.variables,
					// );
					yield blockStatementExecutingResult2;
					break;
				}
				case returnStatementExecutingResultTypeName: {
					const unknowns: Variables = statementsExecutingResult.unknowns;
					const blockStatementExecutingResult2 =
						new SuccessLogStatementExecutingResult(this, unknowns, variables);
					yield blockStatementExecutingResult2;
					const blockStatementExecutingResult3 =
						new ReturnStatementExecutingResult(unknowns);
					yield blockStatementExecutingResult3;
					break;
				}
				case failureStatementExecutingResultTypeName: {
					const blockStatementExecutingResult2 =
						new FailureLogStatementExecutingResult(this, variables);
					yield blockStatementExecutingResult2;
					const blockStatementExecutingResult3 =
						new FailureStatementExecutingResult();
					yield blockStatementExecutingResult3;
					break;
				}
			}
		}
	}
	public lint(): readonly string[] {
		// TODO
		throw new Error("Method not implemented.");
	}
	public override *mutate(
		nonMainFunctionsHeaders: readonly FunctionHeaderAbstractSyntaxTreeNode[],
		unknownsNames: readonly string[],
		userVariablesNames: readonly string[],
	): Generator<BlockStatementAbstractSyntaxTreeNode, void, void> {
		for (const mutatedStatements of this.children.statements.mutate(
			nonMainFunctionsHeaders,
			unknownsNames,
			userVariablesNames,
		)) {
			const mutatedBlockStatement = new BlockStatementAbstractSyntaxTreeNode(
				{statements: mutatedStatements},
				new SpanIndexes(0, 0),
			);
			yield mutatedBlockStatement;
		}
	}
}
