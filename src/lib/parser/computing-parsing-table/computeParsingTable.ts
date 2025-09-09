import type {Atom} from "../../atom/Atom.ts";
import type {ConcreteSyntaxTreeNode} from "../../concrete-syntax-tree-node/ConcreteSyntaxTreeNode.ts";
import type {Grammar} from "../../grammar/Grammar.ts";
import type {ParsingTable} from "../../parsing-table/ParsingTable.ts";
import {ParsingTableRow} from "../../parsing-table/row/ParsingTableRow.ts";
import type {Rule} from "../../rule/Rule.ts";
export function computeParsingTable(
	grammar: Grammar<ConcreteSyntaxTreeNode<Atom>>,
): ParsingTable {
	const parsingTable: ParsingTable = new Map<
		Rule<ConcreteSyntaxTreeNode<Atom>>,
		ParsingTableRow<Atom>
	>(
		Object.values(grammar.ruleById).map((rule) => {
			return [rule, ParsingTableRow.create(grammar, rule)];
		}),
	);
	return parsingTable;
}
