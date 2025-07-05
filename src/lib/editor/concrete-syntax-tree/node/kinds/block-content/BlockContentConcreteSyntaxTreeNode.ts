import type {BranchConcreteSyntaxTreeNode} from "../../branch/BranchConcreteSyntaxTreeNode.ts";
import type {BlockContentConcreteSyntaxTreeNodeDataChildren} from "./data-children/BlockContentConcreteSyntaxTreeNodeDataChildren.ts";
import type {blockContentConcreteSyntaxTreeNodeKindName} from "./kind-name/blockContentConcreteSyntaxTreeNodeKindName.ts";
export type BlockContentConcreteSyntaxTreeNode = BranchConcreteSyntaxTreeNode<
	typeof blockContentConcreteSyntaxTreeNodeKindName,
	BlockContentConcreteSyntaxTreeNodeDataChildren
>;
