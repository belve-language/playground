import type {Variables} from "../../../../../../variables/Variables.ts";
export function computeUnknowns(
	unknownsNames: readonly string[],
	unknownsValues: readonly unknown[],
): Variables {
	const unknowns: Variables = Object.fromEntries(
		unknownsNames.map(
			(name: string, index: number): readonly [string, unknown] => {
				return [name, unknownsValues[index]];
			},
		),
	);
	return unknowns;
}
