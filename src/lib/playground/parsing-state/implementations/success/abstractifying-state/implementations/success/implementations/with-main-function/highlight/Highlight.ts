import type {AbstractSyntaxTreeNode} from "../../../../../../../../../../belve/abstract-syntax-tree-node/AbstractSyntaxTreeNode.ts";
import type {Variables} from "../../../../../../../../../../belve/variables/Variables.ts";
export abstract class Highlight<TypeName extends string> {
	public constructor(
		availables: Variables,
		node: AbstractSyntaxTreeNode<unknown>,
		typeName: TypeName,
	) {
		this.availables = availables;
		this.node = node;
		this.typeName = typeName;
	}
	public readonly availables: Variables;
	public readonly node: AbstractSyntaxTreeNode<unknown>;
	public readonly typeName: TypeName;
}
