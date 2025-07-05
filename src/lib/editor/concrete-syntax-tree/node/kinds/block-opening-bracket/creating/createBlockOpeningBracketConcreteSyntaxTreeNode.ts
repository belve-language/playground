import type {OpeningCurlyBracketCharacter} from "../../../../../characters/opening-curly-bracket/OpeningCurlyBracketCharacter.ts";
import type {Index} from "../../../../../index/Index.ts";
import {createLeafConcreteSyntaxTreeNode} from "../../../leaf/creating/createLeafConcreteSyntaxTreeNode.ts";
import type {BlockOpeningBracketConcreteSyntaxTreeNode} from "../BlockOpeningBracketConcreteSyntaxTreeNode.ts";
import {blockOpeningBracketConcreteSyntaxTreeNodeKindName} from "../kind-name/blockOpeningBracketConcreteSyntaxTreeNodeKindName.ts";
export function createBlockOpeningBracketConcreteSyntaxTreeNode(
	character: OpeningCurlyBracketCharacter,
	spanIndex: Index,
): BlockOpeningBracketConcreteSyntaxTreeNode {
	return createLeafConcreteSyntaxTreeNode(
		blockOpeningBracketConcreteSyntaxTreeNodeKindName,
		{character, index},
	);
}
