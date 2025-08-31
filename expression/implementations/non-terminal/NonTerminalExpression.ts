import type {Rule} from "../../../Rule.ts";
import type {RuleByNonTerminal} from "../../../RuleByNonTerminal.ts";
import type {StackItem} from "../../../stack-item/StackItem.ts";
import {Expression} from "../../Expression.ts";
export class NonTerminalExpression extends Expression<"nonTerminal"> {
	public constructor(nonTerminal: string) {
		super("nonTerminal");
		this.nonTerminal = nonTerminal;
	}
	public override checkIfGivenNonTerminalCanBeFinalInThisExpression(
		alreadyCheckedNonTerminals: ReadonlySet<string>,
		nonTerminal: string,
		ruleByNonTerminal: RuleByNonTerminal,
	): boolean {
		if (this.nonTerminal === nonTerminal) {
			return true;
		} else if (alreadyCheckedNonTerminals.has(this.nonTerminal)) {
			return false;
		} else {
			return (
				ruleByNonTerminal[this.nonTerminal] as Rule
			).rightExpressions.some((rightExpression) => {
				return rightExpression.checkIfGivenNonTerminalCanBeFinalInThisExpression(
					alreadyCheckedNonTerminals.union(new Set<string>([this.nonTerminal])),
					nonTerminal,
					ruleByNonTerminal,
				);
			});
		}
	}
	public override checkIfThisExpressionCanBeEmpty(
		alreadyCheckedNonTerminals: ReadonlySet<string>,
		ruleByNonTerminal: RuleByNonTerminal,
	): boolean {
		if (alreadyCheckedNonTerminals.has(this.nonTerminal)) {
			return false;
		} else {
			return (
				ruleByNonTerminal[this.nonTerminal] as Rule
			).rightExpressions.some((rightExpression) => {
				return rightExpression.checkIfThisExpressionCanBeEmpty(
					alreadyCheckedNonTerminals.union(new Set<string>([this.nonTerminal])),
					ruleByNonTerminal,
				);
			});
		}
	}
	public override computePossibleFirstingTerminalsOfThisExpression(
		alreadyCheckedNonTerminals: ReadonlySet<string>,
		ruleByNonTerminal: RuleByNonTerminal,
	): ReadonlySet<string> {
		if (alreadyCheckedNonTerminals.has(this.nonTerminal)) {
			return new Set<string>();
		} else {
			const possibleFirstingTerminalsOfThisExpression = new Set<string>(
				(ruleByNonTerminal[this.nonTerminal] as Rule).rightExpressions.flatMap(
					(rightExpression) => {
						return Array.from(
							rightExpression.computePossibleFirstingTerminalsOfThisExpression(
								alreadyCheckedNonTerminals.union(
									new Set<string>([this.nonTerminal]),
								),
								ruleByNonTerminal,
							),
						);
					},
				),
			);
			return possibleFirstingTerminalsOfThisExpression;
		}
	}
	public override computePossibleFollowingTerminalsOfGivenNonTerminalInThisExpression(
		alreadyCheckedNonTerminals: ReadonlySet<string>,
		nonTerminal: string,
		ruleByNonTerminal: RuleByNonTerminal,
	): ReadonlySet<string> {
		if (alreadyCheckedNonTerminals.has(this.nonTerminal)) {
			return new Set<string>();
		} else {
			const possibleFollowingTerminalsOfGivenNonTerminalInThisExpression =
				new Set<string>(
					(
						ruleByNonTerminal[this.nonTerminal] as Rule
					).rightExpressions.flatMap((rightExpression) => {
						return Array.from(
							rightExpression.computePossibleFollowingTerminalsOfGivenNonTerminalInThisExpression(
								alreadyCheckedNonTerminals.union(
									new Set<string>([this.nonTerminal]),
								),
								nonTerminal,
								ruleByNonTerminal,
							),
						);
					}),
				);
			return possibleFollowingTerminalsOfGivenNonTerminalInThisExpression;
		}
	}
	public override computeStackItems(): readonly StackItem[] {
		return [this];
	}
	public override computeUniqueUsedNonTerminalsInThisExpression(
		alreadyCheckedNonTerminals: ReadonlySet<string>,
		ruleByNonTerminal: RuleByNonTerminal,
	): ReadonlySet<string> {
		if (alreadyCheckedNonTerminals.has(this.nonTerminal)) {
			return new Set<string>();
		} else {
			const rule = ruleByNonTerminal[this.nonTerminal];
			if (rule === undefined) {
				return new Set<string>([this.nonTerminal]);
			} else {
				const uniqueUsedNonTerminalsInThisExpression = new Set<string>(
					(
						ruleByNonTerminal[this.nonTerminal] as Rule
					).rightExpressions.flatMap((rightExpression) => {
						return Array.from(
							rightExpression.computeUniqueUsedNonTerminalsInThisExpression(
								alreadyCheckedNonTerminals.union(
									new Set<string>([this.nonTerminal]),
								),
								ruleByNonTerminal,
							),
						);
					}),
				).union(new Set<string>([this.nonTerminal]));
				return uniqueUsedNonTerminalsInThisExpression;
			}
		}
	}
	public readonly nonTerminal: string;
}
