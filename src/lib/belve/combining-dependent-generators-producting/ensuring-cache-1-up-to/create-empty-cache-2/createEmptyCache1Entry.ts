import type {Cache2} from "../../cache-2/Cache2.ts";
export function createEmptyCache2<Result2>(
	generator: Generator<Result2, void, void>,
): Cache2<Result2> {
	const cache2: Cache2<Result2> = {
		generator: generator,
		isDone: false,
		results: [],
	};
	return cache2;
}
