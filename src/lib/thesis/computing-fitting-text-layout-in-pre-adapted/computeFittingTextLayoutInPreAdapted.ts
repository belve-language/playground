import {computeFittingTextLayoutInPre} from "./computing-fitting-text-layout-in-pre/computeFittingTextLayoutInPre.ts";
export function computeFittingTextLayoutInPreAdapted(
	textParts: readonly [string, ...(readonly string[])],
): string {
	// TODO: read tab size from a variable
	const text = computeFittingTextLayoutInPre(77, 4, textParts);
	return text;
}
