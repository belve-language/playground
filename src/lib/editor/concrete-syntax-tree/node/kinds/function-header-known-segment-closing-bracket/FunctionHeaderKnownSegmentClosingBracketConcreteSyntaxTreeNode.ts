import type {ClosingRoundBracketCharacter} from "../../../../characters/closing-round-bracket/ClosingRoundBracketCharacter.ts";
import type {LeafConcreteSyntaxTreeNode} from "../../types/leaf/LeafConcreteSyntaxTreeNode.ts";
import type {functionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNodeKindName} from "./kind-name/functionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNodeKindName.ts";
export type FunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode =
	LeafConcreteSyntaxTreeNode<
		typeof functionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNodeKindName,
		ClosingRoundBracketCharacter
	>;
