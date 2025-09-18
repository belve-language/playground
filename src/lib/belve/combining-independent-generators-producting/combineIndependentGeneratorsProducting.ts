import type {Cache} from "./cache/Cache.ts";
import {generateIndex2Diagonally} from "../generating-index-2-diagonally/generateIndex2Diagonally.ts";
import {createEmptyCache} from "./creating-empty-cache/createEmptyCache.ts";
import {ensureCacheUpTo} from "./ensuring-cache-up-to/ensureCacheUpTo.ts";
export function* combineIndependentGeneratorsProducting<Result1, Result2>(
	generator1: Generator<Result1, void, void>,
	generator2: Generator<Result2, void, void>,
): Generator<readonly [Result1, Result2], void, void> {
	let cache1: Cache<Result1> = createEmptyCache<Result1>();
	let cache2: Cache<Result2> = createEmptyCache<Result2>();
	for (const index of generateIndex2Diagonally()) {
		cache1 = ensureCacheUpTo<Result1>(cache1, generator1, index._1);
		cache2 = ensureCacheUpTo<Result2>(cache2, generator2, index._2);
		if (index._1 < cache1.results.length && index._2 < cache2.results.length) {
			yield [
				cache1.results[index._1] as (typeof cache1.results)[typeof index._1],
				cache2.results[index._2] as (typeof cache2.results)[typeof index._2],
			];
		}
		if (cache1.isDone && cache2.isDone) {
			break;
		}
	}
}
