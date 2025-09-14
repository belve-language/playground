import type {Cache2} from "../../cache-2/Cache2.ts";
export function createEmptyCache2<Result2>(
	generator: Generator<Result2, void, void>,
): Cache2<Result2> {
	return {generator: generator, isDone: false, results: []};
}
