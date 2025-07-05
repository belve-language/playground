import type {OpeningRoundBracketCharacter} from "../../../../../characters/opening-round-bracket/OpeningRoundBracketCharacter.ts";
import type {Index} from "../../../../../index/Index.ts";
import {createLeafConcreteSyntaxTreeNode} from "../../../leaf/creating/createLeafConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNode} from "../FunctionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNode.ts";
import {functionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNodeKindName} from "../kind-name/functionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNode(
	character: OpeningRoundBracketCharacter,
	spanIndex: Index,
): FunctionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNode {
	return createLeafConcreteSyntaxTreeNode(
		functionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNodeKindName,
		{character, index},
	);
}
