import type {Cache2} from "../cache-2/Cache2.ts";
export function ensureCache2UpTo<Result2>(
	cache2: Cache2<Result2>,
	index: number,
): Cache2<Result2> {
	let cache2IsDone = cache2.isDone;
	let cache2Results = cache2.results;
	while (cache2Results.length <= index && !cache2IsDone) {
		const result = cache2.generator.next();
		if (result.done) {
			cache2IsDone = true;
		} else {
			cache2Results = [...cache2Results, result.value];
		}
	}
	return {
		generator: cache2.generator,
		isDone: cache2IsDone,
		results: cache2Results,
	};
}
