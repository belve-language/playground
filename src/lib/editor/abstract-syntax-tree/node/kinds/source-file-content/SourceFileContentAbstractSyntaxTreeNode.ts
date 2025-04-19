import type {BranchAbstractSyntaxTreeNode} from "../../types/branch/BranchAbstractSyntaxTreeNode.ts";
import type {SourceFileContentAbstractSyntaxTreeNodeDataChildren} from "./data-children/SourceFileContentAbstractSyntaxTreeNodeDataChildren.ts";
export type SourceFileContentAbstractSyntaxTreeNode =
	BranchAbstractSyntaxTreeNode<
		typeof sourceFileContentAbstractSyntaxTreeNodeKindName,
		SourceFileContentAbstractSyntaxTreeNodeDataChildren
	>;
