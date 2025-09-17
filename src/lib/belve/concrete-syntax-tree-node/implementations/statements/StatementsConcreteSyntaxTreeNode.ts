import type {StatementsConcreteSyntaxTreeNodeAtom} from "./atom/StatementsConcreteSyntaxTreeNodeAtom.ts";
import {OperatedStatementAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/operated-statement/OperatedStatementAbstractSyntaxTreeNode.ts";
import {StatementsAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/statements/StatementsAbstractSyntaxTreeNode.ts";
import {FinalStatementsAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/statements/implementations/final/FinalStatementsAbstractSyntaxTreeNode.ts";
import {IntermediateStatementsAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/statements/implementations/intermediate/IntermediateStatementsAbstractSyntaxTreeNode.ts";
import type {SupportedStatementsAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/statements/supported/SupportedStatementsAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class StatementsConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<StatementsConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: StatementsConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<SupportedStatementsAbstractSyntaxTreeNode> {
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
							const abstractifiedStatements: FinalStatementsAbstractSyntaxTreeNode =
								new FinalStatementsAbstractSyntaxTreeNode(
									{statement: abstractifiedStatement},
									abstractifiedStatement.spanIndexes,
								);
							const statementsAbstractifyingResult: SuccessAbstractifyingResult<FinalStatementsAbstractSyntaxTreeNode> =
								new SuccessAbstractifyingResult<FinalStatementsAbstractSyntaxTreeNode>(
									abstractifiedStatements,
								);
							return statementsAbstractifyingResult;
						} else {
							const abstractifiedStatements: IntermediateStatementsAbstractSyntaxTreeNode =
								new IntermediateStatementsAbstractSyntaxTreeNode(
									{
										operatedStatement:
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
										rest: abstractifiedOptionalSeparatedStatements.statements,
									},
									new SpanIndexes(
										abstractifiedStatement.spanIndexes.from,
										abstractifiedOptionalSeparatedStatements.statements.spanIndexes.until,
									),
								);
							const statementsAbstractifyingResult: SuccessAbstractifyingResult<IntermediateStatementsAbstractSyntaxTreeNode> =
								new SuccessAbstractifyingResult<IntermediateStatementsAbstractSyntaxTreeNode>(
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
