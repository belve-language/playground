import type {Grammar} from "./Grammar.ts";
import {ParsingTableRow} from "./ParsingTableRow.ts";
import type {ParsingTableRows} from "./ParsingTableRows.ts";
import type {Rule} from "./Rule.ts";
export class ParsingTable {
	private constructor(rows: ParsingTableRows) {
		this.rows = rows;
	}
	public static create(grammar: Grammar): ParsingTable {
		const rows: ParsingTableRows = Object.fromEntries(
			Object.entries(grammar.rules).map(
				(entry): readonly [string, ParsingTableRow] => {
					return [
						entry[0],
						ParsingTableRow.create(grammar, {
							leftNonTerminal: entry[0],
							rightExpressions: entry[1],
						} satisfies Rule),
					];
				},
			),
		);
		const table = new ParsingTable(rows);
		return table;
	}
	public readonly rows: ParsingTableRows;
}
