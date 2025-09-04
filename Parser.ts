import type {Grammar} from "./Grammar.ts";
import {ParsingTableRow} from "./ParsingTableRow.ts";
import type {ParsingTableRows} from "./ParsingTableRows.ts";
import type {Rule} from "./Rule.ts";
import type {ConcreteSyntaxTreeNode} from "./src/lib/concrete-syntax-tree-node/ConcreteSyntaxTreeNode.ts";
import type {BranchConcreteSyntaxTreeNode} from "./src/lib/concrete-syntax-tree-node/implementations/branch/BranchConcreteSyntaxTreeNode.ts";
import type {LeafConcreteSyntaxTreeNode} from "./src/lib/concrete-syntax-tree-node/implementations/leaf/LeafConcreteSyntaxTreeNode.ts";
export class Parser {
	public static create(grammar: Grammar): Parser {
		const parsingTableRows = new Map<Rule, ParsingTableRow>(
			Object.values(grammar.ruleById).map((rule) => {
				return [rule, ParsingTableRow.create(grammar, rule)];
			}),
		);
		const parser = new Parser(grammar, parsingTableRows);
		return parser;
	}
	private constructor(grammar: Grammar, parsingTableRows: ParsingTableRows) {
		this.grammar = grammar;
		this.parsingTableRows = parsingTableRows;
	}
	public readonly grammar: Grammar;
	public parse(
		characters: readonly string[],
	):
		| BranchConcreteSyntaxTreeNode<
				readonly [
					ConcreteSyntaxTreeNode | null,
					...(readonly (ConcreteSyntaxTreeNode | null)[]),
				]
		  >
		| LeafConcreteSyntaxTreeNode<string> {
		const [firstCharacter, ...restCharacters] = characters;
		if (firstCharacter === undefined) {
			const finalizingResult = this.grammar.startingRule.finalizeParsing(
				this.grammar,
				this.parsingTableRows,
			);

			return finalizingResult.node;
		} else {
			const parsingResult = this.grammar.startingRule.parse(
				this.grammar,
				0,
				this.parsingTableRows,
				[firstCharacter, ...restCharacters],
			);
			if (parsingResult.remainingCharacters.length === 0) {
				return parsingResult.node;
			} else {
				throw new Error("Parsing failed: Extra characters remaining");
			}
		}
	}
	public readonly parsingTableRows: ParsingTableRows;
}
