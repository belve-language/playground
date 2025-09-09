import type {StatementsConcreteSyntaxTreeNodeAtom} from "./atom/StatementsConcreteSyntaxTreeNodeAtom.ts";
import type {Statements} from "../../../../statements/Statements.ts";
import {OperatedStatementAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/operated-statement/OperatedStatementAbstractSyntaxTreeNode.ts";
import {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
export class StatementsConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<StatementsConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: StatementsConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<Statements> {
		const statement = this.atom.leftSubAtom.node;
		const optionalSeparatedStatements = this.atom.rightSubAtom.node;
		const statementAbstractifyingResult = statement.abstractify();
		switch (statementAbstractifyingResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const statementsAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(statementAbstractifyingResult.message);
				return statementsAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedStatement = statementAbstractifyingResult.data;
				const optionalSeparatedStatementsAbstractifyingResult =
					optionalSeparatedStatements.abstractify();
				switch (optionalSeparatedStatementsAbstractifyingResult.typeName) {
					case errorAbstractifyingResultTypeName: {
						const statementsAbstractifyingResult: ErrorAbstractifyingResult =
							new ErrorAbstractifyingResult(
								optionalSeparatedStatementsAbstractifyingResult.message,
							);
						return statementsAbstractifyingResult;
					}
					case successAbstractifyingResultTypeName: {
						const abstractifiedOptionalSeparatedStatements =
							optionalSeparatedStatementsAbstractifyingResult.data;
						if (abstractifiedOptionalSeparatedStatements === null) {
							const abstractifiedStatements: Statements = {
								initialOperatedStatements: [],
								lastStatement: abstractifiedStatement,
							};
							const statementsAbstractifyingResult: SuccessAbstractifyingResult<Statements> =
								new SuccessAbstractifyingResult<Statements>(
									abstractifiedStatements,
								);
							return statementsAbstractifyingResult;
						} else {
							const abstractifiedStatements: Statements = {
								initialOperatedStatements: [
									new OperatedStatementAbstractSyntaxTreeNode(
										{
											operator:
												abstractifiedOptionalSeparatedStatements.operator,
											statement: abstractifiedStatement,
										},
										new SpanIndexes(
											abstractifiedStatement.spanIndexes.from,
											abstractifiedOptionalSeparatedStatements.operator.spanIndexes.until,
										),
									),
									...abstractifiedOptionalSeparatedStatements.statements
										.initialOperatedStatements,
								],
								lastStatement:
									abstractifiedOptionalSeparatedStatements.statements
										.lastStatement,
							};
							const statementsAbstractifyingResult: SuccessAbstractifyingResult<Statements> =
								new SuccessAbstractifyingResult<Statements>(
									abstractifiedStatements,
								);
							return statementsAbstractifyingResult;
						}
					}
				}
			}
		}
	}
}
