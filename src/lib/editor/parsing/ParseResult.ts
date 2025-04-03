export type ParserResult<Status extends string, Data> = Readonly<{
	status: Status;
	data: Data;
}>;
