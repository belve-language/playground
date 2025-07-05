import type {ClosingCurlyBracketCharacter} from "../../../../../characters/closing-curly-bracket/ClosingCurlyBracketCharacter.ts";
import type {Index} from "../../../../../index/Index.ts";
import {createLeafConcreteSyntaxTreeNode} from "../../../leaf/creating/createLeafConcreteSyntaxTreeNode.ts";
import type {BlockClosingBracketConcreteSyntaxTreeNode} from "../BlockClosingBracketConcreteSyntaxTreeNode.ts";
import {blockClosingBracketConcreteSyntaxTreeNodeKindName} from "../kind-name/blockClosingBracketConcreteSyntaxTreeNodeKindName.ts";
export function createBlockClosingBracketConcreteSyntaxTreeNode(
	character: ClosingCurlyBracketCharacter,
	spanIndex: Index,
): BlockClosingBracketConcreteSyntaxTreeNode {
	return createLeafConcreteSyntaxTreeNode(
		blockClosingBracketConcreteSyntaxTreeNodeKindName,
		{character, index},
	);
}
