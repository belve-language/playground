import type {LeafAbstractSyntaxTreeNode} from "../../types/leaf/LeafAbstractSyntaxTreeNode.ts";
import type {OperatorAbstractSyntaxTreeNodeDataValue} from "./data-value/OperatorAbstractSyntaxTreeNodeDataValue.ts";
import type {operatorAbstractSyntaxTreeNodeKindName} from "./kind-name/operatorAbstractSyntaxTreeNodeKindName.ts";
export type OperatorAbstractSyntaxTreeNode = LeafAbstractSyntaxTreeNode<
	typeof operatorAbstractSyntaxTreeNodeKindName,
	OperatorAbstractSyntaxTreeNodeDataValue
>;
