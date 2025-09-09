import type {SupportedOperatorAbstractSyntaxTreeNode} from "../../operator/supported/SupportedOperatorAbstractSyntaxTreeNode.ts";
import type {SupportedStatementAbstractSyntaxTreeNode} from "../../statement/supported/SupportedStatementAbstractSyntaxTreeNode.ts";
export type OperatedStatementAbstractSyntaxTreeNodeChildren = {
	readonly operator: SupportedOperatorAbstractSyntaxTreeNode;
	readonly statement: SupportedStatementAbstractSyntaxTreeNode;
};
