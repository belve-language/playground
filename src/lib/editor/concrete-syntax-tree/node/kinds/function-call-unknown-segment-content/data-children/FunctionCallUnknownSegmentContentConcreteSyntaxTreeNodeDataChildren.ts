import type {IdentifierConcreteSyntaxTreeNode} from "../../identifier/IdentifierConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
export type FunctionCallUnknownSegmentContentConcreteSyntaxTreeNodeDataChildren =
	readonly [
		initialWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
		identifier: IdentifierConcreteSyntaxTreeNode,
		finalWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
	];
