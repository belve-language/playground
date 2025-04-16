import type {OpeningRoundBracketCharacter} from "../../../../characters/opening-round-bracket/OpeningRoundBracketCharacter.ts";
import type {LeafConcreteSyntaxTreeNode} from "../../types/leaf/LeafConcreteSyntaxTreeNode.ts";
import type {functionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNodeKindName} from "./functionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNodeKindName.ts";
export type FunctionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNode =
	LeafConcreteSyntaxTreeNode<
		typeof functionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNodeKindName,
		OpeningRoundBracketCharacter
	>;
