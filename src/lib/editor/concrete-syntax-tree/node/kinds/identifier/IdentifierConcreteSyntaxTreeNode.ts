import type {BranchConcreteSyntaxTreeNode} from "../../branch/BranchConcreteSyntaxTreeNode.ts";
import type {IdentifierConcreteSyntaxTreeNodeDataChildren} from "./data-children/IdentifierConcreteSyntaxTreeNodeDataChildren.ts";
import type {identifierConcreteSyntaxTreeNodeKindName} from "./kind-name/identifierConcreteSyntaxTreeNodeKindName.ts";
export type IdentifierConcreteSyntaxTreeNode = BranchConcreteSyntaxTreeNode<
	typeof identifierConcreteSyntaxTreeNodeKindName,
	IdentifierConcreteSyntaxTreeNodeDataChildren
>;
