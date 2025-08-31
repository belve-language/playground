import type {Grammar} from "./Grammar.ts";
import {ParsingTableRow} from "./ParsingTableRow.ts";
import type {ParsingTableRows} from "./ParsingTableRows.ts";
export class ParsingTable {
	private constructor(rows: ParsingTableRows) {
		this.rows = rows;
	}
	public static create(grammar: Grammar): ParsingTable {
		const rows: ParsingTableRows = Object.fromEntries(
			Object.entries(grammar.ruleByNonTerminal).map(
				([nonTerminal, rule]): readonly [string, ParsingTableRow] => {
					return [nonTerminal, ParsingTableRow.create(grammar, rule)];
				},
			),
		);
		const table = new ParsingTable(rows);
		return table;
	}
	public readonly rows: ParsingTableRows;
}
