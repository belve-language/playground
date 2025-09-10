import type {Variables} from "../../../../../../variables/Variables.ts";
export function computeUnknowns(
	unknownsNames: readonly string[],
	unknownsValues: readonly unknown[],
): Variables {
	const unknowns: {readonly [name: string]: unknown} = Object.fromEntries(
		unknownsNames.map((name, index) => {
			return [name, unknownsValues[index]];
		}),
	);
	return unknowns;
}
