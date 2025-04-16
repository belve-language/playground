import type {BranchConcreteSyntaxTreeNode} from "../../../BranchConcreteSyntaxTreeNode.ts";
import type {SourceFileContentConcreteSyntaxTreeNodeChildren} from "./SourceFileContentConcreteSyntaxTreeNodeChildren.ts";
import type {sourceFileContentConcreteSyntaxTreeNodeKindName} from "./sourceFileContentConcreteSyntaxTreeNodeKindName.ts";
export type SourceFileContentConcreteSyntaxTreeNode =
	BranchConcreteSyntaxTreeNode<
		typeof sourceFileContentConcreteSyntaxTreeNodeKindName,
		SourceFileContentConcreteSyntaxTreeNodeChildren
	>;
