import type {Index} from "../index/Index.ts";
import type {LeafConcreteSyntaxTreeNode} from "./LeafConcreteSyntaxTreeNode.ts";
export function createLeafConcreteSyntaxTreeNode<
	TypeNameToUse extends string,
	CharacterToUse extends string,
>(
	typeName: TypeNameToUse,
	data,
): LeafConcreteSyntaxTreeNode<TypeNameToUse, CharacterToUse> {
	return {typeName, data: {character, index}, kind: "leaf"} as const;
}
