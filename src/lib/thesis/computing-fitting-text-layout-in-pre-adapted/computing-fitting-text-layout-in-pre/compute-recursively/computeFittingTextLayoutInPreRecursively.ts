import {space} from "./space/space.ts";
export function computeFittingTextLayoutInPreRecursively(
	currentLineLength: number,
	maximalLineLength: number,
	tabLength: number,
	textParts: readonly [string, ...(readonly string[])],
): string {
	const [firstTextPart, secondTextPart, ...remainingTextParts] = textParts;
	if (
		currentLineLength + space.length + firstTextPart.length
		<= maximalLineLength
	) {
		if (secondTextPart === undefined) {
			return `${space}${firstTextPart}`;
		} else {
			const stringifiedSecondAndRemainingTextParts =
				computeFittingTextLayoutInPreRecursively(
					currentLineLength + space.length + firstTextPart.length,
					maximalLineLength,
					tabLength,
					[secondTextPart, ...remainingTextParts],
				);
			return `${space}${firstTextPart}${stringifiedSecondAndRemainingTextParts}`;
		}
	} else {
		if (secondTextPart === undefined) {
			return `
	${firstTextPart}`;
		} else {
			const stringifiedSecondAndRemainingTextParts =
				computeFittingTextLayoutInPreRecursively(
					tabLength + firstTextPart.length,
					maximalLineLength,
					tabLength,
					[secondTextPart, ...remainingTextParts],
				);
			return `
	${firstTextPart}${stringifiedSecondAndRemainingTextParts}`;
		}
	}
}
