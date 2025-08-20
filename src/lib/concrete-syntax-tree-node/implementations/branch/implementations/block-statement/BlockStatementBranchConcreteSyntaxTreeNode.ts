import type {BlockStatementBranchConcreteSyntaxTreeNodeChildren} from "./children/BlockStatementBranchConcreteSyntaxTreeNodeChildren.ts";
import {blockStatementBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/blockStatementBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class BlockStatementBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	BlockStatementBranchConcreteSyntaxTreeNodeChildren,
	typeof blockStatementBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: BlockStatementBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(
			children,
			spanIndexes,
			blockStatementBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
}
