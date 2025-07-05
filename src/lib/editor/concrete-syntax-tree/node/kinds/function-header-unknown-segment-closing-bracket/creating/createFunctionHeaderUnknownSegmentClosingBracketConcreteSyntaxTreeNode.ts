import type {ClosingSquareBracketCharacter} from "../../../../../characters/closing-square-bracket/ClosingSquareBracketCharacter.ts";
import type {Index} from "../../../../../index/Index.ts";
import {createLeafConcreteSyntaxTreeNode} from "../../../leaf/creating/createLeafConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNode} from "../FunctionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import {functionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNodeKindName} from "../kind-name/functionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNode(
	character: ClosingSquareBracketCharacter,
	spanIndex: Index,
): FunctionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNode {
	return createLeafConcreteSyntaxTreeNode(
		functionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNodeKindName,
		{character, index},
	);
}
