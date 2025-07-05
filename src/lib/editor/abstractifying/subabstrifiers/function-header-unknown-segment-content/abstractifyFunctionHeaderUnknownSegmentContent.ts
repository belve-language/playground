import type {FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/function-header-unknown-segment-content/FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode.ts";
import {subabstractifyIdentifier} from "../identifier/subabstractifyIdentifier.ts";
export function subabstractifyFunctionHeaderUnknownSegmentContent(
	content: FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode,
): string {
	const [, contentIdentifier] = content.data.children;
	return subabstractifyIdentifier(contentIdentifier);
}
