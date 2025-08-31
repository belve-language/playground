import type {Grammar} from "./Grammar.ts";
import type {Rule} from "./Rule.ts";
import type {StackItem} from "./stack-item/StackItem.ts";
export class ParsingTableRow {
	private constructor(
		terminals: {readonly [terminal: string]: readonly StackItem[]},
		finalization: null | readonly StackItem[],
	) {
		this.terminals = terminals;
		this.finalization = finalization;
	}
	public static create(grammar: Grammar, rule: Rule): ParsingTableRow {
		let terminals: {readonly [terminal: string]: readonly StackItem[]} = {};
		let finalization: null | readonly StackItem[] = null;
		for (const rightExpression of rule.rightExpressions) {
			const firstSet = rightExpression.computeFirstSet(grammar.rules);
			const stackItems = rightExpression.computeStackItems();
			for (const terminal of firstSet.terminals) {
				if (terminals[terminal] === undefined) {
					terminals = {...terminals, [terminal]: stackItems};
				} else {
					throw new Error(
						`Grammar is not LL(1): Non-terminal "${rule.leftNonTerminal}" has multiple right expressions that can start with terminal "${terminal}"`,
					);
				}
			}
			if (firstSet.canBeEmpty) {
				const followSet = grammar.computeFollowSetOfNonTerminal(
					rule.leftNonTerminal,
				);
				for (const terminal of followSet.terminals) {
					if (terminals[terminal] === undefined) {
						terminals = {...terminals, [terminal]: stackItems};
					} else if (terminals[terminal] !== stackItems) {
						throw new Error(
							`Grammar is not LL(1): Non-terminal "${rule.leftNonTerminal}" can be empty so following terminals have been checked an an ambiguity has been detected for terminal "${terminal}":
- ${JSON.stringify(terminals[terminal])} from ?
- ${JSON.stringify(stackItems)} from ${JSON.stringify(rightExpression)}`,
						);
					}
				}
				if (followSet.canBeFinal) {
					if (finalization === null) {
						finalization = stackItems;
					} else if (finalization !== stackItems) {
						throw new Error(
							`Grammar is not LL(1): Non-terminal "${rule.leftNonTerminal}" has multiple right expressions that can be empty:
- ${JSON.stringify(finalization)} from ?
- ${JSON.stringify(stackItems)} from ${JSON.stringify(rightExpression)}`,
						);
					}
				}
			}
		}
		return new ParsingTableRow(terminals, finalization);
	}
	public readonly finalization: null | readonly StackItem[];
	public readonly terminals: {
		readonly [terminal: string]: readonly StackItem[];
	};
}
