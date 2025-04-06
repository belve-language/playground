import type {ClosingSquareBracketCharacter} from "../../../characters/closing-square-bracket/ClosingSquareBracketCharacter.ts";
import type {Index} from "../../../index/Index.ts";
import {createLeafConcreteSyntaxTreeNode} from "../../createLeafConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNode} from "./FunctionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import {functionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNodeTypeName} from "./functionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNodeTypeName.ts";
export function createFunctionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNode(
	character: ClosingSquareBracketCharacter,
	index: Index,
): FunctionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNode {
	return createLeafConcreteSyntaxTreeNode(
		functionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNodeTypeName,
		character,
		index,
	);
}
