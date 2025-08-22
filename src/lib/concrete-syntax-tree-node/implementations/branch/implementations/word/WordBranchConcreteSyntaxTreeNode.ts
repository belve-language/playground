import type {WordBranchConcreteSyntaxTreeNodeChildren} from "./children/WordBranchConcreteSyntaxTreeNodeChildren.ts";
import {wordBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/wordBranchConcreteSyntaxTreeNodeTypeName.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class WordBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	WordBranchConcreteSyntaxTreeNodeChildren,
	typeof wordBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(children: WordBranchConcreteSyntaxTreeNodeChildren) {
		super(children, wordBranchConcreteSyntaxTreeNodeTypeName);
	}
	public abstractify(): string {
		const word = this.children[0].abstractify();
		return word;
	}
}
