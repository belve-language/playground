import type {OpeningSquareBracketCharacter} from "../../../characters/opening-square-bracket/OpeningSquareBracketCharacter.ts";
import type {Index} from "../../../index/Index.ts";
import {createLeafConcreteSyntaxTreeNode} from "../../createLeafConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNode} from "./FunctionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNode.ts";
import {functionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNodeTypeName} from "./functionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNodeTypeName.ts";
export function createFunctionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNode(
	character: OpeningSquareBracketCharacter,
	index: Index,
): FunctionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNode {
	return createLeafConcreteSyntaxTreeNode(
		functionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNodeTypeName,
		character,
		index,
	);
}
