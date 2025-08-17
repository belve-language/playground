import type {BlockStatementBranchConcreteSyntaxTreeNodeChildren} from "./children/BlockStatementBranchConcreteSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class BlockStatementBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<BlockStatementBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: BlockStatementBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
}
