import type {SeparatedStatementsConcreteSyntaxTreeNodeAtom} from "./atom/SeparatedStatementsConcreteSyntaxTreeNodeAtom.ts";
import type {Statements} from "../../../../statements/Statements.ts";
import type {OperatorAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/operator/OperatorAbstractSyntaxTreeNode.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
export class SeparatedStatementsConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<SeparatedStatementsConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: SeparatedStatementsConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<{
				readonly operator: OperatorAbstractSyntaxTreeNode;
				readonly statements: Statements;
		  }> {
		const operator = this.atom.leftSubAtom.node;
		const optionalWhitespace = this.atom.rightSubAtom.leftSubAtom.node;
		const statements = this.atom.rightSubAtom.rightSubAtom.node;
		const operatorAbstractifyingResult = operator.abstractify();
		switch (operatorAbstractifyingResult.typeName) {
			case successAbstractifyingResultTypeName: {
				const abstractifiedOperator = operatorAbstractifyingResult.data;
				const statementsAbstractifyingResult = statements.abstractify();
				switch (statementsAbstractifyingResult.typeName) {
					case errorAbstractifyingResultTypeName: {
						const separatedStatementsAbstractifyingResult: ErrorAbstractifyingResult =
							new ErrorAbstractifyingResult(
								statementsAbstractifyingResult.message,
							);
						return separatedStatementsAbstractifyingResult;
					}
					case successAbstractifyingResultTypeName: {
						const abstractifiedStatements = statementsAbstractifyingResult.data;
						const abstractifiedSeparatedStatements: {
							readonly operator: OperatorAbstractSyntaxTreeNode;
							readonly statements: Statements;
						} = {
							operator: abstractifiedOperator,
							statements: abstractifiedStatements,
						};
						const separatedStatementsAbstractifyingResult: SuccessAbstractifyingResult<{
							readonly operator: OperatorAbstractSyntaxTreeNode;
							readonly statements: Statements;
						}> = new SuccessAbstractifyingResult(
							abstractifiedSeparatedStatements,
						);
						return separatedStatementsAbstractifyingResult;
					}
				}
			}
		}
	}
}
