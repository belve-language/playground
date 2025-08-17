import type {WordCharactersBranchConcreteSyntaxTreeNodeChildren} from "./children/WordCharactersBranchConcreteSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class WordCharactersBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<WordCharactersBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: WordCharactersBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
}
