import type {BranchConcreteSyntaxTreeNode} from "../../../BranchConcreteSyntaxTreeNode.ts";
import type {BlockConcreteSyntaxTreeNodeChildren} from "./BlockConcreteSyntaxTreeNodeChildren.ts";
import type {blockConcreteSyntaxTreeNodeKindName} from "./blockConcreteSyntaxTreeNodeKindName.ts";
export type BlockConcreteSyntaxTreeNode = BranchConcreteSyntaxTreeNode<
	typeof blockConcreteSyntaxTreeNodeKindName,
	BlockConcreteSyntaxTreeNodeChildren
>;
