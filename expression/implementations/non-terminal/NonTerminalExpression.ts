import type {ParsingTable} from "../../../ParsingTable.ts";
import type {ParsingTableRow} from "../../../ParsingTableRow.ts";
import type {RuleRightExpressions} from "../../../RuleRightExpressions.ts";
import type {Rules} from "../../../Rules.ts";
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
		rules: Rules,
	): boolean {
		if (this.nonTerminal === nonTerminal) {
			return true;
		} else if (alreadyCheckedNonTerminals.has(this.nonTerminal)) {
			return false;
		} else {
			return (rules[this.nonTerminal] as RuleRightExpressions).some(
				(rightExpression) => {
					return rightExpression.checkIfGivenNonTerminalCanBeFinalInThisExpression(
						alreadyCheckedNonTerminals.union(
							new Set<string>([this.nonTerminal]),
						),
						nonTerminal,
						rules,
					);
				},
			);
		}
	}
	public override checkIfThisExpressionCanBeEmpty(
		alreadyCheckedNonTerminals: ReadonlySet<string>,
		rules: Rules,
	): boolean {
		if (alreadyCheckedNonTerminals.has(this.nonTerminal)) {
			return false;
		} else {
			return (rules[this.nonTerminal] as RuleRightExpressions).some(
				(rightExpression) => {
					return rightExpression.checkIfThisExpressionCanBeEmpty(
						alreadyCheckedNonTerminals.union(
							new Set<string>([this.nonTerminal]),
						),
						rules,
					);
				},
			);
		}
	}
	public override computePossibleFirstingTerminalsOfThisExpression(
		alreadyCheckedNonTerminals: ReadonlySet<string>,
		rules: Rules,
	): ReadonlySet<string> {
		if (alreadyCheckedNonTerminals.has(this.nonTerminal)) {
			return new Set<string>();
		} else {
			const possibleFirstingTerminalsOfThisExpression = new Set<string>(
				(rules[this.nonTerminal] as RuleRightExpressions).flatMap(
					(rightExpression) => {
						return Array.from(
							rightExpression.computePossibleFirstingTerminalsOfThisExpression(
								alreadyCheckedNonTerminals.union(
									new Set<string>([this.nonTerminal]),
								),
								rules,
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
		rules: Rules,
	): ReadonlySet<string> {
		if (alreadyCheckedNonTerminals.has(this.nonTerminal)) {
			return new Set<string>();
		} else {
			const possibleFollowingTerminalsOfGivenNonTerminalInThisExpression =
				new Set<string>(
					(rules[this.nonTerminal] as RuleRightExpressions).flatMap(
						(rightExpression) => {
							return Array.from(
								rightExpression.computePossibleFollowingTerminalsOfGivenNonTerminalInThisExpression(
									alreadyCheckedNonTerminals.union(
										new Set<string>([this.nonTerminal]),
									),
									nonTerminal,
									rules,
								),
							);
						},
					),
				);
			return possibleFollowingTerminalsOfGivenNonTerminalInThisExpression;
		}
	}
	public override computeStackItems(): readonly StackItem[] {
		return [this];
	}
	public override computeUniqueUsedNonTerminalsInThisExpression(
		alreadyCheckedNonTerminals: ReadonlySet<string>,
		rules: Rules,
	): ReadonlySet<string> {
		if (alreadyCheckedNonTerminals.has(this.nonTerminal)) {
			return new Set<string>();
		} else {
			const rule = rules[this.nonTerminal];
			if (rule === undefined) {
				return new Set<string>([this.nonTerminal]);
			} else {
				const uniqueUsedNonTerminalsInThisExpression = new Set<string>(
					(rules[this.nonTerminal] as RuleRightExpressions).flatMap(
						(rightExpression) => {
							return Array.from(
								rightExpression.computeUniqueUsedNonTerminalsInThisExpression(
									alreadyCheckedNonTerminals.union(
										new Set<string>([this.nonTerminal]),
									),
									rules,
								),
							);
						},
					),
				).union(new Set<string>([this.nonTerminal]));
				return uniqueUsedNonTerminalsInThisExpression;
			}
		}
	}
	public finalizeParsing(
		parsingTable: ParsingTable,
		stack: readonly StackItem[],
	): void {
		const newStackItems = (
			parsingTable.rows[this.nonTerminal] as ParsingTableRow
		).finalization;
		if (newStackItems === null) {
			throw new Error(`Parsing failed: unexpected end of input`);
		} else {
			const newStack = [...newStackItems, ...stack];
			const [firstNewStackItem, ...restNewStackItems] = newStack;
			if (firstNewStackItem === undefined) {
				return;
			} else {
				firstNewStackItem.finalizeParsing(parsingTable, restNewStackItems);
			}
		}
	}
	public readonly nonTerminal: string;
	public parse(
		charactersLeft: readonly [string, ...(readonly string[])],
		index: number,
		parsingTable: ParsingTable,
		stack: readonly StackItem[],
	): void {
		const [firstCharacter, ...restCharacters] = charactersLeft;
		const row = parsingTable.rows[this.nonTerminal] as ParsingTableRow;
		const newStackItems = row.terminals[firstCharacter];
		if (newStackItems === undefined) {
			throw new Error(
				`Parsing failed: Unexpected character ${JSON.stringify(firstCharacter)} at index ${index.toString()}`,
			);
		} else {
			const newStack = [...newStackItems, ...stack];
			const [firstNewStackItem, ...restNewStackItems] = newStack;
			if (firstNewStackItem === undefined) {
				throw new Error(
					`Parsing failed: Unexpected character ${JSON.stringify(firstCharacter)} at index ${index.toString()}`,
				);
			} else {
				firstNewStackItem.parse(
					[firstCharacter, ...restCharacters],
					index,
					parsingTable,
					restNewStackItems,
				);
			}
		}
	}
}
