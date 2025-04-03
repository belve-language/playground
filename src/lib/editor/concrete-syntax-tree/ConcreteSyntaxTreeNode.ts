import type {ConcreteSyntaxTreeNodeKind} from "./ConcreteSyntaxTreeNodeKind.ts";
export type ConcreteSyntaxTreeNode<
	TypeNameToUse extends string,
	KindToUse extends ConcreteSyntaxTreeNodeKind,
	DataToUse,
> = Readonly<{typeName: TypeNameToUse; kind: KindToUse; data: DataToUse}>;
