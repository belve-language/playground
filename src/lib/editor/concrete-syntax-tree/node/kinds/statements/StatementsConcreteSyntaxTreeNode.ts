import type {BranchConcreteSyntaxTreeNode} from "../../types/branch/BranchConcreteSyntaxTreeNode.ts";
import type {StatementsConcreteSyntaxTreeNodeDataChildren} from "./data-children/StatementsConcreteSyntaxTreeNodeDataChildren.ts";
import type {statementsConcreteSyntaxTreeNodeKindName} from "./kind-name/statementsConcreteSyntaxTreeNodeKindName.ts";
export type StatementsConcreteSyntaxTreeNode = BranchConcreteSyntaxTreeNode<
	typeof statementsConcreteSyntaxTreeNodeKindName,
	StatementsConcreteSyntaxTreeNodeDataChildren
>;
