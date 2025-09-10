import type {OpeningSquareBracketCharacterConcreteSyntaxTreeNodeAtom} from "./atom/OpeningSquareBracketCharacterConcreteSyntaxTreeNodeAtom.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class OpeningSquareBracketCharacterConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<OpeningSquareBracketCharacterConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: OpeningSquareBracketCharacterConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
}
