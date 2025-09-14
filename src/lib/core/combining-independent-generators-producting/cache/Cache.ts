export type Cache<Result> = {
	readonly isDone: boolean;
	readonly results: readonly Result[];
};
