import type {OpeningCurlyBracketCharacterConcreteSyntaxTreeNodeAtom} from "./atom/OpeningCurlyBracketCharacterConcreteSyntaxTreeNodeAtom.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class OpeningCurlyBracketCharacterConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<OpeningCurlyBracketCharacterConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: OpeningCurlyBracketCharacterConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
}
