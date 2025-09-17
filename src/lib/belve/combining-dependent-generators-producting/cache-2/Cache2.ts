export type Cache2<Result2> = {
	readonly generator: Generator<Result2, void, void>;
	readonly isDone: boolean;
	readonly results: readonly Result2[];
};
