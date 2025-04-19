export type AbstractSyntaxTreeNode<
	KindNameToUse extends string,
	TypeNameToUse extends string,
	DataToUse,
> = Readonly<{
	kindName: KindNameToUse;
	typeName: TypeNameToUse;
	data: DataToUse;
}>;
