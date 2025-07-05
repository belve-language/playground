import type {BranchConcreteSyntaxTreeNode} from "../../branch/BranchConcreteSyntaxTreeNode.ts";
import type {BlockConcreteSyntaxTreeNodeDataChildren} from "./data-children/BlockConcreteSyntaxTreeNodeDataChildren.ts";
import type {blockConcreteSyntaxTreeNodeKindName} from "./kind-name/blockConcreteSyntaxTreeNodeKindName.ts";
export type BlockConcreteSyntaxTreeNode = BranchConcreteSyntaxTreeNode<
	typeof blockConcreteSyntaxTreeNodeKindName,
	BlockConcreteSyntaxTreeNodeDataChildren
>;
