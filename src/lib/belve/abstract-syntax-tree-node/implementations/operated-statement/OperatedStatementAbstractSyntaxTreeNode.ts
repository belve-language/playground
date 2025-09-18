import type {OperatedStatementAbstractSyntaxTreeNodeChildren} from "./children/OperatedStatementAbstractSyntaxTreeNodeChildren.ts";
import type {NonMainFunctions} from "../../../non-main-functions/NonMainFunctions.ts";
import {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import type {SupportedStatementExecutingResult} from "../../../statement-executing-result/supported/SupportedStatementExecutingResult.ts";
import type {Variables} from "../../../variables/Variables.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {FunctionHeaderAbstractSyntaxTreeNode} from "../function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
import type {SupportedStatementsAbstractSyntaxTreeNode} from "../statements/supported/SupportedStatementsAbstractSyntaxTreeNode.ts";
export class OperatedStatementAbstractSyntaxTreeNode extends AbstractSyntaxTreeNode<OperatedStatementAbstractSyntaxTreeNodeChildren> {
	public constructor(
		children: OperatedStatementAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
	public *execute(
		nonMainFunctions: NonMainFunctions,
		restStatements: SupportedStatementsAbstractSyntaxTreeNode,
		variables: Variables,
	): Generator<SupportedStatementExecutingResult, void, void> {
		const statement = this.children.statement;
		const operatorOperatingResults = this.children.operator.operate(
			statement,
			nonMainFunctions,
			restStatements,
			variables,
		);
		for (const operatorOperatingResult of operatorOperatingResults) {
			const operatedStatementExecutingResult = operatorOperatingResult;
			yield operatedStatementExecutingResult;
		}
	}
	public *mutate(
		functionsHeaders: readonly [
			FunctionHeaderAbstractSyntaxTreeNode,
			...FunctionHeaderAbstractSyntaxTreeNode[],
		],
		unknownsNames: readonly string[],
		userVariablesNames: readonly string[],
	): Generator<OperatedStatementAbstractSyntaxTreeNode, void, void> {
		const this_ = this;
		for (const mutatedOperator of this_.children.operator.mutate()) {
			yield new OperatedStatementAbstractSyntaxTreeNode(
				{operator: mutatedOperator, statement: this_.children.statement},
				new SpanIndexes(0, 0),
			);
		}
		for (const mutatedStatement of this_.children.statement.mutate(
			functionsHeaders,
			unknownsNames,
			userVariablesNames,
		)) {
			yield new OperatedStatementAbstractSyntaxTreeNode(
				{operator: this_.children.operator, statement: mutatedStatement},
				new SpanIndexes(0, 0),
			);
			for (const mutatedOperator of this_.children.operator.mutate()) {
				yield new OperatedStatementAbstractSyntaxTreeNode(
					{operator: mutatedOperator, statement: mutatedStatement},
					new SpanIndexes(0, 0),
				);
			}
		}
	}
}
