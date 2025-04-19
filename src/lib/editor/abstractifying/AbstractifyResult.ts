export type AbstractifyResult<
	TypeNameToUse extends string,
	DataToUse,
> = Readonly<{typeName: TypeNameToUse; data: DataToUse}>;
