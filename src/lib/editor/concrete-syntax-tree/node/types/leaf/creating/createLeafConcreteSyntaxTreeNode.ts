import type {LeafConcreteSyntaxTreeNodeData} from "../data/LeafConcreteSyntaxTreeNodeData.ts";
import type {LeafConcreteSyntaxTreeNode} from "../LeafConcreteSyntaxTreeNode.ts";
import {leafConcreteSyntaxTreeNodeTypeName} from "../type-name/leafConcreteSyntaxTreeNodeTypeName.ts";
export function createLeafConcreteSyntaxTreeNode<
	KindNameToUse extends string,
	CharacterToUse extends string,
>(
	kindName: KindNameToUse,
	data: LeafConcreteSyntaxTreeNodeData<CharacterToUse>,
): LeafConcreteSyntaxTreeNode<KindNameToUse, CharacterToUse> {
	return {kindName, data, typeName: leafConcreteSyntaxTreeNodeTypeName};
}
