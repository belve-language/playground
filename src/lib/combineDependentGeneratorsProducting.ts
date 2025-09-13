import {generateIndex2Diagonally} from "./generateIndex2Diagonally.ts";

/**
 * Diagonal enumeration of the Cartesian product of two generators.
 */
export function* combineDependentGeneratorsProducting<Result1, Result2>(
	generator1: Generator<Result1, void, void>,
	generator2Creator: (result1: Result1) => Generator<Result2, void, void>,
): Generator<Result2, void, void> {
	const cache1: {
		readonly cache2: Result2[];
		readonly generator2: Generator<Result2, void, void>;
		isGenerator2Done: boolean;
	}[] = [];
	let isGenerator1Done = false;
	function ensureCache1UpTo(index: number): void {
		while (cache1.length <= index && !isGenerator1Done) {
			const result = generator1.next();
			if (result.done) {
				isGenerator1Done = true;
			} else {
				cache1.push({
					cache2: [],
					generator2: generator2Creator(result.value),
					isGenerator2Done: false,
				});
			}
		}
	}
	for (const index of generateIndex2Diagonally()) {
		ensureCache1UpTo(index.in1);
		if (index.in1 < cache1.length) {
			const entry1 = cache1[index.in1] as {
				readonly cache2: Result2[];
				readonly generator2: Generator<Result2, void, void>;
				isGenerator2Done: boolean;
			};
			function ensureCache2UpTo(index: number): void {
				while (entry1.cache2.length <= index && !entry1.isGenerator2Done) {
					const result = entry1.generator2.next();
					if (result.done) {
						entry1.isGenerator2Done = true;
					} else {
						entry1.cache2.push(result.value);
					}
				}
			}
			ensureCache2UpTo(index.in2);
			if (index.in2 < entry1.cache2.length) {
				yield entry1.cache2[index.in2] as Result2;
			}
		}
		if (
			isGenerator1Done
			&& cache1.every((entry) => {
				return entry.isGenerator2Done;
			})
		) {
			break;
		}
	}
}
