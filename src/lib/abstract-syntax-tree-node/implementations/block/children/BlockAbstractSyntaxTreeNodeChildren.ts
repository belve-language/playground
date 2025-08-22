import type {OperatedStatementAbstractSyntaxTreeNode} from "../../operated-statement/OperatedStatementAbstractSyntaxTreeNode.ts";
export type BlockAbstractSyntaxTreeNodeChildren = {
	readonly statements: readonly [
		OperatedStatementAbstractSyntaxTreeNode,
		...(readonly OperatedStatementAbstractSyntaxTreeNode[]),
	];
};
