import type {Variables} from "../../../../../../variables/Variables.ts";
export function computeKnownsValues(
	availables: Variables,
	knownsNames: readonly string[],
): readonly unknown[] {
	const knownsValues: readonly unknown[] = knownsNames.map(
		(name: string): unknown => {
			if (name in availables) {
				return availables[name];
			} else {
				const nameAsNumber = parseFloat(name);
				// TODO
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
