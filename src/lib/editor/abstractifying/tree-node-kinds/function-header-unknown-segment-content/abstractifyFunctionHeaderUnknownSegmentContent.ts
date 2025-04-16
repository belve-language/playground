import type {FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/function-header-unknown-segment-content/FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode.ts";
import {abstractifyIdentifier} from "../identifier/abstractifyIdentifier.ts";
export function abstractifyFunctionHeaderUnknownSegmentContent(
	content: FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode,
): string {
	const [, contentIdentifier] = content.data.children;
	const abstractifiedContentIdentifier =
		abstractifyIdentifier(contentIdentifier);
	return abstractifiedContentIdentifier;
}
