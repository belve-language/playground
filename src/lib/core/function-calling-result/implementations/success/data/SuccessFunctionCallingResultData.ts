import type {SupportedStatementAbstractSyntaxTreeNode} from "../../../../abstract-syntax-tree-node/implementations/statement/supported/SupportedStatementAbstractSyntaxTreeNode.ts";
import type {Variables} from "../../../../variables/Variables.ts";
// TODO: GET RID OF DATA ?
export type SuccessFunctionCallingResultData = {
	readonly node: SupportedStatementAbstractSyntaxTreeNode;
	readonly variables: Variables;
};
