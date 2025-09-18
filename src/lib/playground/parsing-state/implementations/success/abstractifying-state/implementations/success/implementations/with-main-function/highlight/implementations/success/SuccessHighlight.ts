import type {SpanIndexes} from "../../../../../../../../../../../../belve/span-indexes/SpanIndexes.ts";
import type {Variables} from "../../../../../../../../../../../../belve/variables/Variables.ts";
import {Highlight} from "../../Highlight.ts";
import {successHighlightTypeName} from "./type-name/successHighlightTypeName.ts";
export class SuccessHighlight extends Highlight<
	typeof successHighlightTypeName
> {
	public constructor(
		spanIndexes: SpanIndexes,
		unknowns: Variables,
		variables: Variables,
	) {
		super(spanIndexes, successHighlightTypeName, variables);
		this.unknowns = unknowns;
		// TODO? renaming to availableVariables?
	}
	public readonly unknowns: Variables;
}
