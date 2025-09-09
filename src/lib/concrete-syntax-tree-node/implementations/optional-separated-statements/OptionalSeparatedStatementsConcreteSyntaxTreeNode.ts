import type {OptionalSeparatedStatementsConcreteSyntaxTreeNodeAtom} from "./atom/OptionalSeparatedStatementsConcreteSyntaxTreeNodeAtom.ts";
import type {Statements} from "../../../../statements/Statements.ts";
import type {OperatorAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/operator/OperatorAbstractSyntaxTreeNode.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
export class OptionalSeparatedStatementsConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<OptionalSeparatedStatementsConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: OptionalSeparatedStatementsConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<null>
		| SuccessAbstractifyingResult<{
				readonly operator: OperatorAbstractSyntaxTreeNode;
				readonly statements: Statements;
		  }> {
		const separatedStatements = this.atom.node;
		const separatedStatementsAbstractifyingResult =
			separatedStatements.abstractify();
		switch (separatedStatementsAbstractifyingResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const optionalSeparatedStatementsAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						separatedStatementsAbstractifyingResult.message,
					);
				return optionalSeparatedStatementsAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedSeparatedStatements =
					separatedStatementsAbstractifyingResult.data;
				if (abstractifiedSeparatedStatements === null) {
					const abstractifiedOptionalSeparatedStatements: null = null;
					const optionalSeparatedStatementsAbstractifyingResult: SuccessAbstractifyingResult<null> =
						new SuccessAbstractifyingResult(
							abstractifiedOptionalSeparatedStatements,
						);
					return optionalSeparatedStatementsAbstractifyingResult;
				} else {
					const abstractifiedOptionalSeparatedStatements: {
						readonly operator: OperatorAbstractSyntaxTreeNode;
						readonly statements: Statements;
					} = abstractifiedSeparatedStatements;
					const optionalSeparatedStatementsAbstractifyingResult: SuccessAbstractifyingResult<{
						readonly operator: OperatorAbstractSyntaxTreeNode;
						readonly statements: Statements;
					}> = new SuccessAbstractifyingResult(
						abstractifiedOptionalSeparatedStatements,
					);
					return optionalSeparatedStatementsAbstractifyingResult;
				}
			}
		}
	}
}
