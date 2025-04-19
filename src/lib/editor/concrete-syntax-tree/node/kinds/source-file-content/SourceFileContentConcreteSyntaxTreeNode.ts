import type {BranchConcreteSyntaxTreeNode} from "../../../BranchConcreteSyntaxTreeNode.ts";
import type {SourceFileContentConcreteSyntaxTreeNodeDataChildren} from "./SourceFileContentConcreteSyntaxTreeNodeDataChildren.ts";
import type {sourceFileContentConcreteSyntaxTreeNodeKindName} from "./sourceFileContentConcreteSyntaxTreeNodeKindName.ts";
export type SourceFileContentConcreteSyntaxTreeNode =
	BranchConcreteSyntaxTreeNode<
		typeof sourceFileContentConcreteSyntaxTreeNodeKindName,
		SourceFileContentConcreteSyntaxTreeNodeDataChildren
	>;
