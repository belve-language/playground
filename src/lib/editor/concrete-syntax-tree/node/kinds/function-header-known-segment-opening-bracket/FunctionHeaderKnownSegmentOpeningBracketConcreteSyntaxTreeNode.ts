import type {OpeningRoundBracketCharacter} from "../../../../characters/opening-round-bracket/OpeningRoundBracketCharacter.ts";
import type {LeafConcreteSyntaxTreeNode} from "../../leaf/LeafConcreteSyntaxTreeNode.ts";
import type {functionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNodeKindName} from "./kind-name/functionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNodeKindName.ts";
export type FunctionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNode =
	LeafConcreteSyntaxTreeNode<
		typeof functionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNodeKindName,
		OpeningRoundBracketCharacter
	>;
