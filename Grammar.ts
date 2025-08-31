import type {FollowSet} from "./FollowSet.ts";
import {ParsingTable} from "./ParsingTable.ts";
import type {RuleRightExpressions} from "./RuleRightExpressions.ts";
import type {Rules} from "./Rules.ts";
import {NonTerminalExpression} from "./expression/implementations/non-terminal/NonTerminalExpression.ts";
export class Grammar {
	private constructor(rules: Rules, startingNonTerminal: string) {
		this.rules = rules;
		this.startingNonTerminal = startingNonTerminal;
	}
	public checkIfGivenNonTerminalCanBeFinal(nonTerminal: string): boolean {
		if (nonTerminal === this.startingNonTerminal) {
			return true;
		} else {
			return (
				this.rules[this.startingNonTerminal] as RuleRightExpressions
			).some((rightExpression) => {
				return rightExpression.checkIfGivenNonTerminalCanBeFinalInThisExpression(
					new Set<string>(),
					nonTerminal,
					this.rules,
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
				(this.rules[this.startingNonTerminal] as RuleRightExpressions).flatMap(
					(rightExpression) => {
						return Array.from(
							rightExpression.computePossibleFollowingTerminalsOfGivenNonTerminalInThisExpression(
								new Set<string>(),
								nonTerminal,
								this.rules,
							),
						);
					},
				),
			);
			return possibleFollowingTerminalsOfGivenNonTerminal;
		}
	}
	public static create(rules: Rules, startingNonTerminal: string): Grammar {
		if (rules[startingNonTerminal] === undefined) {
			throw new Error(
				`Starting non-terminal "${startingNonTerminal}" is not defined`,
			);
		}
		const usedNonTerminals = new Set<string>(
			(rules[startingNonTerminal] as RuleRightExpressions).flatMap(
				(rightExpression) => {
					return Array.from(
						rightExpression.computeUniqueUsedNonTerminalsInThisExpression(
							new Set<string>(),
							rules,
						),
					);
				},
			),
		).union(new Set<string>([startingNonTerminal]));
		if (usedNonTerminals.size !== Object.keys(rules).length) {
			throw new Error(
				`Not all non-terminals are used: ${[
					...Object.keys(rules).filter((nonTerminal) => {
						return !usedNonTerminals.has(nonTerminal);
					}),
				]}`,
			);
		}
		const notDefinedNonTerminals = [...usedNonTerminals].filter(
			(nonTerminal) => {
				return rules[nonTerminal] === undefined;
			},
		);
		if (notDefinedNonTerminals.length > 0) {
			throw new Error(
				`Some non-terminals are used but not defined: ${notDefinedNonTerminals}`,
			);
		}
		const grammar = new Grammar(rules, startingNonTerminal);
		return grammar;
	}
	public parse(characters: readonly string[]): void {
		const parsingTable = ParsingTable.create(this);
		const startingNonTerminalExpression = new NonTerminalExpression(
			this.startingNonTerminal,
		);
		const [firstCharacter, ...restCharacters] = characters;
		if (firstCharacter === undefined) {
			startingNonTerminalExpression.finalizeParsing(parsingTable, []);
		} else {
			startingNonTerminalExpression.parse(
				[firstCharacter, ...restCharacters],
				0,
				parsingTable,
				[],
			);
		}
	}
	public readonly rules: Rules;
	public readonly startingNonTerminal: string;
}
