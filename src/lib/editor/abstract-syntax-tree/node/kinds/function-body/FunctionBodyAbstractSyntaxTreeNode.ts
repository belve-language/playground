import type {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {FunctionBodyAbstractSyntaxTreeNodeChildren} from "./FunctionBodyAbstractSyntaxTreeNodeChildren.ts";
import type {functionBodyAbstractSyntaxTreeNodeTypeName} from "./functionBodyAbstractSyntaxTreeNodeTypeName.ts";
export type FunctionBodyAbstractSyntaxTreeNode = BranchAbstractSyntaxTreeNode<
	typeof functionBodyAbstractSyntaxTreeNodeTypeName,
	FunctionBodyAbstractSyntaxTreeNodeChildren
>;
