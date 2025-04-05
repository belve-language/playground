export type FinalizeResult<Status extends string, Data> = Readonly<{
	status: Status;
	data: Data;
}>;
