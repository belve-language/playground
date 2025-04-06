import type {LeafAbstractSyntaxTreeNode} from "../../types/leaf/LeafAbstractSyntaxTreeNode.ts";
import type {IdentifierAbstractSyntaxTreeNodeDataValue} from "./data-value/IdentifierAbstractSyntaxTreeNodeDataValue.ts";
import type {identifierAbstractSyntaxTreeNodeKindName} from "./kind-name/identifierAbstractSyntaxTreeNodeKindName.ts";
export type IdentifierAbstractSyntaxTreeNode = LeafAbstractSyntaxTreeNode<
	typeof identifierAbstractSyntaxTreeNodeKindName,
	IdentifierAbstractSyntaxTreeNodeDataValue
>;
