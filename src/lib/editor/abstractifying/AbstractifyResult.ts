export type AbstractifyResult<TypeToUse extends string, DataToUse> = Readonly<{
	type: TypeToUse;
	data: DataToUse;
}>;
