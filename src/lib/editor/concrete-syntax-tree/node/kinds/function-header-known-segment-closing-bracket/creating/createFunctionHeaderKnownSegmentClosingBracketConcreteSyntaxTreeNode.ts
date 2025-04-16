import type {ClosingRoundBracketCharacter} from "../../../characters/closing-round-bracket/ClosingRoundBracketCharacter.ts";
import type {Index} from "../../../index/Index.ts";
import {createLeafConcreteSyntaxTreeNode} from "../../createLeafConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode} from "./FunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import {functionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNodeKindName} from "./functionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode(
	character: ClosingRoundBracketCharacter,
	index: Index,
): FunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode {
	return createLeafConcreteSyntaxTreeNode(
		functionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNodeKindName,
		character,
		index,
	);
}
