import type {Atom} from "../atom/Atom.ts";
import type {Character} from "../character/Character.ts";
import type {ConcreteSyntaxTreeNode} from "../concrete-syntax-tree-node/ConcreteSyntaxTreeNode.ts";
import type {Grammar} from "../grammar/Grammar.ts";
import {computeParsingTable} from "./computing-parsing-table/computeParsingTable.ts";
import {ExtraCharactersParsingResult} from "../parsing-result/implementations/extra-characters/ExtraCharactersParsingResult.ts";
import {SuccessParsingResult} from "../parsing-result/implementations/success/SuccessParsingResult.ts";
import {UnexpectedCharacterParsingResult} from "../parsing-result/implementations/unexpected-character/UnexpectedCharacterParsingResult.ts";
import {UnexpectedFinalizingParsingResult} from "../parsing-result/implementations/unexpected-finalizing/UnexpectedFinalizingParsingResult.ts";
import type {SupportedParsingResult} from "../parsing-result/supported/SupportedParsingResult.ts";
import type {ParsingTable} from "../parsing-table/ParsingTable.ts";
import {successRuleFinalizingParsingResultTypeName} from "../rule-finalizing-parsing-result/implementations/success/type-name/successRuleFinalizingParsingResultTypeName.ts";
import {unexpectedFinalizingRuleFinalizingParsingResultTypeName} from "../rule-finalizing-parsing-result/implementations/unexpected-finalizing/type-name/unexpectedFinalizingRuleFinalizingParsingResultTypeName.ts";
import {successRuleParsingResultTypeName} from "../rule-parsing-result/implementations/success/type-name/successRuleParsingResultTypeName.ts";
import {unexpectedCharacterRuleParsingResultTypeName} from "../rule-parsing-result/implementations/unexpected-character/type-name/unexpectedCharacterRuleParsingResultTypeName.ts";
import {unexpectedFinalizingRuleParsingResultTypeName} from "../rule-parsing-result/implementations/unexpected-finalizing/type-name/unexpectedFinalizingRuleParsingResultTypeName.ts";
export class Parser<StartingRuleNode extends ConcreteSyntaxTreeNode<Atom>> {
	public static create<StartingRuleNode extends ConcreteSyntaxTreeNode<Atom>>(
		grammar: Grammar<StartingRuleNode>,
	): Parser<StartingRuleNode> {
		const parsingTable = computeParsingTable(grammar);
		const parser = new Parser<StartingRuleNode>(grammar, parsingTable);
		return parser;
	}
	private constructor(
		grammar: Grammar<StartingRuleNode>,
		parsingTable: ParsingTable,
	) {
		this.grammar = grammar;
		this.parsingTable = parsingTable;
	}
	public readonly grammar: Grammar<StartingRuleNode>;
	public parse(
		characters: readonly Character[],
	): SupportedParsingResult<StartingRuleNode> {
		const [firstCharacter, ...restCharacters] = characters;
		if (firstCharacter === undefined) {
			const startingRuleFinalizingParsingResult =
				this.grammar.startingRule.finalizeParsing(
					this.grammar,
					0,
					this.parsingTable,
				);
			switch (startingRuleFinalizingParsingResult.typeName) {
				case successRuleFinalizingParsingResultTypeName: {
					const parserParsingResult: SuccessParsingResult<StartingRuleNode> =
						new SuccessParsingResult<StartingRuleNode>(
							startingRuleFinalizingParsingResult.node,
						);
					return parserParsingResult;
				}
				case unexpectedFinalizingRuleFinalizingParsingResultTypeName: {
					const parserParsingResult: UnexpectedFinalizingParsingResult =
						new UnexpectedFinalizingParsingResult();
					return parserParsingResult;
				}
			}
		} else {
			const startingRuleParsingResult = this.grammar.startingRule.parse(
				this.grammar,
				0,
				this.parsingTable,
				[firstCharacter, ...restCharacters],
			);
			switch (startingRuleParsingResult.typeName) {
				case successRuleParsingResultTypeName: {
					if (startingRuleParsingResult.remainingCharacters.length === 0) {
						const parserParsingResult: SuccessParsingResult<StartingRuleNode> =
							new SuccessParsingResult<StartingRuleNode>(
								startingRuleParsingResult.node,
							);
						return parserParsingResult;
					} else {
						const parserParsingResult: ExtraCharactersParsingResult =
							new ExtraCharactersParsingResult();
						return parserParsingResult;
					}
				}
				case unexpectedCharacterRuleParsingResultTypeName: {
					const parserParsingResult: UnexpectedCharacterParsingResult =
						new UnexpectedCharacterParsingResult(
							startingRuleParsingResult.index,
						);
					return parserParsingResult;
				}
				case unexpectedFinalizingRuleParsingResultTypeName: {
					const parserParsingResult: UnexpectedFinalizingParsingResult =
						new UnexpectedFinalizingParsingResult();
					return parserParsingResult;
				}
			}
		}
	}
	public readonly parsingTable: ParsingTable;
}
