import type {BranchConcreteSyntaxTreeNode} from "../../branch/BranchConcreteSyntaxTreeNode.ts";
import type {SourceFileContentConcreteSyntaxTreeNodeDataChildren} from "./data-children/SourceFileContentConcreteSyntaxTreeNodeDataChildren.ts";
import type {sourceFileContentConcreteSyntaxTreeNodeKindName} from "./kind-name/sourceFileContentConcreteSyntaxTreeNodeKindName.ts";
export type SourceFileContentConcreteSyntaxTreeNode =
	BranchConcreteSyntaxTreeNode<
		typeof sourceFileContentConcreteSyntaxTreeNodeKindName,
		SourceFileContentConcreteSyntaxTreeNodeDataChildren
	>;
