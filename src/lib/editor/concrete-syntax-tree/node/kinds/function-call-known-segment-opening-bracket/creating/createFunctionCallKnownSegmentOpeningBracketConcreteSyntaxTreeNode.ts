import type {OpeningRoundBracketCharacter} from "../../../characters/opening-round-bracket/OpeningRoundBracketCharacter.ts";
import type {Index} from "../../../index/Index.ts";
import {createLeafConcreteSyntaxTreeNode} from "../../createLeafConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNode} from "./FunctionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNode.ts";
import {functionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNodeKindName} from "./functionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNode(
	character: OpeningRoundBracketCharacter,
	index: Index,
): FunctionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNode {
	return createLeafConcreteSyntaxTreeNode(
		functionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNodeKindName,
		character,
		index,
	);
}
