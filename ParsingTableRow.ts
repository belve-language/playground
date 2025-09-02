import type {Grammar} from "./Grammar.ts";
import type {Rule} from "./Rule.ts";
import type {Expression} from "./expression/Expression.ts";
export class ParsingTableRow {
	public static create(grammar: Grammar, rule: Rule): ParsingTableRow {
		let terminals: {readonly [terminal: string]: Expression<string>} = {};
		let finalization: Expression<string> | null = null;
		const rightExpressions = rule.getRightExpressions(grammar.ruleById);
		for (const rightExpression of rightExpressions) {
			const firstSet = rightExpression.computeFirstSet(grammar.ruleById);
			for (const terminal of firstSet.terminals) {
				if (terminals[terminal] === undefined) {
					terminals = {...terminals, [terminal]: rightExpression};
				} else {
					throw new Error(
						`Grammar is not LL(1): Rule "${rule}" has multiple right expressions that can start with terminal "${terminal}"`,
					);
				}
			}
			if (firstSet.canBeEmpty) {
				const followSet = grammar.computeFollowSetOfRule(rule);
				for (const terminal of followSet.terminals) {
					if (terminals[terminal] === undefined) {
						terminals = {...terminals, [terminal]: rightExpression};
					} else if (terminals[terminal] !== rightExpression) {
						throw new Error(
							`Grammar is not LL(1): Rule "${rule}" can be empty so following terminals have been checked an an ambiguity has been detected for terminal "${terminal}":
- ${JSON.stringify(terminals[terminal])} from ?
- ${JSON.stringify(rightExpression)} from ${JSON.stringify(rightExpression)}`,
						);
					}
				}
				if (followSet.canBeFinal) {
					if (finalization === null) {
						finalization = rightExpression;
					} else if (finalization !== rightExpression) {
						throw new Error(
							`Grammar is not LL(1): Rule "${rule}" has multiple right expressions that can be empty:
- ${JSON.stringify(finalization)} from ?
- ${JSON.stringify(rightExpression)} from ${JSON.stringify(rightExpression)}`,
						);
					}
				}
			}
		}
		const row = new ParsingTableRow(terminals, finalization);
		return row;
	}
	private constructor(
		terminals: {readonly [terminal: string]: Expression<string>},
		finalization: Expression<string> | null,
	) {
		this.terminals = terminals;
		this.finalization = finalization;
	}
	public readonly finalization: Expression<string> | null;
	public readonly terminals: {readonly [terminal: string]: Expression<string>};
}
