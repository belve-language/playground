import type {ClosingRoundBracketCharacter} from "../../../../characters/closing-round-bracket/ClosingRoundBracketCharacter.ts";
import type {LeafConcreteSyntaxTreeNode} from "../../types/leaf/LeafConcreteSyntaxTreeNode.ts";
import type {functionCallKnownSegmentClosingBracketConcreteSyntaxTreeNodeKindName} from "./functionCallKnownSegmentClosingBracketConcreteSyntaxTreeNodeKindName.ts";
export type FunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode =
	LeafConcreteSyntaxTreeNode<
		typeof functionCallKnownSegmentClosingBracketConcreteSyntaxTreeNodeKindName,
		ClosingRoundBracketCharacter
	>;
