import type {Grammar} from "./Grammar.ts";
import type {ConcreteSyntaxTreeNode} from "./src/lib/concrete-syntax-tree-node/ConcreteSyntaxTreeNode.ts";
import type {BranchConcreteSyntaxTreeNode} from "./src/lib/concrete-syntax-tree-node/implementations/branch/BranchConcreteSyntaxTreeNode.ts";
import type {LeafConcreteSyntaxTreeNode} from "./src/lib/concrete-syntax-tree-node/implementations/leaf/LeafConcreteSyntaxTreeNode.ts";
export class Parser {
	public constructor(grammar: Grammar) {
		this.grammar = grammar;
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
			);

			return finalizingResult.node;
		} else {
			const parsingResult = this.grammar.startingRule.parse(this.grammar, 0, [
				firstCharacter,
				...restCharacters,
			]);
			if (parsingResult.remainingCharacters.length === 0) {
				return parsingResult.node;
			} else {
				throw new Error("Parsing failed: Extra characters remaining");
			}
		}
	}
}
