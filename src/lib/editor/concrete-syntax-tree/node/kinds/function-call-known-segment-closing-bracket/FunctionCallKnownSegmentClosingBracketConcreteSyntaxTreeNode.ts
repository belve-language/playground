import type {ClosingRoundBracketCharacter} from "../../../../characters/closing-round-bracket/ClosingRoundBracketCharacter.ts";
import type {LeafConcreteSyntaxTreeNode} from "../../leaf/LeafConcreteSyntaxTreeNode.ts";
import type {functionCallKnownSegmentClosingBracketConcreteSyntaxTreeNodeKindName} from "./kind-name/functionCallKnownSegmentClosingBracketConcreteSyntaxTreeNodeKindName.ts";
export type FunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode =
	LeafConcreteSyntaxTreeNode<
		typeof functionCallKnownSegmentClosingBracketConcreteSyntaxTreeNodeKindName,
		ClosingRoundBracketCharacter
	>;
