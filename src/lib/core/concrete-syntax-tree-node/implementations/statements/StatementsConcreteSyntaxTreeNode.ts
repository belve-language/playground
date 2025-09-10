import type {StatementsConcreteSyntaxTreeNodeAtom} from "./atom/StatementsConcreteSyntaxTreeNodeAtom.ts";
import type {Statements} from "../../../../../statements/Statements.ts";
import {OperatedStatementAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/operated-statement/OperatedStatementAbstractSyntaxTreeNode.ts";
import {StatementsAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/statements/StatementsAbstractSyntaxTreeNode.ts";
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
		| SuccessAbstractifyingResult<StatementsAbstractSyntaxTreeNode> {
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
							const abstractifiedStatements: StatementsAbstractSyntaxTreeNode =
								new StatementsAbstractSyntaxTreeNode(
									{
										finalStatement: abstractifiedStatement,
										initialOperatedStatements: [],
									},
									abstractifiedStatement.spanIndexes,
								);
							const statementsAbstractifyingResult: SuccessAbstractifyingResult<StatementsAbstractSyntaxTreeNode> =
								new SuccessAbstractifyingResult<StatementsAbstractSyntaxTreeNode>(
									abstractifiedStatements,
								);
							return statementsAbstractifyingResult;
						} else {
							const abstractifiedStatements: StatementsAbstractSyntaxTreeNode =
								new StatementsAbstractSyntaxTreeNode(
									{
										finalStatement:
											abstractifiedOptionalSeparatedStatements.statements
												.children.finalStatement,
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
												.children.initialOperatedStatements,
										],
									},
									new SpanIndexes(
										abstractifiedStatement.spanIndexes.from,
										abstractifiedOptionalSeparatedStatements.statements.children.finalStatement.spanIndexes.until,
									),
								);
							const statementsAbstractifyingResult: SuccessAbstractifyingResult<StatementsAbstractSyntaxTreeNode> =
								new SuccessAbstractifyingResult<StatementsAbstractSyntaxTreeNode>(
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
