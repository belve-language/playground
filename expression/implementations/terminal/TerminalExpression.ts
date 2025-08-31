import type {ParsingTable} from "../../../ParsingTable.ts";
import type {Rules} from "../../../Rules.ts";
import type {StackItem} from "../../../stack-item/StackItem.ts";
import {Expression} from "../../Expression.ts";
export class TerminalExpression extends Expression<"terminal"> {
	public constructor(terminal: string) {
		super("terminal");
		this.terminal = terminal;
	}
	public override checkIfGivenNonTerminalCanBeFinalInThisExpression(
		alreadyCheckedNonTerminals: ReadonlySet<string>,
		nonTerminal: string,
		rules: Rules,
	): boolean {
		return false;
	}
	public override checkIfThisExpressionCanBeEmpty(
		alreadyCheckedNonTerminals: ReadonlySet<string>,
		rules: Rules,
	): boolean {
		return false;
	}
	public override computePossibleFirstingTerminalsOfThisExpression(
		alreadyCheckedNonTerminals: ReadonlySet<string>,
		rules: Rules,
	): ReadonlySet<string> {
		return new Set<string>([this.terminal]);
	}
	public override computePossibleFollowingTerminalsOfGivenNonTerminalInThisExpression(
		alreadyCheckedNonTerminals: ReadonlySet<string>,
		nonTerminal: string,
		rules: Rules,
	): ReadonlySet<string> {
		return new Set<string>();
	}
	public override computeStackItems(): readonly StackItem[] {
		return [this];
	}
	public override computeUniqueUsedNonTerminalsInThisExpression(
		alreadyCheckedNonTerminals: ReadonlySet<string>,
		rules: Rules,
	): ReadonlySet<string> {
		return new Set<string>();
	}
	public finalizeParsing(
		parsingTable: ParsingTable,
		stack: readonly StackItem[],
	): void {
		throw new Error("Parsing error: Unexpected end of input");
	}
	public parse(
		charactersLeft: readonly [string, ...(readonly string[])],
		index: number,
		parsingTable: ParsingTable,
		stack: readonly StackItem[],
	): void {
		const [firstCharacter, ...restCharacters] = charactersLeft;
		if (firstCharacter === this.terminal) {
			const [firstStackItem, ...restStackItems] = stack;
			const [firstRestCharacter, ...restRestCharacters] = restCharacters;
			if (firstStackItem === undefined) {
				if (firstRestCharacter === undefined) {
					return;
				} else {
					throw new Error(
						`Parsing failed: Unexpected extra characters after index ${index.toString(10)}`,
					);
				}
			} else {
				if (firstRestCharacter === undefined) {
					firstStackItem.finalizeParsing(parsingTable, restStackItems);
					return;
				} else {
					firstStackItem.parse(
						[firstRestCharacter, ...restRestCharacters],
						index + 1,
						parsingTable,
						restStackItems,
					);
					return;
				}
			}
		} else {
			throw new Error(
				`Parsing failed: Unexpected character ${JSON.stringify(firstCharacter)} at index ${index.toString()}, expected ${JSON.stringify(this.terminal)}`,
			);
		}
	}
	public readonly terminal: string;
}
