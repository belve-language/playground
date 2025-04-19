import type {ClosingCurlyBracketCharacter} from "../../../../characters/closing-curly-bracket/ClosingCurlyBracketCharacter.ts";
import type {LeafConcreteSyntaxTreeNode} from "../../types/leaf/LeafConcreteSyntaxTreeNode.ts";
import type {blockClosingBracketConcreteSyntaxTreeNodeKindName} from "./kind-name/blockClosingBracketConcreteSyntaxTreeNodeKindName.ts";
export type BlockClosingBracketConcreteSyntaxTreeNode =
	LeafConcreteSyntaxTreeNode<
		typeof blockClosingBracketConcreteSyntaxTreeNodeKindName,
		ClosingCurlyBracketCharacter
	>;
