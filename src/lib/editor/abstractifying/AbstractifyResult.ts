export type AbstractifyResult<
	StatusToUse extends string,
	DataToUse,
> = Readonly<{status: StatusToUse; data: DataToUse}>;
