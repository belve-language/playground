import type {Atom} from "../atom/Atom.ts";
import type {ConcreteSyntaxTreeNode} from "../concrete-syntax-tree-node/ConcreteSyntaxTreeNode.ts";
import type {FollowSet} from "../follow-set/FollowSet.ts";
import type {Rule} from "../rule/Rule.ts";
import type {RuleById} from "../rule-by-id/RuleById.ts";
export class Grammar<StartingRuleNode extends ConcreteSyntaxTreeNode<Atom>> {
	public constructor(
		ruleById: RuleById,
		startingRule: Rule<Atom, StartingRuleNode>,
	) {
		this.ruleById = ruleById;
		this.startingRule = startingRule;
	}
	private checkIfRuleCanBeFinal(
		rule: Rule<Atom, ConcreteSyntaxTreeNode<Atom>>,
	): boolean {
		if (rule === this.startingRule) {
			return true;
		} else {
			return this.startingRule.checkIfRuleCanBeFinal(
				new Set<Rule<Atom, ConcreteSyntaxTreeNode<Atom>>>(),
				rule,
				this.ruleById,
			);
		}
	}
	private computePossibleFollowingTerminals(
		rule: Rule<Atom, ConcreteSyntaxTreeNode<Atom>>,
	): ReadonlySet<string> {
		if (rule === this.startingRule) {
			return new Set<string>();
		} else {
			const possibleFollowingTerminals =
				this.startingRule.computePossibleFollowingTerminals(
					new Set<Rule<Atom, ConcreteSyntaxTreeNode<Atom>>>(),
					rule,
					this.ruleById,
				);
			return possibleFollowingTerminals;
		}
	}
	public computeRuleFollowSet(
		rule: Rule<Atom, ConcreteSyntaxTreeNode<Atom>>,
	): FollowSet {
		const followSet: FollowSet = {
			canBeFinal: this.checkIfRuleCanBeFinal(rule),
			terminals: this.computePossibleFollowingTerminals(rule),
		};
		return followSet;
	}
	public readonly ruleById: RuleById;
	public readonly startingRule: Rule<Atom, StartingRuleNode>;
}
