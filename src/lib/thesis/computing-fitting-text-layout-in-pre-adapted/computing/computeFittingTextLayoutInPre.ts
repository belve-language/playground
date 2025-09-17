import {computeFittingTextLayoutInPreRecursively} from "./computing-recursively/computeFittingTextLayoutInPreRecursively.ts";
export function computeFittingTextLayoutInPre(
	maximalLineLength: number,
	tabLength: number,
	textParts: readonly [string, ...(readonly string[])],
): string {
	const [firstTextPart, secondTextPart, ...remainingTextParts] = textParts;
	if (secondTextPart === undefined) {
		return firstTextPart;
	} else {
		return `${firstTextPart}${computeFittingTextLayoutInPreRecursively(
			firstTextPart.length,
			maximalLineLength,
			tabLength,
			[secondTextPart, ...remainingTextParts],
		)}`;
	}
}
