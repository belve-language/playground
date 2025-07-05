import type {Character} from "../../../../character/Character.ts";
import {ConcreteSyntaxTreeNode} from "../ConcreteSyntaxTreeNode.ts";
import type {LeafConcreteSyntaxTreeNodeData} from "./type/LeafConcreteSyntaxTreeNodeData.ts";
export class LeafConcreteSyntaxTreeNode<
	CharacterToUse extends Character,
> extends ConcreteSyntaxTreeNode<
	LeafConcreteSyntaxTreeNodeData<CharacterToUse>
> {
	private constructor(data: LeafConcreteSyntaxTreeNodeData<CharacterToUse>) {
		super(data);
	}
}
