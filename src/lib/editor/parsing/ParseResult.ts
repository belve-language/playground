export type ParseResult<StatusToUse extends string, DataToUse> = Readonly<{
	status: StatusToUse;
	data: DataToUse;
}>;
