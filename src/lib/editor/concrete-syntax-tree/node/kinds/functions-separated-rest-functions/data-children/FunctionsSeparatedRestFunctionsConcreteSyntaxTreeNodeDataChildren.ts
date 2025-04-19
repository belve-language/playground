import type {FunctionsConcreteSyntaxTreeNode} from "../../functions/FunctionsConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
export type FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNodeDataChildren =
	readonly [
		whitespace: WhitespaceConcreteSyntaxTreeNode,
		functions: FunctionsConcreteSyntaxTreeNode,
	];
