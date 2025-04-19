import type {BranchConcreteSyntaxTreeNode} from "../../../BranchConcreteSyntaxTreeNode.ts";
import type {BlockContentConcreteSyntaxTreeNodeDataChildren} from "./BlockContentConcreteSyntaxTreeNodeDataChildren.ts";
import type {blockContentConcreteSyntaxTreeNodeKindName} from "./blockContentConcreteSyntaxTreeNodeKindName.ts";
export type BlockContentConcreteSyntaxTreeNode = BranchConcreteSyntaxTreeNode<
	typeof blockContentConcreteSyntaxTreeNodeKindName,
	BlockContentConcreteSyntaxTreeNodeDataChildren
>;
