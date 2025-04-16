import type {SourceFileContentConcreteSyntaxTreeNode} from "./node/kinds/source-file-content/SourceFileContentConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "./tree-node-types/whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
export type ConcreteSyntaxTree =
	| WhitespaceConcreteSyntaxTreeNode
	| SourceFileContentConcreteSyntaxTreeNode;
