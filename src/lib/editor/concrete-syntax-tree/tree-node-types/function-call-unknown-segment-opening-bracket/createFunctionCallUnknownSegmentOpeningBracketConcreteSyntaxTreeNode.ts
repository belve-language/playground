import type {OpeningSquareBracketCharacter} from "../../../characters/opening-square-bracket/OpeningSquareBracketCharacter.ts";
import {createLeafConcreteSyntaxTreeNode} from "../../createLeafConcreteSyntaxTreeNode.ts";
import type {Index} from "../../../index/Index.ts";
import type {FunctionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNode} from "./FunctionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNode.ts";
import {functionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNodeTypeName} from "./functionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNodeTypeName.ts";
export function createFunctionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNode(
	character: OpeningSquareBracketCharacter,
	index: Index,
): FunctionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNode {
	return createLeafConcreteSyntaxTreeNode(
		functionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNodeTypeName,
		character,
		index,
	);
}
