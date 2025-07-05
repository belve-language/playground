import type {FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/function-header-known-segment-content/FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode.ts";
import {subabstractifyIdentifier} from "../identifier/subabstractifyIdentifier.ts";
export function subabstractifyFunctionHeaderKnownSegmentContent(
	content: FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode,
): string {
	const [, contentIdentifier] = content.data.children;
	const abstractifiedContentIdentifier =
		subabstractifyIdentifier(contentIdentifier);
	return abstractifiedContentIdentifier;
}
