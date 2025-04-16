import type {FunctionCallKnownSegmentContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/function-call-known-segment-content/FunctionCallKnownSegmentContentConcreteSyntaxTreeNode.ts";
import {abstractifyIdentifier} from "../identifier/abstractifyIdentifier.ts";
export function abstractifyFunctionCallKnownSegmentContent(
	content: FunctionCallKnownSegmentContentConcreteSyntaxTreeNode,
): Identifier {
	const [, contentIdentifier] = content.data.children;
	const serializedContentIdentifier = abstractifyIdentifier(contentIdentifier);
	return serializedContentIdentifier;
}
