import type {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import type {IdentifierConcreteSyntaxTreeNodeChildren} from "./IdentifierConcreteSyntaxTreeNodeChildren.ts";
import type {identifierConcreteSyntaxTreeNodeKindName} from "./identifierConcreteSyntaxTreeNodeKindName.ts";
export type IdentifierConcreteSyntaxTreeNode = BranchConcreteSyntaxTreeNode<
	typeof identifierConcreteSyntaxTreeNodeKindName,
	IdentifierConcreteSyntaxTreeNodeChildren
>;
