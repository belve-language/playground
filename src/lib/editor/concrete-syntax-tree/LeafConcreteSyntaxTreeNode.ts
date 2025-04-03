import type {ConcreteSyntaxTreeNode} from "./ConcreteSyntaxTreeNode.ts";
import type {LeafConcreteSyntaxTreeNodeData} from "./LeafConcreteSyntaxTreeNodeData.ts";
export type LeafConcreteSyntaxTreeNode<
	TypeNameToUse extends string,
	CharacterToUse extends string,
> = ConcreteSyntaxTreeNode<
	TypeNameToUse,
	"leaf",
	LeafConcreteSyntaxTreeNodeData<CharacterToUse>
>;
