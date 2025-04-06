export type AbstractSyntaxTreeNode<
	KindNameToUse extends string,
	TypeNameToUse extends string,
	DataToUse,
> = Readonly<{
	kindName: KindNameToUse;
	data: DataToUse;
	typeName: TypeNameToUse;
}>;
