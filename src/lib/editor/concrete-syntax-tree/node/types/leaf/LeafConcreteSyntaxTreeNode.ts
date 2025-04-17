import type {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
import type {LeafConcreteSyntaxTreeNodeData} from "./data/LeafConcreteSyntaxTreeNodeData.ts";
import type {leafConcreteSyntaxTreeNodeTypeName} from "./type-name/leafConcreteSyntaxTreeNodeTypeName.ts";
export type LeafConcreteSyntaxTreeNode<
	KindNameToUse extends string,
	CharacterToUse extends string,
> = ConcreteSyntaxTreeNode<
	typeof leafConcreteSyntaxTreeNodeTypeName,
	KindNameToUse,
	LeafConcreteSyntaxTreeNodeData<CharacterToUse>
>;
