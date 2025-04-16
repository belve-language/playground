import type {ClosingRoundBracketCharacter} from "../../../characters/closing-round-bracket/ClosingRoundBracketCharacter.ts";
import type {Index} from "../../../index/Index.ts";
import {createLeafConcreteSyntaxTreeNode} from "../../createLeafConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode} from "./FunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import {functionCallKnownSegmentClosingBracketConcreteSyntaxTreeNodeKindName} from "./functionCallKnownSegmentClosingBracketConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode(
	character: ClosingRoundBracketCharacter,
	index: Index,
): FunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode {
	return createLeafConcreteSyntaxTreeNode(
		functionCallKnownSegmentClosingBracketConcreteSyntaxTreeNodeKindName,
		character,
		index,
	);
}
