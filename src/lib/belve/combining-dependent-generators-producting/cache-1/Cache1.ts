import type {Cache2} from "../cache-2/Cache2.ts";
export type Cache1<Result2> = {
	readonly cache2s: readonly Cache2<Result2>[];
	readonly isDone: boolean;
};
