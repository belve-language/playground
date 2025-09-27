import type {Value} from "../../../../../value/Value.ts";
export function checkIfValuesAreNotEqual(
	value1: Value,
	value2: Value,
): boolean {
	switch (typeof value1) {
		case "number": {
			switch (typeof value2) {
				case "number": {
					return value1 !== value2;
				}
				case "object": {
					return true;
				}
			}
		}
		case "object": {
			switch (typeof value2) {
				case "number": {
					return true;
				}
				case "object": {
					const [firstElement1OfValue1, secondElement1OfValue1] = value1;
					const [firstElement1OfValue2, secondElement1OfValue2] = value2;
					const areValuesNotEqual =
						checkIfValuesAreNotEqual(
							firstElement1OfValue1,
							firstElement1OfValue2,
						)
						|| checkIfValuesAreNotEqual(
							secondElement1OfValue1,
							secondElement1OfValue2,
						);
					return areValuesNotEqual;
				}
			}
		}
	}
}
