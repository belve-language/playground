export function computeFittingTextLayoutInPreRecursively(
	currentLineLength: number,
	maximalLineLength: number,
	tabLength: number,
	textParts: readonly [string, ...(readonly string[])],
): string {
	const [firstTextPart, secondTextPart, ...remainingTextParts] = textParts;
	const space = " ";
	if (
		currentLineLength + space.length + firstTextPart.length
		<= maximalLineLength
	) {
		if (secondTextPart === undefined) {
			return ` ${firstTextPart}`;
		} else {
			return ` ${firstTextPart}${computeFittingTextLayoutInPreRecursively(
				currentLineLength + space.length + firstTextPart.length,
				maximalLineLength,
				tabLength,
				[secondTextPart, ...remainingTextParts],
			)}`;
		}
	} else {
		if (secondTextPart === undefined) {
			return `
	${firstTextPart}`;
		} else {
			return `
	${firstTextPart}${computeFittingTextLayoutInPreRecursively(
		tabLength + firstTextPart.length,
		maximalLineLength,
		tabLength,
		[secondTextPart, ...remainingTextParts],
	)}`;
		}
	}
}
