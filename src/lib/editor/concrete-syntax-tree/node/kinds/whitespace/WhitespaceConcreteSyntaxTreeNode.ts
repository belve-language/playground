import type {BranchConcreteSyntaxTreeNode} from "../../types/branch/BranchConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNodeDataChildren} from "./data-children/WhitespaceConcreteSyntaxTreeNodeDataChildren.ts";
import type {whitespaceConcreteSyntaxTreeNodeKindName} from "./kind-name/whitespaceConcreteSyntaxTreeNodeKindName.ts";
export type WhitespaceConcreteSyntaxTreeNode = BranchConcreteSyntaxTreeNode<
	typeof whitespaceConcreteSyntaxTreeNodeKindName,
	WhitespaceConcreteSyntaxTreeNodeDataChildren
>;
