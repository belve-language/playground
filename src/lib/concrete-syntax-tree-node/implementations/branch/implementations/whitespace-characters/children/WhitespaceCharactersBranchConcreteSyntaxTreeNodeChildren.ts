import type {WhitespaceCharacterLeafConcreteSyntaxTreeNode} from "../../../../leaf/implementations/whitespace-character/WhitespaceCharacterLeafConcreteSyntaxTreeNode.ts";
import type {WhitespaceCharactersBranchConcreteSyntaxTreeNode} from "../WhitespaceCharactersBranchConcreteSyntaxTreeNode.ts";
export type WhitespaceCharactersBranchConcreteSyntaxTreeNodeChildren =
	readonly [
		null | WhitespaceCharactersBranchConcreteSyntaxTreeNode,
		WhitespaceCharacterLeafConcreteSyntaxTreeNode,
	];
