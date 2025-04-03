export type AbstractSyntaxTreeNode<
	TypeNameToUse extends string,
	ChildrenToUse,
> = Readonly<{typeName: TypeNameToUse; children: ChildrenToUse}>;
