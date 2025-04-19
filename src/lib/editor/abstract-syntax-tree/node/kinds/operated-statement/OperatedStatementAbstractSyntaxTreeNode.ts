import type {BranchAbstractSyntaxTreeNode} from "../../types/branch/BranchAbstractSyntaxTreeNode.ts";
import type {OperatedStatementAbstractSyntaxTreeNodeDataChildren} from "./data-children/OperatedStatementAbstractSyntaxTreeNodeDataChildren.ts";
export type OperatedStatementAbstractSyntaxTreeNode =
	BranchAbstractSyntaxTreeNode<
		typeof operatedStatementAbstractSyntaxTreeNodeKindName,
		OperatedStatementAbstractSyntaxTreeNodeDataChildren
	>;
