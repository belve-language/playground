import {generateIndex2Diagonally} from "../generating-index-2-diagonally/generateIndex2Diagonally.ts";
import {createEmptyCache1} from "./creating-empty-cache-1/createEmptyCache1.ts";
import {ensureCache1UpTo} from "./ensuring-cache-1-up-to/ensureCache1UpTo.ts";
import {ensureCache2UpTo} from "./ensuring-cache-2-up-to/ensureCache2UpTo.ts";
import {updateCache2InCache1} from "./updating-cache-2-in-cache-1/updateCache2InCache1.ts";
export function* combineDependentGeneratorsProducting<Result1, Result2>(
	generator1: Generator<Result1, void, void>,
	creatorOfGenerator2: (result1: Result1) => Generator<Result2, void, void>,
): Generator<Result2, void, void> {
	let cache1 = createEmptyCache1<Result2>();
	for (const index of generateIndex2Diagonally()) {
		cache1 = ensureCache1UpTo(
			cache1,
			creatorOfGenerator2,
			generator1,
			index.in1,
		);
		if (index.in1 < cache1.cache2s.length) {
			const cache2 = ensureCache2UpTo(
				cache1.cache2s[index.in1] as (typeof cache1.cache2s)[typeof index.in1],
				index.in2,
			);
			if (index.in2 < cache2.results.length) {
				yield cache2.results[
					index.in2
				] as (typeof cache2.results)[typeof index.in2];
			}
			cache1 = updateCache2InCache1(cache1, index.in1, cache2);
		}
		if (
			cache1.isDone
			&& cache1.cache2s.every((cache2) => {
				return cache2.isDone;
			})
		) {
			break;
		}
	}
}
