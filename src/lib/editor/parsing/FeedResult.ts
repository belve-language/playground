export type FeedResult<Status extends string, Data> = Readonly<{
	status: Status;
	data: Data;
}>;
