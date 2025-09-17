import type {ConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/ConcreteSyntaxTreeNode.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {Atom} from "../../Atom.ts";
export class NonTerminalAtom<
	NodeToUse extends ConcreteSyntaxTreeNode<Atom>,
> extends Atom {
	public constructor(node: NodeToUse, spanIndexes: SpanIndexes) {
		super(spanIndexes);
		this.node = node;
	}
	public readonly node: NodeToUse;
}
