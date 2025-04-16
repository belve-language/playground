import type {ClosingSquareBracketCharacter} from "../../../characters/closing-square-bracket/ClosingSquareBracketCharacter.ts";
import type {Index} from "../../../index/Index.ts";
import {createLeafConcreteSyntaxTreeNode} from "../../createLeafConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode} from "./FunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import {functionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNodeKindName} from "./functionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode(
	character: ClosingSquareBracketCharacter,
	index: Index,
): FunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode {
	return createLeafConcreteSyntaxTreeNode(
		functionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNodeKindName,
		character,
		index,
	);
}
