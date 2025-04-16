import type {OpeningCurlyBracketCharacter} from "../../../../characters/opening-curly-bracket/OpeningCurlyBracketCharacter.ts";
import type {LeafConcreteSyntaxTreeNode} from "../../types/leaf/LeafConcreteSyntaxTreeNode.ts";
import type {blockOpeningBracketConcreteSyntaxTreeNodeKindName} from "./blockOpeningBracketConcreteSyntaxTreeNodeKindName.ts";
export type BlockOpeningBracketConcreteSyntaxTreeNode =
	LeafConcreteSyntaxTreeNode<
		typeof blockOpeningBracketConcreteSyntaxTreeNodeKindName,
		OpeningCurlyBracketCharacter
	>;
