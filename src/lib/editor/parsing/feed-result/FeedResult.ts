export type FeedResult<TypeNameToUse extends string, DataToUse> = Readonly<{
	typeName: TypeNameToUse;
	data: DataToUse;
}>;
