import type {AbstractSyntaxTreeNode} from "../../../../../../abstract-syntax-tree-node/AbstractSyntaxTreeNode.ts";
export type SuccessAbstractifyingResultData<Data> = {
	readonly abstractSyntaxTreeNode: AbstractSyntaxTreeNode<Data>;
};
