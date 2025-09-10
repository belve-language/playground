import type {OptionalWhitespaceCharactersConcreteSyntaxTreeNodeAtom} from "./atom/OptionalWhitespaceCharactersConcreteSyntaxTreeNodeAtom.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class OptionalWhitespaceCharactersConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<OptionalWhitespaceCharactersConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: OptionalWhitespaceCharactersConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
}
