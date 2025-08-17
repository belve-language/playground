import type {WhitespaceBranchConcreteSyntaxTreeNodeChildren} from "./children/WhitespaceBranchConcreteSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class WhitespaceBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<WhitespaceBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: WhitespaceBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
}
