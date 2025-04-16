import type {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import type {StatementsConcreteSyntaxTreeNodeChildren} from "./StatementsConcreteSyntaxTreeNodeChildren.ts";
import type {statementsConcreteSyntaxTreeNodeKindName} from "./statementsConcreteSyntaxTreeNodeKindName.ts";
export type StatementsConcreteSyntaxTreeNode = BranchConcreteSyntaxTreeNode<
	typeof statementsConcreteSyntaxTreeNodeKindName,
	StatementsConcreteSyntaxTreeNodeChildren
>;
