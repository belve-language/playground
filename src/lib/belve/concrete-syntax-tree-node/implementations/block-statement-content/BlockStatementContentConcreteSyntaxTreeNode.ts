import type {BlockStatementContentConcreteSyntaxTreeNodeAtom} from "./atom/BlockStatementContentConcreteSyntaxTreeNodeAtom.ts";
import type {BlockStatementAbstractSyntaxTreeNodeChildren} from "../../../abstract-syntax-tree-node/implementations/statement/implementations/block/children/BlockStatementAbstractSyntaxTreeNodeChildren.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class BlockStatementContentConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<BlockStatementContentConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: BlockStatementContentConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<BlockStatementAbstractSyntaxTreeNodeChildren> {
		const statements = this.atom.node;
		const statementsAbstractifyingResult = statements.abstractify();
		switch (statementsAbstractifyingResult.typeName) {
			case successAbstractifyingResultTypeName: {
				const abstractifiedStatements = statementsAbstractifyingResult.data;
				const abstractifiedBlockStatementContent: BlockStatementAbstractSyntaxTreeNodeChildren =
					{statements: abstractifiedStatements};
				const blockStatementContentAbstractifyingResult: SuccessAbstractifyingResult<BlockStatementAbstractSyntaxTreeNodeChildren> =
					new SuccessAbstractifyingResult(abstractifiedBlockStatementContent);
				return blockStatementContentAbstractifyingResult;
			}
			case errorAbstractifyingResultTypeName: {
				const blockStatementContentAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(statementsAbstractifyingResult.message);
				return blockStatementContentAbstractifyingResult;
			}
		}
	}
}
