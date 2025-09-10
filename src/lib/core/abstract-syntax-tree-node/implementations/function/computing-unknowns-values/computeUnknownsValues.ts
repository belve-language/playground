import type {Variables} from "../../../../variables/Variables.ts";
export function computeUnknownsValues(
	unknownsNames: readonly string[],
	variables: Variables,
): readonly unknown[] {
	const unknownsValues = unknownsNames.map((unknownName) => {
		if (unknownName in variables) {
			return variables[unknownName];
		} else {
			throw new Error(
				`Variable "${unknownName}" is not defined in the current context.`,
			);
		}
	});
	return unknownsValues;
}
