import type {OpeningCurlyBracketCharacter} from "../../../../characters/opening-curly-bracket/OpeningCurlyBracketCharacter.ts";
import type {LeafConcreteSyntaxTreeNode} from "../../leaf/LeafConcreteSyntaxTreeNode.ts";
import type {blockOpeningBracketConcreteSyntaxTreeNodeKindName} from "./kind-name/blockOpeningBracketConcreteSyntaxTreeNodeKindName.ts";
export type BlockOpeningBracketConcreteSyntaxTreeNode =
	LeafConcreteSyntaxTreeNode<
		typeof blockOpeningBracketConcreteSyntaxTreeNodeKindName,
		OpeningCurlyBracketCharacter
	>;
