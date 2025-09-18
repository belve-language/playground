import type {Cache1} from "../cache-1/Cache1.ts";
import {createEmptyCache2} from "./create-empty-cache-2/createEmptyCache1Entry.ts";
export function ensureCache1UpTo<Result1, Result2>(
	cache1: Cache1<Result2>,
	Generator2creator: (result1: Result1) => Generator<Result2, void, void>,
	generator1: Generator<Result1, void, void>,
	index: number,
): Cache1<Result2> {
	let newCache1Cache2s = cache1.cache2s;
	let newCache1IsDone = cache1.isDone;
	while (cache1.cache2s.length <= index && !cache1.isDone) {
		const result = generator1.next();
		if (result.done) {
			newCache1IsDone = true;
		} else {
			newCache1Cache2s = [
				...newCache1Cache2s,
				createEmptyCache2(Generator2creator(result.value)),
			];
		}
	}
	const newCache1: Cache1<Result2> = {
		cache2s: newCache1Cache2s,
		isDone: newCache1IsDone,
	};
	return newCache1;
}
