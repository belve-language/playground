import type {OpeningSquareBracketCharacter} from "../../../../characters/opening-square-bracket/OpeningSquareBracketCharacter.ts";
import type {LeafConcreteSyntaxTreeNode} from "../../types/leaf/LeafConcreteSyntaxTreeNode.ts";
import type {functionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNodeKindName} from "./functionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNodeKindName.ts";
export type FunctionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNode =
	LeafConcreteSyntaxTreeNode<
		typeof functionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNodeKindName,
		OpeningSquareBracketCharacter
	>;
