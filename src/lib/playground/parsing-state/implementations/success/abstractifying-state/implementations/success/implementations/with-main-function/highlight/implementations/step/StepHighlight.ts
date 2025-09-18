import type {SpanIndexes} from "../../../../../../../../../../../../belve/span-indexes/SpanIndexes.ts";
import type {Variables} from "../../../../../../../../../../../../belve/variables/Variables.ts";
import {Highlight} from "../../Highlight.ts";
import {stepHighlightTypeName} from "./type-name/stepHighlightTypeName.ts";
export class StepHighlight extends Highlight<typeof stepHighlightTypeName> {
	public constructor(spanIndexes: SpanIndexes, variables: Variables) {
		super(spanIndexes, stepHighlightTypeName, variables);
	}
}
