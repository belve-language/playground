export function checkIfIsValidNumber(value: unknown): value is number {
	const isNan = Number.isNaN(value);
	return typeof value === "number" && !isNan;
}
