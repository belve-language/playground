export type FinalizeResult<StatusToUse extends string, DataToUse> = Readonly<{
	status: StatusToUse;
	data: DataToUse;
}>;
