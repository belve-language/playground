import type {Variables} from "../../../../../../variables/Variables.ts";
export function computeUnknownsValues(
	unknownsNames: readonly string[],
	variables: Variables,
): readonly unknown[] {
	const unknownsValues = unknownsNames.map((unknownName) => {
		if (unknownName in variables) {
			return variables[unknownName];
		} else {
			// TODO ?
			throw new Error(
				`The variable "${unknownName}" could not be found in the given variables`,
			);
		}
	});
	return unknownsValues;
}
