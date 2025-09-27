import type {Atom} from "../../belve/atom/Atom.ts";
import type {ConcreteSyntaxTreeNode} from "../../belve/concrete-syntax-tree-node/ConcreteSyntaxTreeNode.ts";
import type {Rule} from "../../belve/rule/Rule.ts";
export function checkIfRuleIsInteresting(
	rule: Rule<Atom, ConcreteSyntaxTreeNode<Atom>>,
): boolean {
	const isRuleInteresting =
		rule.name === "optional content"
		|| (!rule.name.endsWith(" character")
			&& !rule.name.endsWith(" segments")
			&& !rule.name.startsWith("optional ")
			&& !rule.name.startsWith("starting with ")
			&& !rule.name.startsWith("unknown "));
	return isRuleInteresting;
}
