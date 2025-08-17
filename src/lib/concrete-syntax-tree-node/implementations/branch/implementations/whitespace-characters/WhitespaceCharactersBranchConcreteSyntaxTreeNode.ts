import type {WhitespaceCharactersBranchConcreteSyntaxTreeNodeChildren} from "./children/WhitespaceCharactersBranchConcreteSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class WhitespaceCharactersBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<WhitespaceCharactersBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: WhitespaceCharactersBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
}
