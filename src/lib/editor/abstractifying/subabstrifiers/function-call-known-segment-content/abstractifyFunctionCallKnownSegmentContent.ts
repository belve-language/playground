import type {FunctionCallKnownSegmentContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/function-call-known-segment-content/FunctionCallKnownSegmentContentConcreteSyntaxTreeNode.ts";
import {subabstractifyIdentifier} from "../identifier/subabstractifyIdentifier.ts";
export function subabstractifyFunctionCallKnownSegmentContent(
	content: FunctionCallKnownSegmentContentConcreteSyntaxTreeNode,
): Identifier {
	const [, contentIdentifier] = content.data.children;
	return subabstractifyIdentifier(contentIdentifier);
]}
