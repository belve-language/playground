import type {ClosingCurlyBracketCharacterConcreteSyntaxTreeNodeAtom} from "./atom/ClosingCurlyBracketCharacterConcreteSyntaxTreeNodeAtom.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class ClosingCurlyBracketCharacterConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<ClosingCurlyBracketCharacterConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: ClosingCurlyBracketCharacterConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
}
