import type {ClosingRoundBracketCharacterConcreteSyntaxTreeNodeAtom} from "./atom/ClosingRoundBracketCharacterConcreteSyntaxTreeNodeAtom.ts";
import type {Index} from "../../../index/Index.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class ClosingRoundBracketCharacterConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<ClosingRoundBracketCharacterConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: ClosingRoundBracketCharacterConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
}
