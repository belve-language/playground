import type {IdentifierCharacter} from "../../../../characters/identifier/IdentifierCharacter.ts";
import type {LeafConcreteSyntaxTreeNode} from "../../types/leaf/LeafConcreteSyntaxTreeNode.ts";
import type {identifierSegmentConcreteSyntaxTreeNodeKindName} from "./kind-name/identifierSegmentConcreteSyntaxTreeNodeKindName.ts";
export type IdentifierSegmentConcreteSyntaxTreeNode =
	LeafConcreteSyntaxTreeNode<
		typeof identifierSegmentConcreteSyntaxTreeNodeKindName,
		IdentifierCharacter
	>;
