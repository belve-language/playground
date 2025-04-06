import type {BranchAbstractSyntaxTreeNode} from "../../types/branch/BranchAbstractSyntaxTreeNode.ts";
import type {OperatedStatementAbstractSyntaxTreeNodeChildren} from "./children/OperatedStatementAbstractSyntaxTreeNodeChildren.ts";
export type OperatedStatementAbstractSyntaxTreeNode =
	BranchAbstractSyntaxTreeNode<
		typeof operatedStatementAbstractSyntaxTreeNodeTypeName,
		OperatedStatementAbstractSyntaxTreeNodeChildren
	>;
