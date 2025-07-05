import type {OperatorCharacter} from "../../../../characters/operator/OperatorCharacter.ts";
import type {LeafConcreteSyntaxTreeNode} from "../../leaf/LeafConcreteSyntaxTreeNode.ts";
import type {operatorConcreteSyntaxTreeNodeKindName} from "./kind-name/operatorConcreteSyntaxTreeNodeKindName.ts";
export class OperatorConcreteSyntaxTreeNode extends LeafConcreteSyntaxTreeNode<
	typeof operatorConcreteSyntaxTreeNodeKindName,
	OperatorCharacter
> {}
