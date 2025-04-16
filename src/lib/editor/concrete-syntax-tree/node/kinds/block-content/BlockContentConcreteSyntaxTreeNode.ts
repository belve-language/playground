import type {BranchConcreteSyntaxTreeNode} from "../../../BranchConcreteSyntaxTreeNode.ts";
import type {BlockContentConcreteSyntaxTreeNodeChildren} from "./BlockContentConcreteSyntaxTreeNodeChildren.ts";
import type {blockContentConcreteSyntaxTreeNodeKindName} from "./blockContentConcreteSyntaxTreeNodeKindName.ts";
export type BlockContentConcreteSyntaxTreeNode = BranchConcreteSyntaxTreeNode<
	typeof blockContentConcreteSyntaxTreeNodeKindName,
	BlockContentConcreteSyntaxTreeNodeChildren
>;
