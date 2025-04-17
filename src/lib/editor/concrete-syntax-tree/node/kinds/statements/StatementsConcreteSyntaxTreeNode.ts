import type {BranchConcreteSyntaxTreeNode} from "../../types/branch/BranchConcreteSyntaxTreeNode.ts";
import type {StatementsConcreteSyntaxTreeNodeChildren} from "./children/StatementsConcreteSyntaxTreeNodeChildren.ts";
import type {statementsConcreteSyntaxTreeNodeKindName} from "./kind-name/statementsConcreteSyntaxTreeNodeKindName.ts";
export type StatementsConcreteSyntaxTreeNode = BranchConcreteSyntaxTreeNode<
	typeof statementsConcreteSyntaxTreeNodeKindName,
	StatementsConcreteSyntaxTreeNodeChildren
>;
