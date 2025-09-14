import type {Index} from "../../index/Index.ts";
import type {Cache1} from "../cache-1/Cache1.ts";
import type {Cache2} from "../cache-2/Cache2.ts";
export function updateCache2InCache1<Result2>(
	cache1: Cache1<Result2>,
	index: Index,
	cache2: Cache2<Result2>,
): Cache1<Result2> {
	const cache2sOfNewCache1: readonly Cache2<Result2>[] = cache1.cache2s.with(
		index,
		cache2,
	);
	const newCache1: Cache1<Result2> = {...cache1, cache2s: cache2sOfNewCache1};
	return newCache1;
}
