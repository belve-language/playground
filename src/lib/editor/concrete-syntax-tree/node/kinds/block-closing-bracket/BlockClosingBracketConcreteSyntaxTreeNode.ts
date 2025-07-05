import type {ClosingCurlyBracketCharacter} from "../../../../characters/closing-curly-bracket/ClosingCurlyBracketCharacter.ts";
import type {LeafConcreteSyntaxTreeNode} from "../../leaf/LeafConcreteSyntaxTreeNode.ts";
import type {blockClosingBracketConcreteSyntaxTreeNodeKindName} from "./kind-name/blockClosingBracketConcreteSyntaxTreeNodeKindName.ts";
export type BlockClosingBracketConcreteSyntaxTreeNode =
	LeafConcreteSyntaxTreeNode<
		typeof blockClosingBracketConcreteSyntaxTreeNodeKindName,
		ClosingCurlyBracketCharacter
	>;
