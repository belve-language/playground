export type ConcreteSyntaxTreeNode<
	TypeNameToUse extends string,
	KindNameToUse extends string,
	DataToUse,
> = Readonly<{
	typeName: TypeNameToUse;
	kindName: KindNameToUse;
	data: DataToUse;
}>;
