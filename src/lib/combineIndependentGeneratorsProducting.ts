import {generateIndex2Diagonally} from "./generateIndex2Diagonally.ts";

/**
 * Diagonal enumeration of the Cartesian product of two generators.
 */
export function* combineIndependentGeneratorsProducting<Result1, Result2>(
	generator1: Generator<Result1, void, void>,
	generator2: Generator<Result2, void, void>,
): Generator<readonly [Result1, Result2], void, void> {
	const cache1: Result1[] = [];
	const cache2: Result2[] = [];
	let isGenerator1Done = false;
	let isGenerator2Done = false;
	function ensureCache1UpTo(index: number): void {
		while (cache1.length <= index && !isGenerator1Done) {
			const result = generator1.next();
			if (result.done) {
				isGenerator1Done = true;
			} else {
				cache1.push(result.value);
			}
		}
	}
	function ensureCache2UpTo(index: number): void {
		while (cache2.length <= index && !isGenerator2Done) {
			const result = generator2.next();
			if (result.done) {
				isGenerator2Done = true;
			} else {
				cache2.push(result.value);
			}
		}
	}
	for (const index of generateIndex2Diagonally()) {
		ensureCache1UpTo(index.in1);
		ensureCache2UpTo(index.in2);
		if (index.in1 < cache1.length && index.in2 < cache2.length) {
			yield [cache1[index.in1], cache2[index.in2]] as readonly [
				Result1,
				Result2,
			];
		}
		if (isGenerator1Done && isGenerator2Done) {
			break;
		}
	}
}
