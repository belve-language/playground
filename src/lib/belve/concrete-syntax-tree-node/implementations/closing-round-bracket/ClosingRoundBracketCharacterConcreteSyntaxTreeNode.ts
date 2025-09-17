import type {ClosingRoundBracketCharacterConcreteSyntaxTreeNodeAtom} from "./atom/ClosingRoundBracketCharacterConcreteSyntaxTreeNodeAtom.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class ClosingRoundBracketCharacterConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<ClosingRoundBracketCharacterConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: ClosingRoundBracketCharacterConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
}
