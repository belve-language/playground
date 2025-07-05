import type {WhitespaceCharacter} from "../../../../characters/whitespace/WhitespaceCharacter.ts";
import type {LeafConcreteSyntaxTreeNode} from "../../leaf/LeafConcreteSyntaxTreeNode.ts";
import type {whitespaceSegmentConcreteSyntaxTreeNodeKindName} from "./kind-name/whitespaceSegmentConcreteSyntaxTreeNodeKindName.ts";
export type WhitespaceSegmentConcreteSyntaxTreeNode =
	LeafConcreteSyntaxTreeNode<
		typeof whitespaceSegmentConcreteSyntaxTreeNodeKindName,
		WhitespaceCharacter
	>;
