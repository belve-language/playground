import type {OpeningRoundBracketCharacter} from "../../../../../characters/opening-round-bracket/OpeningRoundBracketCharacter.ts";
import type {Index} from "../../../../../index/Index.ts";
import {createLeafConcreteSyntaxTreeNode} from "../../../types/leaf/creating/createLeafConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNode} from "../FunctionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNode.ts";
import {functionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNodeKindName} from "../kind-name/functionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNode(
	character: OpeningRoundBracketCharacter,
	index: Index,
): FunctionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNode {
	return createLeafConcreteSyntaxTreeNode(
		functionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNodeKindName,
		{character, index},
	);
}
