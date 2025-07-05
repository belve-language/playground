import type {ClosingRoundBracketCharacter} from "../../../../../characters/closing-round-bracket/ClosingRoundBracketCharacter.ts";
import type {Index} from "../../../../../index/Index.ts";
import {createLeafConcreteSyntaxTreeNode} from "../../../leaf/creating/createLeafConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode} from "../FunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import {functionCallKnownSegmentClosingBracketConcreteSyntaxTreeNodeKindName} from "../kind-name/functionCallKnownSegmentClosingBracketConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode(
	character: ClosingRoundBracketCharacter,
	spanIndex: Index,
): FunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode {
	return createLeafConcreteSyntaxTreeNode(
		functionCallKnownSegmentClosingBracketConcreteSyntaxTreeNodeKindName,
		{character, index},
	);
}
