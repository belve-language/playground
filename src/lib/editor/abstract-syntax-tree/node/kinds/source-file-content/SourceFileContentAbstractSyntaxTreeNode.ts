import type {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {SourceFileContentAbstractSyntaxTreeNodeChildren} from "./SourceFileContentAbstractSyntaxTreeNodeChildren.ts";
import type {sourceFileContentAbstractSyntaxTreeNodeTypeName} from "./sourceFileContentAbstractSyntaxTreeNodeTypeName.ts";
export type SourceFileContentAbstractSyntaxTreeNode =
	BranchAbstractSyntaxTreeNode<
		typeof sourceFileContentAbstractSyntaxTreeNodeTypeName,
		SourceFileContentAbstractSyntaxTreeNodeChildren
	>;
