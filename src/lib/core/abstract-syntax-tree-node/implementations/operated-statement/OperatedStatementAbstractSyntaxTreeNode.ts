import type {OperatedStatementAbstractSyntaxTreeNodeChildren} from "./children/OperatedStatementAbstractSyntaxTreeNodeChildren.ts";
import type {Functions} from "../../../functions/Functions.ts";
import {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import type {SupportedStatementExecutingResult} from "../../../statement-executing-result/supported/SupportedStatementExecutingResult.ts";
import type {Variables} from "../../../variables/Variables.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {FunctionHeaderAbstractSyntaxTreeNode} from "../function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
import {OrOperatorAbstractSyntaxTreeNode} from "../operator/implementations/or/OrOperatorAbstractSyntaxTreeNode.ts";
import {ThenOperatorAbstractSyntaxTreeNode} from "../operator/implementations/then/ThenOperatorAbstractSyntaxTreeNode.ts";
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
	public scanSetUnknowns(
		unknownsNamesToSet: ReadonlySet<string>,
	): ReadonlySet<string> {
		// TODO: CHECK BY TYPE NAME
		if (this.children.operator instanceof OrOperatorAbstractSyntaxTreeNode) {
			return unknownsNamesToSet;
		} else if (
			this.children.operator instanceof ThenOperatorAbstractSyntaxTreeNode
		) {
			return this.children.statement.scanSetUnknowns(unknownsNamesToSet);
		}
		throw new Error(`Unknown operator`);
	}
	public stringify(indentationLevel: number): string {
		return `${this.children.statement.stringify(indentationLevel)}${this.children.operator.stringify()}`;
	}
}
