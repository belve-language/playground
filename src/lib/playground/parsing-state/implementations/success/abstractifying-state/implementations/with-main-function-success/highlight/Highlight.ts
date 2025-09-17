import type {SpanIndexes} from "../../../../../../../../belve/span-indexes/SpanIndexes.ts";
export type Highlight = {
	readonly spanIndexes: SpanIndexes;
	readonly typeName: "failure" | "step" | "success";
};
