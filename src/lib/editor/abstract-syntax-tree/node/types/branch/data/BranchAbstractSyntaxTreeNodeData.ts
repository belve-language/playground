import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import type {AbstractSyntaxTreeNode} from "../../../AbstractSyntaxTreeNode.ts";
export type BranchAbstractSyntaxTreeNodeData<
	ChildrenToUse extends readonly AbstractSyntaxTreeNode<
		string,
		string,
		unknown
	>[],
> = Readonly<{children: ChildrenToUse; spanIndexes: SpanIndexes}>;
