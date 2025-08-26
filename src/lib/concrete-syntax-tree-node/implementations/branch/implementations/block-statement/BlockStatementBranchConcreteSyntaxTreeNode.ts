import type {BlockStatementBranchConcreteSyntaxTreeNodeChildren} from "./children/BlockStatementBranchConcreteSyntaxTreeNodeChildren.ts";
import {blockStatementBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/blockStatementBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {BlockAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/block/BlockAbstractSyntaxTreeNode.ts";
import type {ErrorAbstractifyingResult} from "../../../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import type {SuccessAbstractifyingResult} from "../../../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class BlockStatementBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	BlockStatementBranchConcreteSyntaxTreeNodeChildren,
	typeof blockStatementBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: BlockStatementBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children, blockStatementBranchConcreteSyntaxTreeNodeTypeName);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<BlockAbstractSyntaxTreeNode> {
		const result = this.children[0].abstractify();
		return result;
	}
}
