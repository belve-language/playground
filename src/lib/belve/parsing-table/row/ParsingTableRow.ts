import type {Atom} from "../../atom/Atom.ts";
import type {ConcreteSyntaxTreeNode} from "../../concrete-syntax-tree-node/ConcreteSyntaxTreeNode.ts";
import type {Expression} from "../../expression/Expression.ts";
import type {Grammar} from "../../grammar/Grammar.ts";
import type {Rule} from "../../rule/Rule.ts";
export class ParsingTableRow<AtomToUse extends Atom> {
	public static create<AtomToUse extends Atom>(
		grammar: Grammar<ConcreteSyntaxTreeNode<Atom>>,
		rule: Rule<AtomToUse, ConcreteSyntaxTreeNode<AtomToUse>>,
	): ParsingTableRow<AtomToUse> {
		let terminals: {readonly [terminal: string]: Expression<AtomToUse>} = {};
		let finalization: Expression<AtomToUse> | null = null;
		const rightExpressions = rule.getRightExpressions(grammar.ruleById);
		const followSet = grammar.computeRuleFollowSet(rule);
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
		const row = new this<AtomToUse>(terminals, finalization);
		return row;
	}
	private constructor(
		terminals: {readonly [terminal: string]: Expression<AtomToUse>},
		finalization: Expression<AtomToUse> | null,
	) {
		this.finalization = finalization;
		this.terminals = terminals;
	}
	public readonly finalization: Expression<AtomToUse> | null;
	public readonly terminals: {
		readonly [terminal: string]: Expression<AtomToUse>;
	};
}
