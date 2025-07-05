import type {OpeningSquareBracketCharacter} from "../../../../characters/opening-square-bracket/OpeningSquareBracketCharacter.ts";
import type {LeafConcreteSyntaxTreeNode} from "../../leaf/LeafConcreteSyntaxTreeNode.ts";
import type {functionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNodeKindName} from "./kind-name/functionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNodeKindName.ts";
export type FunctionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNode =
	LeafConcreteSyntaxTreeNode<
		typeof functionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNodeKindName,
		OpeningSquareBracketCharacter
	>;
