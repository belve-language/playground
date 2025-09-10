import type {OperatedStatementAbstractSyntaxTreeNodeChildren} from "./children/OperatedStatementAbstractSyntaxTreeNodeChildren.ts";
import type {Statements} from "../../../../../statements/Statements.ts";
import type {Functions} from "../../../functions/Functions.ts";
import {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import type {SupportedStatementExecutingResult} from "../../../statement-executing-result/supported/SupportedStatementExecutingResult.ts";
import type {Variables} from "../../../variables/Variables.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import {pickBfslyFromInfiniteGenerators} from "../functions/FunctionsAbstractSyntaxTreeNode.ts";
import type {StatementsAbstractSyntaxTreeNode} from "../statements/StatementsAbstractSyntaxTreeNode.ts";
export class OperatedStatementAbstractSyntaxTreeNode extends AbstractSyntaxTreeNode<OperatedStatementAbstractSyntaxTreeNodeChildren> {
	public constructor(
		children: OperatedStatementAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
	public *execute(
		functions: Functions,
		restStatements: StatementsAbstractSyntaxTreeNode,
		variables: Variables,
	): Generator<SupportedStatementExecutingResult, void, void> {
		const thisStatement = this.children.statement;
		const thisStatementExecutingResults = this.children.operator.operate(
			thisStatement,
			functions,
			restStatements,
			variables,
		);
		yield* thisStatementExecutingResults;
	}
	public *mutate(
		functions: Functions,
	): Generator<OperatedStatementAbstractSyntaxTreeNode, void, void> {
		const children = this.children;
		yield* pickBfslyFromInfiniteGenerators(
			(function* () {
				for (const mutatedOperator of children.operator.mutate()) {
					yield new OperatedStatementAbstractSyntaxTreeNode(
						{operator: mutatedOperator, statement: children.statement},
						new SpanIndexes(0, 0),
					);
				}
			})(),
			(function* () {
				for (const mutatedStatement of children.statement.mutate(functions)) {
					yield new OperatedStatementAbstractSyntaxTreeNode(
						{operator: children.operator, statement: mutatedStatement},
						new SpanIndexes(0, 0),
					);
				}
			})(),
		);
	}
}
