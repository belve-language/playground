import type {LeafAbstractSyntaxTreeNode} from "../../types/leaf/LeafAbstractSyntaxTreeNode.ts";
import type {operatorAbstractSyntaxTreeNodeKindName} from "./kind-name/identifierAbstractSyntaxTreeNodeKindName.ts";
export class OperatorAbstractSyntaxTreeNode extends LeafAbstractSyntaxTreeNode<
	typeof operatorAbstractSyntaxTreeNodeKindName,
	OperatorAbstractSyntaxTreeNodeDataValue
> {}
