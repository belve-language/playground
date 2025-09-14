import type {StatementConcreteSyntaxTreeNodeAtom} from "./atom/StatementConcreteSyntaxTreeNodeAtom.ts";
import type {SupportedStatementAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/statement/supported/SupportedStatementAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class StatementConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<StatementConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: StatementConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<SupportedStatementAbstractSyntaxTreeNode> {
		const implementationStatement = this.atom.node;
		const implementationStatementAbstractifyingResult =
			implementationStatement.abstractify();
		switch (implementationStatementAbstractifyingResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const statementAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						implementationStatementAbstractifyingResult.message,
					);
				return statementAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedImplementationStatement =
					implementationStatementAbstractifyingResult.data;
				const abstractifiedStatement: SupportedStatementAbstractSyntaxTreeNode =
					abstractifiedImplementationStatement;
				const statementAbstractifyingResult: SuccessAbstractifyingResult<SupportedStatementAbstractSyntaxTreeNode> =
					new SuccessAbstractifyingResult<SupportedStatementAbstractSyntaxTreeNode>(
						abstractifiedStatement,
					);
				return statementAbstractifyingResult;
			}
		}
	}
}
