import type {Cache} from "../cache/Cache.ts";
export function createEmptyCache<Result>(): Cache<Result> {
	return {isDone: false, results: []};
}
