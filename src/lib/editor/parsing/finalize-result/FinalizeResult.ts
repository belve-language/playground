export type FinalizeResult<TypeNameToUse extends string, DataToUse> = Readonly<{
	typeName: TypeNameToUse;
	data: DataToUse;
}>;
