import type {OperatorCharacter} from "../../../../characters/operator/OperatorCharacter.ts";
import type {LeafConcreteSyntaxTreeNode} from "../../types/leaf/LeafConcreteSyntaxTreeNode.ts";
import type {operatorConcreteSyntaxTreeNodeKindName} from "./kind-name/operatorConcreteSyntaxTreeNodeKindName.ts";
export type OperatorConcreteSyntaxTreeNode = LeafConcreteSyntaxTreeNode<
	typeof operatorConcreteSyntaxTreeNodeKindName,
	OperatorCharacter
>;
