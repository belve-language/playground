import type {Atom} from "../../belve/atom/Atom.ts";
import type {ConcreteSyntaxTreeNode} from "../../belve/concrete-syntax-tree-node/ConcreteSyntaxTreeNode.ts";
import type {Rule} from "../../belve/rule/Rule.ts";
export function checkIfRuleIsInteresting(
	rule: Rule<Atom, ConcreteSyntaxTreeNode<Atom>>,
): boolean {
	const isRuleInteresting =
		rule.name === "opcjonalny kod źródłowy" /* optional source code */
		|| (!rule.name.startsWith("znak ")
			&& !rule.name.startsWith("segmenty ")
			&& !rule.name.startsWith("opcjonaln")
			&& !rule.name.startsWith("zaczyn")
			&& !rule.name.includes("nieznan"));
	return isRuleInteresting;
}
