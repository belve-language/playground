import type {ClosingCurlyBracketCharacter} from "../../../characters/closing-curly-bracket/ClosingCurlyBracketCharacter.ts";
import {createLeafConcreteSyntaxTreeNode} from "../../createLeafConcreteSyntaxTreeNode.ts";
import type {Index} from "../../../index/Index.ts";
import type {BlockClosingBracketConcreteSyntaxTreeNode} from "./BlockClosingBracketConcreteSyntaxTreeNode.ts";
import {blockClosingBracketConcreteSyntaxTreeNodeTypeName} from "./blockClosingBracketConcreteSyntaxTreeNodeTypeName.ts";
export function createBlockClosingBracketConcreteSyntaxTreeNode(
	character: ClosingCurlyBracketCharacter,
	index: Index,
): BlockClosingBracketConcreteSyntaxTreeNode {
	return createLeafConcreteSyntaxTreeNode(
		blockClosingBracketConcreteSyntaxTreeNodeTypeName,
		character,
		index,
	);
}
