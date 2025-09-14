import type {ClosingSquareBracketCharacterConcreteSyntaxTreeNodeAtom} from "./atom/ClosingSquareBracketCharacterConcreteSyntaxTreeNodeAtom.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class ClosingSquareBracketCharacterConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<ClosingSquareBracketCharacterConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: ClosingSquareBracketCharacterConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
}
