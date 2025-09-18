import type {Variables} from "../../../../variables/Variables.ts";
export function computeKnowns(
	knownsNames: readonly string[],
	knownsValues: readonly unknown[],
): Variables {
	const knowns: Variables = Object.fromEntries(
		knownsNames.map(
			(name: string, index: number): readonly [string, unknown] => {
				return [name, knownsValues[index]];
			},
		),
	);
	return knowns;
}
