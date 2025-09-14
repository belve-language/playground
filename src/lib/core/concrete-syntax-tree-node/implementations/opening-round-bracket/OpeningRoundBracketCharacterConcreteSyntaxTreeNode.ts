import type {OpeningRoundBracketCharacterConcreteSyntaxTreeNodeAtom} from "./atom/OpeningRoundBracketCharacterConcreteSyntaxTreeNodeAtom.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class OpeningRoundBracketCharacterConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<OpeningRoundBracketCharacterConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: OpeningRoundBracketCharacterConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
}
