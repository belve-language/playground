import type {OpeningRoundBracketCharacter} from "../../../../characters/opening-round-bracket/OpeningRoundBracketCharacter.ts";
import type {LeafConcreteSyntaxTreeNode} from "../../types/leaf/LeafConcreteSyntaxTreeNode.ts";
import type {functionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNodeKindName} from "./kind-name/functionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNodeKindName.ts";
export type FunctionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNode =
	LeafConcreteSyntaxTreeNode<
		typeof functionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNodeKindName,
		OpeningRoundBracketCharacter
	>;
