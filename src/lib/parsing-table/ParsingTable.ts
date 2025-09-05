import type {ParsingTableRow} from "./row/ParsingTableRow.ts";
import type {Rule} from "../grammar/rule/Rule.ts";
export type ParsingTable = ReadonlyMap<Rule, ParsingTableRow>;
