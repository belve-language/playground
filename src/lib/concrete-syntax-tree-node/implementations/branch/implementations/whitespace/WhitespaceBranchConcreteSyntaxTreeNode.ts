import type {WhitespaceBranchConcreteSyntaxTreeNodeChildren} from "./children/WhitespaceBranchConcreteSyntaxTreeNodeChildren.ts";
import {whitespaceBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/whitespaceBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class WhitespaceBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	WhitespaceBranchConcreteSyntaxTreeNodeChildren,
	typeof whitespaceBranchConcreteSyntaxTreeNodeTypeName
> {
	private constructor(
		children: WhitespaceBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children, whitespaceBranchConcreteSyntaxTreeNodeTypeName);
	}
}
