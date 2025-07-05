import type {ClosingRoundBracketCharacter} from "../../../../../characters/closing-round-bracket/ClosingRoundBracketCharacter.ts";
import type {Index} from "../../../../../index/Index.ts";
import {createLeafConcreteSyntaxTreeNode} from "../../../leaf/creating/createLeafConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode} from "../FunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import {functionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNodeKindName} from "../kind-name/functionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode(
	character: ClosingRoundBracketCharacter,
	spanIndex: Index,
): FunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode {
	return createLeafConcreteSyntaxTreeNode(
		functionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNodeKindName,
		{character, index},
	);
}
