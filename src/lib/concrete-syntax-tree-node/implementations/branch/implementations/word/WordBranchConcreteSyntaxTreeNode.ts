import type {WordBranchConcreteSyntaxTreeNodeChildren} from "./children/WordBranchConcreteSyntaxTreeNodeChildren.ts";
import {wordBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/wordBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class WordBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	WordBranchConcreteSyntaxTreeNodeChildren,
	typeof wordBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: WordBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes, wordBranchConcreteSyntaxTreeNodeTypeName);
	}
}
