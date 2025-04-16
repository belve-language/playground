import type {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNodeChildren} from "./WhitespaceConcreteSyntaxTreeNodeChildren.ts";
import type {whitespaceConcreteSyntaxTreeNodeKindName} from "./whitespaceConcreteSyntaxTreeNodeKindName.ts";
export type WhitespaceConcreteSyntaxTreeNode = BranchConcreteSyntaxTreeNode<
	typeof whitespaceConcreteSyntaxTreeNodeKindName,
	WhitespaceConcreteSyntaxTreeNodeChildren
>;
