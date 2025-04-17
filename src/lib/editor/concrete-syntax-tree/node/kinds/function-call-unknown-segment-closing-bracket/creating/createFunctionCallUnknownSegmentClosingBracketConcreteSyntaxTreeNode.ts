import type {ClosingSquareBracketCharacter} from "../../../../../characters/closing-square-bracket/ClosingSquareBracketCharacter.ts";
import type {Index} from "../../../../../index/Index.ts";
import {createLeafConcreteSyntaxTreeNode} from "../../../types/leaf/creating/createLeafConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode} from "../FunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import {functionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNodeKindName} from "../kind-name/functionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode(
	character: ClosingSquareBracketCharacter,
	index: Index,
): FunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode {
	return createLeafConcreteSyntaxTreeNode(
		functionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNodeKindName,
		{character, index},
	);
}
