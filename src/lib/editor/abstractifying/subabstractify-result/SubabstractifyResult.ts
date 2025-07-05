export type SubabstractifyResult<
	TypeNameToUse extends string,
	DataToUse,
> = Readonly<{typeName: TypeNameToUse; data: DataToUse}>;
