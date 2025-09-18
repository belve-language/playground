import type {OptionalSeparatedStatementsConcreteSyntaxTreeNodeAtom} from "./atom/OptionalSeparatedStatementsConcreteSyntaxTreeNodeAtom.ts";
import type {SupportedOperatorAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/operator/supported/SupportedOperatorAbstractSyntaxTreeNode.ts";
import type {SupportedStatementsAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/statements/supported/SupportedStatementsAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
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
				readonly operator: SupportedOperatorAbstractSyntaxTreeNode;
				readonly statements: SupportedStatementsAbstractSyntaxTreeNode;
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
						new SuccessAbstractifyingResult<null>(
							abstractifiedOptionalSeparatedStatements,
						);
					return optionalSeparatedStatementsAbstractifyingResult;
				} else {
					const abstractifiedOptionalSeparatedStatements: {
						readonly operator: SupportedOperatorAbstractSyntaxTreeNode;
						readonly statements: SupportedStatementsAbstractSyntaxTreeNode;
					} = abstractifiedSeparatedStatements;
					const optionalSeparatedStatementsAbstractifyingResult: SuccessAbstractifyingResult<{
						readonly operator: SupportedOperatorAbstractSyntaxTreeNode;
						readonly statements: SupportedStatementsAbstractSyntaxTreeNode;
					}> = new SuccessAbstractifyingResult<{
						readonly operator: SupportedOperatorAbstractSyntaxTreeNode;
						readonly statements: SupportedStatementsAbstractSyntaxTreeNode;
					}>(abstractifiedOptionalSeparatedStatements);
					return optionalSeparatedStatementsAbstractifyingResult;
				}
			}
		}
	}
}
