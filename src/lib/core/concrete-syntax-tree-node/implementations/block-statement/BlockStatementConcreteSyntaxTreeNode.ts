import type {BlockStatementConcreteSyntaxTreeNodeAtom} from "./atom/BlockStatementConcreteSyntaxTreeNodeAtom.ts";
import type {BlockStatementAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/statement/implementations/block/BlockStatementAbstractSyntaxTreeNode.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
export class BlockStatementConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<BlockStatementConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: BlockStatementConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<BlockStatementAbstractSyntaxTreeNode> {
		const block = this.atom.node;
		const blockAbstractifyingResult = block.abstractify();
		switch (blockAbstractifyingResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const blockStatementAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(blockAbstractifyingResult.message);
				return blockStatementAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedBlock = blockAbstractifyingResult.data;
				const blockStatementAbstractifyingResult: SuccessAbstractifyingResult<BlockStatementAbstractSyntaxTreeNode> =
					new SuccessAbstractifyingResult<BlockStatementAbstractSyntaxTreeNode>(
						abstractifiedBlock,
					);
				return blockStatementAbstractifyingResult;
			}
		}
	}
}
