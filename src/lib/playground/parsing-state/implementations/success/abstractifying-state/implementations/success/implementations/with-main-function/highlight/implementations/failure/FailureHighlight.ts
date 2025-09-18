import type {SpanIndexes} from "../../../../../../../../../../../../belve/span-indexes/SpanIndexes.ts";
import type {Variables} from "../../../../../../../../../../../../belve/variables/Variables.ts";
import {Highlight} from "../../Highlight.ts";
import {failureHighlightTypeName} from "./type-name/failureHighlightTypeName.ts";
export class FailureHighlight extends Highlight<
	typeof failureHighlightTypeName
> {
	public constructor(spanIndexes: SpanIndexes, variables: Variables) {
		super(spanIndexes, failureHighlightTypeName, variables);
	}
}
