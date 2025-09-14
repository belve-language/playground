import type {SupportedAbstractSyntaxTreeNode} from "../../../../abstract-syntax-tree-node/implementations/statement/supported/SupportedAbstractSyntaxTreeNode.ts";
import type {Variables} from "../../../../variables/Variables.ts";
export type FailureExecutingResultData = {
	readonly node: SupportedAbstractSyntaxTreeNode;
	readonly variables: Variables;
};
