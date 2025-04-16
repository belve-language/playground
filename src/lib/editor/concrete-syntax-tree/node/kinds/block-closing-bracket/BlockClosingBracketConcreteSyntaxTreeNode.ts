import type {ClosingCurlyBracketCharacter} from "../../../../characters/closing-curly-bracket/ClosingCurlyBracketCharacter.ts";
import type {LeafConcreteSyntaxTreeNode} from "../../types/leaf/LeafConcreteSyntaxTreeNode.ts";
import type {blockClosingBracketConcreteSyntaxTreeNodeKindName} from "./blockClosingBracketConcreteSyntaxTreeNodeKindName.ts";
export type BlockClosingBracketConcreteSyntaxTreeNode =
	LeafConcreteSyntaxTreeNode<
		typeof blockClosingBracketConcreteSyntaxTreeNodeKindName,
		ClosingCurlyBracketCharacter
	>;
