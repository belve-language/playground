import type {FollowSet} from "./FollowSet.ts";
import type {Rule} from "./Rule.ts";
import type {RuleById} from "./run.ts";
export class Grammar {
	public constructor(ruleById: RuleById, startingRule: Rule) {
		this.ruleById = ruleById;
		this.startingRule = startingRule;
	}
	private checkIfRuleCanBeFinal(rule: Rule): boolean {
		if (rule === this.startingRule) {
			return true;
		} else {
			return this.startingRule.checkIfRuleCanBeFinalInThisRule(
				new Set<Rule>(),
				rule,
				this.ruleById,
			);
		}
	}
	public computeFollowSetOfRule(rule: Rule): FollowSet {
		const followSet: FollowSet = {
			canBeFinal: this.checkIfRuleCanBeFinal(rule),
			terminals: this.computePossibleFollowingTerminalsOfGivenRule(rule),
		};
		return followSet;
	}
	private computePossibleFollowingTerminalsOfGivenRule(
		rule: Rule,
	): ReadonlySet<string> {
		if (rule === this.startingRule) {
			return new Set<string>();
		} else {
			const possibleFollowingTerminalsOfGivenRule =
				this.startingRule.computePossibleFollowingTerminalsOfGivenRuleInThisRule(
					new Set<Rule>(),
					rule,
					this.ruleById,
				);
			return possibleFollowingTerminalsOfGivenRule;
		}
	}
	public readonly ruleById: RuleById;
	public readonly startingRule: Rule;
}
