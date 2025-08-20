import type {WhitespaceCharactersBranchConcreteSyntaxTreeNodeChildren} from "./children/WhitespaceCharactersBranchConcreteSyntaxTreeNodeChildren.ts";
import {whitespaceCharactersBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/whitespaceCharactersBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {WhitespaceCharacterLeafConcreteSyntaxTreeNode} from "../../../leaf/implementations/whitespace-character/WhitespaceCharacterLeafConcreteSyntaxTreeNode.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class WhitespaceCharactersBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	WhitespaceCharactersBranchConcreteSyntaxTreeNodeChildren,
	typeof whitespaceCharactersBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: WhitespaceCharactersBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children, whitespaceCharactersBranchConcreteSyntaxTreeNodeTypeName);
	}
	public static create(
		whitespaceCharacters: null | WhitespaceCharactersBranchConcreteSyntaxTreeNode,
		whitespaceCharacter: WhitespaceCharacterLeafConcreteSyntaxTreeNode,
	): WhitespaceCharactersBranchConcreteSyntaxTreeNode {
		const node = new WhitespaceCharactersBranchConcreteSyntaxTreeNode([
			whitespaceCharacters,
			whitespaceCharacter,
		]);
		return node;
	}
}
