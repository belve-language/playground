import type {BranchConcreteSyntaxTreeNode} from "../../../BranchConcreteSyntaxTreeNode.ts";
import type {StatementsRestStatementsConcreteSyntaxTreeNodeDataChildren} from "./StatementsRestStatementsConcreteSyntaxTreeNodeDataChildren.ts";
import type {statementsRestStatementsConcreteSyntaxTreeNodeKindName} from "./statementsRestStatementsConcreteSyntaxTreeNodeKindName.ts";
export type StatementsRestStatementsConcreteSyntaxTreeNode =
	BranchConcreteSyntaxTreeNode<
		typeof statementsRestStatementsConcreteSyntaxTreeNodeKindName,
		StatementsRestStatementsConcreteSyntaxTreeNodeDataChildren
	>;
