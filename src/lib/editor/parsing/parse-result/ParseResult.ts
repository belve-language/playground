export type ParseResult<TypeNameToUse extends string, DataToUse> = Readonly<{
	typeName: TypeNameToUse;
	data: DataToUse;
}>;
