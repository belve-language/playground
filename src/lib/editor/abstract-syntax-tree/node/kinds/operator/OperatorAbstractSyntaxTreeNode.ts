import type {LeafAbstractSyntaxTreeNode} from "../../types/leaf/LeafAbstractSyntaxTreeNode.ts";
import type {OperatorAbstractSyntaxTreeNodeDataValue} from "./data-value/IdentifierAbstractSyntaxTreeNodeDataValue.ts";
import type {operatorAbstractSyntaxTreeNodeKindName} from "./kind-name/identifierAbstractSyntaxTreeNodeKindName.ts";
export type OperatorAbstractSyntaxTreeNode = LeafAbstractSyntaxTreeNode<
	typeof operatorAbstractSyntaxTreeNodeKindName,
	OperatorAbstractSyntaxTreeNodeDataValue
>;
