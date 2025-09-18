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
			const ruleCanBeFinal: true = true;
			return ruleCanBeFinal;
		} else {
			const startingRuleRuleCanBeFinal =
				this.startingRule.checkIfRuleCanBeFinal(
					new Set<Rule<Atom, ConcreteSyntaxTreeNode<Atom>>>(),
					rule,
					this.ruleById,
				);
			const ruleCanBeFinal: boolean = startingRuleRuleCanBeFinal;
			return ruleCanBeFinal;
		}
	}
	private computePossibleFollowingTerminals(
		rule: Rule<Atom, ConcreteSyntaxTreeNode<Atom>>,
	): ReadonlySet<string> {
		if (rule === this.startingRule) {
			const possibleFollowingTerminals: ReadonlySet<never> = new Set<never>();
			return possibleFollowingTerminals;
		} else {
			const startingRulePossibleFollowingTerminals =
				this.startingRule.computePossibleFollowingTerminals(
					new Set<Rule<Atom, ConcreteSyntaxTreeNode<Atom>>>(),
					rule,
					this.ruleById,
				);
			const possibleFollowingTerminals: ReadonlySet<string> =
				startingRulePossibleFollowingTerminals;
			return possibleFollowingTerminals;
		}
	}
	public computeRuleFollowSet(
		rule: Rule<Atom, ConcreteSyntaxTreeNode<Atom>>,
	): FollowSet {
		const followSetRuleCanBeFinal = this.checkIfRuleCanBeFinal(rule);
		const followSetPossibleFollowingTerminals =
			this.computePossibleFollowingTerminals(rule);
		const followSet: FollowSet = {
			canBeFinal: followSetRuleCanBeFinal,
			terminals: followSetPossibleFollowingTerminals,
		};
		return followSet;
	}
	public readonly ruleById: RuleById;
	public readonly startingRule: Rule<Atom, StartingRuleNode>;
}
