import type {OpeningRoundBracketCharacter} from "../../../characters/opening-round-bracket/OpeningRoundBracketCharacter.ts";
import type {LeafConcreteSyntaxTreeNode} from "../../LeafConcreteSyntaxTreeNode.ts";
import type {functionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNodeKindName} from "./functionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNodeKindName.ts";
export type FunctionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNode =
	LeafConcreteSyntaxTreeNode<
		typeof functionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNodeKindName,
		OpeningRoundBracketCharacter
	>;
