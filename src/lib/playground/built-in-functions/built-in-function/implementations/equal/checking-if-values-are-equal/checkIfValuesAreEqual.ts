import type {Value} from "../../../../../value/Value.ts";
export function checkIfValuesAreEqual(value1: Value, value2: Value): boolean {
	switch (typeof value1) {
		case "number": {
			switch (typeof value2) {
				case "number": {
					return value1 === value2;
				}
				case "object": {
					return false;
				}
			}
		}
		case "object": {
			switch (typeof value2) {
				case "number": {
					return false;
				}
				case "object": {
					const [firstElement1OfValue1, secondElement1OfValue1] = value1;
					const [firstElement1OfValue2, secondElement1OfValue2] = value2;
					const areValuesEqual =
						checkIfValuesAreEqual(firstElement1OfValue1, firstElement1OfValue2)
						&& checkIfValuesAreEqual(
							secondElement1OfValue1,
							secondElement1OfValue2,
						);
					return areValuesEqual;
				}
			}
		}
	}
}
