import type {PaddedOptionalStatementsConcreteSyntaxTreeNodeAtom} from "./atom/PaddedOptionalStatementsConcreteSyntaxTreeNodeAtom.ts";
import type {SupportedStatementsAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/statements/supported/SupportedStatementsAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class PaddedOptionalStatementsConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<PaddedOptionalStatementsConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: PaddedOptionalStatementsConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<SupportedStatementsAbstractSyntaxTreeNode> {
		const whitespace = this.atom.leftSubAtom.node;
		const optionalStatements = this.atom.rightSubAtom.node;
		const optionalStatementsAbstractifyingResult =
			optionalStatements.abstractify();
		switch (optionalStatementsAbstractifyingResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const paddedOptionalStatementsAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						optionalStatementsAbstractifyingResult.message,
					);
				return paddedOptionalStatementsAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedOptionalStatements =
					optionalStatementsAbstractifyingResult.data;
				const abstractifiedPaddedOptionalStatements: SupportedStatementsAbstractSyntaxTreeNode =
					abstractifiedOptionalStatements;
				const paddedOptionalStatementsAbstractifyingResult: SuccessAbstractifyingResult<SupportedStatementsAbstractSyntaxTreeNode> =
					new SuccessAbstractifyingResult<SupportedStatementsAbstractSyntaxTreeNode>(
						abstractifiedPaddedOptionalStatements,
					);
				return paddedOptionalStatementsAbstractifyingResult;
			}
		}
	}
}
