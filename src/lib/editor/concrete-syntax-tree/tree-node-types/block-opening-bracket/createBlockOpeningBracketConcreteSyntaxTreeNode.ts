import type {OpeningCurlyBracketCharacter} from "../../../characters/opening-curly-bracket/OpeningCurlyBracketCharacter.ts";
import type {Index} from "../../../index/Index.ts";
import {createLeafConcreteSyntaxTreeNode} from "../../createLeafConcreteSyntaxTreeNode.ts";
import type {BlockOpeningBracketConcreteSyntaxTreeNode} from "./BlockOpeningBracketConcreteSyntaxTreeNode.ts";
import {blockOpeningBracketConcreteSyntaxTreeNodeTypeName} from "./blockOpeningBracketConcreteSyntaxTreeNodeTypeName.ts";
export function createBlockOpeningBracketConcreteSyntaxTreeNode(
	character: OpeningCurlyBracketCharacter,
	index: Index,
): BlockOpeningBracketConcreteSyntaxTreeNode {
	return createLeafConcreteSyntaxTreeNode(
		blockOpeningBracketConcreteSyntaxTreeNodeTypeName,
		character,
		index,
	);
}
