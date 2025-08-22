import type {BlockBranchConcreteSyntaxTreeNodeChildren} from "./children/BlockBranchConcreteSyntaxTreeNodeChildren.ts";
import {blockBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/blockBranchConcreteSyntaxTreeNodeTypeName.ts";
import {BlockAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/block/BlockAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class BlockBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	BlockBranchConcreteSyntaxTreeNodeChildren,
	typeof blockBranchConcreteSyntaxTreeNodeTypeName
> {
	constructor(children: BlockBranchConcreteSyntaxTreeNodeChildren) {
		super(children, blockBranchConcreteSyntaxTreeNodeTypeName);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<BlockAbstractSyntaxTreeNode> {
		if (this.children[1] === null) {
			const result = new ErrorAbstractifyingResult("Empty block.");
			return result;
		} else {
			const blockContentResult = this.children[1].abstractify();
			switch (blockContentResult.typeName) {
				case errorAbstractifyingResultTypeName: {
					return blockContentResult;
				}
				case successAbstractifyingResultTypeName: {
					const node = new BlockAbstractSyntaxTreeNode(
						{statements: blockContentResult.data},
						this.computeSpanIndexes(),
					);
					const result = new SuccessAbstractifyingResult(node);
					return result;
				}
			}
		}
	}
}
