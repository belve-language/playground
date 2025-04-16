import type {ClosingCurlyBracketCharacter} from "../../../characters/closing-curly-bracket/ClosingCurlyBracketCharacter.ts";
import type {Index} from "../../../index/Index.ts";
import {createLeafConcreteSyntaxTreeNode} from "../../createLeafConcreteSyntaxTreeNode.ts";
import type {BlockClosingBracketConcreteSyntaxTreeNode} from "./BlockClosingBracketConcreteSyntaxTreeNode.ts";
import {blockClosingBracketConcreteSyntaxTreeNodeKindName} from "./blockClosingBracketConcreteSyntaxTreeNodeKindName.ts";
export function createBlockClosingBracketConcreteSyntaxTreeNode(
	character: ClosingCurlyBracketCharacter,
	index: Index,
): BlockClosingBracketConcreteSyntaxTreeNode {
	return createLeafConcreteSyntaxTreeNode(
		blockClosingBracketConcreteSyntaxTreeNodeKindName,
		character,
		index,
	);
}
