import type {BranchConcreteSyntaxTreeNode} from "../../branch/BranchConcreteSyntaxTreeNode.ts";
import type {StatementsRestStatementsConcreteSyntaxTreeNodeDataChildren} from "./data-children/StatementsRestStatementsConcreteSyntaxTreeNodeDataChildren.ts";
import type {statementsRestStatementsConcreteSyntaxTreeNodeKindName} from "./kind-name/statementsRestStatementsConcreteSyntaxTreeNodeKindName.ts";
export type StatementsRestStatementsConcreteSyntaxTreeNode =
	BranchConcreteSyntaxTreeNode<
		typeof statementsRestStatementsConcreteSyntaxTreeNodeKindName,
		StatementsRestStatementsConcreteSyntaxTreeNodeDataChildren
	>;
