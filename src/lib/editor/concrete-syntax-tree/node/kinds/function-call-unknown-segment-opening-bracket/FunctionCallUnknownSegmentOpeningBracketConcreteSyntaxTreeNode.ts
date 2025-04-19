import type {OpeningSquareBracketCharacter} from "../../../../characters/opening-square-bracket/OpeningSquareBracketCharacter.ts";
import type {LeafConcreteSyntaxTreeNode} from "../../types/leaf/LeafConcreteSyntaxTreeNode.ts";
import type {functionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNodeKindName} from "./kind-name/functionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNodeKindName.ts";
export type FunctionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNode =
	LeafConcreteSyntaxTreeNode<
		typeof functionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNodeKindName,
		OpeningSquareBracketCharacter
	>;
