import type {BlockBranchConcreteSyntaxTreeNodeChildren} from "./children/BlockBranchConcreteSyntaxTreeNodeChildren.ts";
import {blockBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/blockBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class BlockBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	BlockBranchConcreteSyntaxTreeNodeChildren,
	typeof blockBranchConcreteSyntaxTreeNodeTypeName
> {
	constructor(
		children: BlockBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes, blockBranchConcreteSyntaxTreeNodeTypeName);
	}
}
