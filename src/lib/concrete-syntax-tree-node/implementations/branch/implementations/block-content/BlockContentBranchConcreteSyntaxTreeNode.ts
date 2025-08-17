import type {BlockContentBranchConcreteSyntaxTreeNodeChildren} from "./children/BlockContentBranchConcreteSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class BlockContentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<BlockContentBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: BlockContentBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
}
