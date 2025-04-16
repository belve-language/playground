import type {OpeningSquareBracketCharacter} from "../../../characters/opening-square-bracket/OpeningSquareBracketCharacter.ts";
import type {Index} from "../../../index/Index.ts";
import {createLeafConcreteSyntaxTreeNode} from "../../createLeafConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNode} from "./FunctionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNode.ts";
import {functionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNodeKindName} from "./functionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNode(
	character: OpeningSquareBracketCharacter,
	index: Index,
): FunctionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNode {
	return createLeafConcreteSyntaxTreeNode(
		functionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNodeKindName,
		character,
		index,
	);
}
