import type {BranchAbstractSyntaxTreeNode} from "../../types/branch/BranchAbstractSyntaxTreeNode.ts";
import type {SourceFileContentAbstractSyntaxTreeNodeChildren} from "./children/SourceFileContentAbstractSyntaxTreeNodeChildren.ts";
export type SourceFileContentAbstractSyntaxTreeNode =
	BranchAbstractSyntaxTreeNode<
		typeof sourceFileContentAbstractSyntaxTreeNodeTypeName,
		SourceFileContentAbstractSyntaxTreeNodeChildren
	>;
