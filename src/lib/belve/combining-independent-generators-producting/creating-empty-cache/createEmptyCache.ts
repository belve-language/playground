import type {Cache} from "../cache/Cache.ts";
export function createEmptyCache<Result>(): Cache<Result> {
	const cache: Cache<Result> = {isDone: false, results: []};
	return cache;
}
