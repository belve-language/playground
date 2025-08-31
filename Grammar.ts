import type {FirstSet} from "./FirstSet.ts";
import type {FollowSet} from "./FollowSet.ts";
import type {Rule} from "./Rule.ts";
import type {RuleByNonTerminal} from "./RuleByNonTerminal.ts";
export class Grammar {
	private constructor(
		ruleByNonTerminal: RuleByNonTerminal,
		startingNonTerminal: string,
	) {
		this.ruleByNonTerminal = ruleByNonTerminal;
		this.startingNonTerminal = startingNonTerminal;
	}
	public checkIfGivenNonTerminalCanBeFinal(nonTerminal: string): boolean {
		if (nonTerminal === this.startingNonTerminal) {
			return true;
		} else {
			return (
				this.ruleByNonTerminal[this.startingNonTerminal] as Rule
			).rightExpressions.some((rightExpression) => {
				return rightExpression.checkIfGivenNonTerminalCanBeFinalInThisExpression(
					new Set<string>(),
					nonTerminal,
					this.ruleByNonTerminal,
				);
			});
		}
	}
	public computeFollowSetOfNonTerminal(nonTerminal: string): FollowSet {
		const followSet: FollowSet = {
			canBeFinal: this.checkIfGivenNonTerminalCanBeFinal(nonTerminal),
			terminals:
				this.computePossibleFollowingTerminalsOfGivenNonTerminal(nonTerminal),
		};
		return followSet;
	}
	public computePossibleFollowingTerminalsOfGivenNonTerminal(
		nonTerminal: string,
	): ReadonlySet<string> {
		if (nonTerminal === this.startingNonTerminal) {
			return new Set<string>();
		} else {
			const possibleFollowingTerminalsOfGivenNonTerminal = new Set<string>(
				(
					this.ruleByNonTerminal[this.startingNonTerminal] as Rule
				).rightExpressions.flatMap((rightExpression) => {
					return Array.from(
						rightExpression.computePossibleFollowingTerminalsOfGivenNonTerminalInThisExpression(
							new Set<string>(),
							nonTerminal,
							this.ruleByNonTerminal,
						),
					);
				}),
			);
			return possibleFollowingTerminalsOfGivenNonTerminal;
		}
	}
	public static create(
		rules: readonly Rule[],
		startingNonTerminal: string,
	): Grammar {
		const ruleByNonTerminal: RuleByNonTerminal =
			rules.reduce<RuleByNonTerminal>((accumulatedruleByNonTerminal, rule) => {
				if (accumulatedruleByNonTerminal[rule.leftNonTerminal] === undefined) {
					return {
						...accumulatedruleByNonTerminal,
						[rule.leftNonTerminal]: rule,
					};
				} else {
					throw new Error(
						`Duplicate definition of non-terminal "${rule.leftNonTerminal}"`,
					);
				}
			}, {});
		if (ruleByNonTerminal[startingNonTerminal] === undefined) {
			throw new Error(
				`Starting non-terminal "${startingNonTerminal}" is not defined`,
			);
		}
		const usedNonTerminals = new Set<string>(
			(ruleByNonTerminal[startingNonTerminal] as Rule).rightExpressions.flatMap(
				(rightExpression) => {
					return Array.from(
						rightExpression.computeUniqueUsedNonTerminalsInThisExpression(
							new Set<string>(),
							ruleByNonTerminal,
						),
					);
				},
			),
		).union(new Set<string>([startingNonTerminal]));
		const notDefinedNonTerminals = [...usedNonTerminals].filter(
			(nonTerminal) => {
				return ruleByNonTerminal[nonTerminal] === undefined;
			},
		);
		if (notDefinedNonTerminals.length > 0) {
			throw new Error(
				`Some non-terminals are used but not defined: ${notDefinedNonTerminals}`,
			);
		}
		if (usedNonTerminals.size !== rules.length) {
			throw new Error(
				`Not all non-terminals are used: ${[
					...Object.keys(ruleByNonTerminal).filter((nonTerminal) => {
						return !usedNonTerminals.has(nonTerminal);
					}),
				]}`,
			);
		}
		const grammar = new Grammar(ruleByNonTerminal, startingNonTerminal);
		return grammar;
	}
	public readonly ruleByNonTerminal: RuleByNonTerminal;
	public readonly startingNonTerminal: string;
}
