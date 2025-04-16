import type {BranchConcreteSyntaxTreeNode} from "../../../BranchConcreteSyntaxTreeNode.ts";
import type {StatementsRestStatementsConcreteSyntaxTreeNodeChildren} from "./StatementsRestStatementsConcreteSyntaxTreeNodeChildren.ts";
import type {statementsRestStatementsConcreteSyntaxTreeNodeKindName} from "./statementsRestStatementsConcreteSyntaxTreeNodeKindName.ts";
export type StatementsRestStatementsConcreteSyntaxTreeNode =
	BranchConcreteSyntaxTreeNode<
		typeof statementsRestStatementsConcreteSyntaxTreeNodeKindName,
		StatementsRestStatementsConcreteSyntaxTreeNodeChildren
	>;
