import type {Atom} from "../atom/Atom.ts";
import type {ConcreteSyntaxTreeNode} from "../concrete-syntax-tree-node/ConcreteSyntaxTreeNode.ts";
import type {Rule} from "../rule/Rule.ts";
export class GrammarIteratingResult {
	public constructor(
		depth: number,
		rule: Rule<Atom, ConcreteSyntaxTreeNode<Atom>>,
	) {
		this.depth = depth;
		this.rule = rule;
	}
	public readonly depth: number;
	public readonly rule: Rule<Atom, ConcreteSyntaxTreeNode<Atom>>;
}
