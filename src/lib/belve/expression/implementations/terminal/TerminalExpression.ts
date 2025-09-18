import type {Atom} from "../../../atom/Atom.ts";
import {TerminalAtom} from "../../../atom/implementations/terminal/TerminalAtom.ts";
import type {Character} from "../../../character/Character.ts";
import type {ConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/ConcreteSyntaxTreeNode.ts";
import {UnexpectedFinalizingExpressionFinalizingParsingResult} from "../../../expression-finalizing-parsing-result/implementations/unexpected-finalizing/UnexpectedFinalizingExpressionFinalizingParsingResult.ts";
import {SuccessExpressionParsingResult} from "../../../expression-parsing-result/implementations/success/SuccessExpressionParsingResult.ts";
import {UnexpectedCharacterExpressionParsingResult} from "../../../expression-parsing-result/implementations/unexpected-character/UnexpectedCharacterExpressionParsingResult.ts";
import type {Grammar} from "../../../grammar/Grammar.ts";
import type {ParsingTable} from "../../../parsing-table/ParsingTable.ts";
import type {Rule} from "../../../rule/Rule.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {Expression} from "../../Expression.ts";
export class TerminalExpression<
	CharacterToUse extends Character,
> extends Expression<TerminalAtom<CharacterToUse>> {
	public constructor(character: CharacterToUse) {
		super();
		this.character = character;
	}
	public readonly character: CharacterToUse;
	public override checkIfCanBeEmpty(): false {
		return false;
	}
	public override checkIfRuleCanBeFinal(
		alreadyCheckedRules: ReadonlySet<Rule<Atom, ConcreteSyntaxTreeNode<Atom>>>,
		rule: Rule<Atom, ConcreteSyntaxTreeNode<Atom>>,
		ruleById: RuleById,
	): false {
		return false;
	}
	public override computePossibleFirstingTerminals(): ReadonlySet<CharacterToUse> {
		const possibleFirstingTerminals: ReadonlySet<CharacterToUse> =
			new Set<CharacterToUse>([this.character]);
		return possibleFirstingTerminals;
	}
	public override computePossibleFollowingTerminals(
		alreadyCheckedRules: ReadonlySet<Rule<Atom, ConcreteSyntaxTreeNode<Atom>>>,
		rule: Rule<Atom, ConcreteSyntaxTreeNode<Atom>>,
		ruleById: RuleById,
	): ReadonlySet<never> {
		const possibleFollowingTerminals: ReadonlySet<never> = new Set<never>();
		return possibleFollowingTerminals;
	}
	public override finalizeParsing(
		grammar: Grammar<ConcreteSyntaxTreeNode<Atom>>,
		index: number,
		parsingTable: ParsingTable,
	): UnexpectedFinalizingExpressionFinalizingParsingResult {
		const finalizingParsingResult: UnexpectedFinalizingExpressionFinalizingParsingResult =
			new UnexpectedFinalizingExpressionFinalizingParsingResult();
		return finalizingParsingResult;
	}
	public override parse(
		grammar: Grammar<ConcreteSyntaxTreeNode<Atom>>,
		index: number,
		parsingTable: ParsingTable,
		remainingCharacters: readonly [Character, ...(readonly Character[])],
	):
		| SuccessExpressionParsingResult<TerminalAtom<CharacterToUse>>
		| UnexpectedCharacterExpressionParsingResult {
		const [firstRemainingCharacter, ...restRemainingCharacters] =
			remainingCharacters;
		if (firstRemainingCharacter === this.character) {
			const nextIndex = index + 1;
			const atom = new TerminalAtom<CharacterToUse>(
				this.character,
				new SpanIndexes(index, nextIndex),
			);
			const expressionParsingResult: SuccessExpressionParsingResult<
				TerminalAtom<CharacterToUse>
			> = new SuccessExpressionParsingResult<TerminalAtom<CharacterToUse>>(
				atom,
				nextIndex,
				restRemainingCharacters,
			);
			return expressionParsingResult;
		} else {
			const expressionParsingResult: UnexpectedCharacterExpressionParsingResult =
				new UnexpectedCharacterExpressionParsingResult(index);
			return expressionParsingResult;
		}
	}
	public override stringifyToBackusNaurForm(): readonly [`"${string}"`] {
		const stringifiedExpression: readonly [`"${string}"`] = [
			JSON.stringify(this.character) as `"${string}"`,
		];
		return stringifiedExpression;
	}
}
