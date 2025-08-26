import type {WordCharacterLeafConcreteSyntaxTreeNode} from "../../../../leaf/implementations/word-character/WordCharacterLeafConcreteSyntaxTreeNode.ts";
import type {WordCharactersBranchConcreteSyntaxTreeNode} from "../WordCharactersBranchConcreteSyntaxTreeNode.ts";
export type WordCharactersBranchConcreteSyntaxTreeNodeChildren = readonly [
	wordCharacters: null | WordCharactersBranchConcreteSyntaxTreeNode,
	wordCharacter: WordCharacterLeafConcreteSyntaxTreeNode,
];
