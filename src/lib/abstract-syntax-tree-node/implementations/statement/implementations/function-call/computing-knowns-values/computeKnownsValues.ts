import type {Variables} from "../../../../../../variables/Variables.ts";
export function computeKnownsValues(
	knownsNames: readonly string[],
	variables: Variables,
): readonly unknown[] {
	const knownsValues: readonly unknown[] = knownsNames.map((name) => {
		if (name in variables) {
			return variables[name];
		} else {
			throw new Error(`Variable with name "${name}" not found.`);
		}
	});
	return knownsValues;
}
