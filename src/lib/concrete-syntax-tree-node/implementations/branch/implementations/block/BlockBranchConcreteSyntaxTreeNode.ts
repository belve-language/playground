import type {BlockBranchConcreteSyntaxTreeNodeChildren} from "./children/BlockBranchConcreteSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class BlockBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<BlockBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: BlockBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
}
