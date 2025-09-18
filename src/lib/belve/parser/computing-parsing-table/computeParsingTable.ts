import type {Atom} from "../../atom/Atom.ts";
import type {ConcreteSyntaxTreeNode} from "../../concrete-syntax-tree-node/ConcreteSyntaxTreeNode.ts";
import type {Grammar} from "../../grammar/Grammar.ts";
import type {ParsingTable} from "../../parsing-table/ParsingTable.ts";
import {ParsingTableRow} from "../../parsing-table/row/ParsingTableRow.ts";
import type {Rule} from "../../rule/Rule.ts";
import type {RuleById} from "../../rule-by-id/RuleById.ts";
export function computeParsingTable(
	grammar: Grammar<ConcreteSyntaxTreeNode<Atom>>,
): ParsingTable {
	const parsingTable: ParsingTable = new Map<
		Rule<Atom, ConcreteSyntaxTreeNode<Atom>>,
		ParsingTableRow<Atom>
	>(
		Object.values(grammar.ruleById).map(
			(
				rule: RuleById[keyof RuleById],
			): readonly [
				Rule<Atom, ConcreteSyntaxTreeNode<Atom>>,
				ParsingTableRow<Atom>,
			] => {
				const row: ParsingTableRow<Atom> = ParsingTableRow.create<Atom>(
					grammar,
					rule,
				);
				return [rule, row];
			},
		),
	);
	return parsingTable;
}
