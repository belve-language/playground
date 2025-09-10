import type {SupportedStatementAbstractSyntaxTreeNode} from "../../../../abstract-syntax-tree-node/implementations/statement/supported/SupportedStatementAbstractSyntaxTreeNode.ts";
import type {Variables} from "../../../../variables/Variables.ts";
export type FailureStatementExecutingResultData = {
	readonly node: SupportedStatementAbstractSyntaxTreeNode;
	readonly variables: Variables;
};
