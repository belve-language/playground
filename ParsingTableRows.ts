import type {ParsingTableRow} from "./ParsingTableRow.ts";
export type ParsingTableRows = {
	readonly [nonTerminal: string]: ParsingTableRow;
};
