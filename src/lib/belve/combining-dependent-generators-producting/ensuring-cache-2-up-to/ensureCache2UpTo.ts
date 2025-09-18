import type {Cache2} from "../cache-2/Cache2.ts";
export function ensureCache2UpTo<Result2>(
	cache2: Cache2<Result2>,
	index: number,
): Cache2<Result2> {
	let NewCache2isDone = cache2.isDone;
	let NewCache2results = cache2.results;
	while (NewCache2results.length <= index && !NewCache2isDone) {
		const result = cache2.generator.next();
		if (result.done) {
			NewCache2isDone = true;
		} else {
			NewCache2results = [...NewCache2results, result.value];
		}
	}
	const newCache2: Cache2<Result2> = {
		generator: cache2.generator,
		isDone: NewCache2isDone,
		results: NewCache2results,
	};
	return newCache2;
}
