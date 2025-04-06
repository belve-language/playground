import type {OpeningRoundBracketCharacter} from "../../../characters/opening-round-bracket/OpeningRoundBracketCharacter.ts";
import type {Index} from "../../../index/Index.ts";
import {createLeafConcreteSyntaxTreeNode} from "../../createLeafConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNode} from "./FunctionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNode.ts";
import {functionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNodeTypeName} from "./functionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNodeTypeName.ts";
export function createFunctionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNode(
	character: OpeningRoundBracketCharacter,
	index: Index,
): FunctionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNode {
	return createLeafConcreteSyntaxTreeNode(
		functionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNodeTypeName,
		character,
		index,
	);
}
