import type {ClosingSquareBracketCharacter} from "../../../../characters/closing-square-bracket/ClosingSquareBracketCharacter.ts";
import type {LeafConcreteSyntaxTreeNode} from "../../types/leaf/LeafConcreteSyntaxTreeNode.ts";
import type {functionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNodeKindName} from "./functionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNodeKindName.ts";
export type FunctionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNode =
	LeafConcreteSyntaxTreeNode<
		typeof functionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNodeKindName,
		ClosingSquareBracketCharacter
	>;
