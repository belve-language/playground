import type {Cache1} from "../cache-1/Cache1.ts";
export function createEmptyCache1<Result2>(): Cache1<Result2> {
	const cache1: Cache1<Result2> = {cache2s: [], isDone: false};
	return cache1;
}
