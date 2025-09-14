import type {Cache} from "../cache/Cache.ts";
export function ensureCacheUpTo<Result>(
	cache: Cache<Result>,
	generator: Generator<Result, void, void>,
	index: number,
): Cache<Result> {
	let newCacheIsDone = cache.isDone;
	let newCacheResults = cache.results;
	while (newCacheResults.length <= index && !newCacheIsDone) {
		const result = generator.next();
		if (result.done) {
			newCacheIsDone = true;
		} else {
			newCacheResults = [...newCacheResults, result.value];
		}
	}
	return {isDone: newCacheIsDone, results: newCacheResults};
}
