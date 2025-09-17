import type {Variables} from "../../../../../../variables/Variables.ts";
export function computeKnownsValues(
	knownsNames: readonly string[],
	variables: Variables,
): readonly unknown[] {
	const knownsValues: readonly unknown[] = knownsNames.map(
		(name: string): unknown => {
			if (name in variables) {
				return variables[name];
			} else {
				const nameAsNumber = parseFloat(name);
				if (isNaN(nameAsNumber)) {
					throw new Error(`Variable with the name "${name}" was not found.`);
				} else {
					return nameAsNumber;
				}
			}
		},
	);
	return knownsValues;
}
