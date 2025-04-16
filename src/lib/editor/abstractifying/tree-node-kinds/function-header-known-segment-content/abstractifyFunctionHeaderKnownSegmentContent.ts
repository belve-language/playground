import type {FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/function-header-known-segment-content/FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode.ts";
import {abstractifyIdentifier} from "../identifier/abstractifyIdentifier.ts";
export function abstractifyFunctionHeaderKnownSegmentContent(
	content: FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode,
): string {
	const [, contentIdentifier] = content.data.children;
	const abstractifiedContentIdentifier =
		abstractifyIdentifier(contentIdentifier);
	return abstractifiedContentIdentifier;
}
