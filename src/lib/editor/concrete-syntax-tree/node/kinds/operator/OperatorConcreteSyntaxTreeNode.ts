import type {OperatorCharacter} from "../../../characters/operator/OperatorCharacter.ts";
import type {LeafConcreteSyntaxTreeNode} from "../../LeafConcreteSyntaxTreeNode.ts";
import type {operatorConcreteSyntaxTreeNodeKindName} from "./operatorConcreteSyntaxTreeNodeKindName.ts";
export type OperatorConcreteSyntaxTreeNode = LeafConcreteSyntaxTreeNode<
	typeof operatorConcreteSyntaxTreeNodeKindName,
	OperatorCharacter
>;
