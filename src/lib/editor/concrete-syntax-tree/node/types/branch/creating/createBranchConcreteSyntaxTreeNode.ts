import type {SpanIndexes} from "../span-indexes/SpanIndexes.ts";
import type {BranchConcreteSyntaxTreeNode} from "./BranchConcreteSyntaxTreeNode.ts";
export function createBranchConcreteSyntaxTreeNode<
	TypeNameToUse extends string,
	ChildrenToUse extends readonly unknown[],
>(
	typeName: TypeNameToUse,
	children: ChildrenToUse,
	spanIndexes: SpanIndexes,
): BranchConcreteSyntaxTreeNode<TypeNameToUse, ChildrenToUse> {
	return {typeName, data: {children, spanIndexes}, kind: "branch"} as const;
}
