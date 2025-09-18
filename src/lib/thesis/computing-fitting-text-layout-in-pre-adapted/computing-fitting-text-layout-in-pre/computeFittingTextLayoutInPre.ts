import {computeFittingTextLayoutInPreRecursively} from "./compute-recursively/computeFittingTextLayoutInPreRecursively.ts";
export function computeFittingTextLayoutInPre(
	maximalLineLength: number,
	tabLength: number,
	textParts: readonly [string, ...(readonly string[])],
): string {
	const [firstTextPart, secondTextPart, ...remainingTextParts] = textParts;
	if (secondTextPart === undefined) {
		const text: string = firstTextPart;
		return text;
	} else {
		const text: string = `${firstTextPart}${computeFittingTextLayoutInPreRecursively(
			firstTextPart.length,
			maximalLineLength,
			tabLength,
			[secondTextPart, ...remainingTextParts],
		)}`;
		return text;
	}
}
