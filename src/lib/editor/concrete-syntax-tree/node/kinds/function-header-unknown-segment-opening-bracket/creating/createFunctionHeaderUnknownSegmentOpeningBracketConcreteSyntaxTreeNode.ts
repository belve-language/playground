import type {OpeningSquareBracketCharacter} from "../../../../../characters/opening-square-bracket/OpeningSquareBracketCharacter.ts";
import type {Index} from "../../../../../index/Index.ts";
import {createLeafConcreteSyntaxTreeNode} from "../../../leaf/creating/createLeafConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNode} from "../FunctionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNode.ts";
import {functionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNodeKindName} from "../kind-name/functionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNode(
	character: OpeningSquareBracketCharacter,
	spanIndex: Index,
): FunctionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNode {
	return createLeafConcreteSyntaxTreeNode(
		functionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNodeKindName,
		{character, index},
	);
}
