import {computeFittingTextLayoutInPre} from "./computing-fitting-text-layout-in-pre/computeFittingTextLayoutInPre.ts";
export function computeFittingTextLayoutInPreAdapted(
	textParts: readonly [string, ...(readonly string[])],
): string {
	// TODO: read tab size from a variable
	return computeFittingTextLayoutInPre(77, 4, textParts);
}
