import type {WordCharactersBranchConcreteSyntaxTreeNodeChildren} from "./children/WordCharactersBranchConcreteSyntaxTreeNodeChildren.ts";
import {wordCharactersBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/wordCharactersBranchConcreteSyntaxTreeNodeTypeName.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class WordCharactersBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	WordCharactersBranchConcreteSyntaxTreeNodeChildren,
	typeof wordCharactersBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: WordCharactersBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children, wordCharactersBranchConcreteSyntaxTreeNodeTypeName);
	}
	public abstractify(): string {
		if (this.children[0] === null) {
			const wordCharacter = this.children[1].abstractify();
			return wordCharacter;
		} else {
			const restWordCharacters = this.children[0].abstractify();
			const wordCharacter = this.children[1].abstractify();
			return `${restWordCharacters}${wordCharacter}`;
		}
	}
}
