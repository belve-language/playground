import type {Cache2} from "../cache-2/Cache2.ts";
export function ensureCache2UpTo<Result2>(
	cache2: Cache2<Result2>,
	index: number,
): Cache2<Result2> {
	let isDoneOfNewCache2 = cache2.isDone;
	let resultsOfNewCache2 = cache2.results;
	while (resultsOfNewCache2.length <= index && !isDoneOfNewCache2) {
		const result = cache2.generator.next();
		if (result.done) {
			isDoneOfNewCache2 = true;
		} else {
			resultsOfNewCache2 = [...resultsOfNewCache2, result.value];
		}
	}
	const newCache2: Cache2<Result2> = {
		generator: cache2.generator,
		isDone: isDoneOfNewCache2,
		results: resultsOfNewCache2,
	};
	return newCache2;
}
