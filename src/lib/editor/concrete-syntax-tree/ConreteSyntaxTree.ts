import type {SourceFileContentConcreteSyntaxTreeNode} from "./node/kinds/source-file-content/SourceFileContentConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "./node/kinds/whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
export type ConcreteSyntaxTree =
	| WhitespaceConcreteSyntaxTreeNode
	| SourceFileContentConcreteSyntaxTreeNode;
