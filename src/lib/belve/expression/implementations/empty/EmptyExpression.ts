import type {Atom} from "../../../atom/Atom.ts";
import {EmptyAtom} from "../../../atom/implementations/empty/EmptyAtom.ts";
import type {Character} from "../../../character/Character.ts";
import type {ConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/ConcreteSyntaxTreeNode.ts";
import {SuccessExpressionFinalizingParsingResult} from "../../../expression-finalizing-parsing-result/implementations/success/SuccessExpressionFinalizingParsingResult.ts";
import {SuccessExpressionParsingResult} from "../../../expression-parsing-result/implementations/success/SuccessExpressionParsingResult.ts";
import type {Grammar} from "../../../grammar/Grammar.ts";
import type {Index} from "../../../index/Index.ts";
import type {ParsingTable} from "../../../parsing-table/ParsingTable.ts";
import type {Rule} from "../../../rule/Rule.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {Expression} from "../../Expression.ts";
export class EmptyExpression extends Expression<EmptyAtom> {
	public constructor() {
		super();
	}
	public override checkIfCanBeEmpty(
		alreadyCheckedRules: ReadonlySet<Rule<Atom, ConcreteSyntaxTreeNode<Atom>>>,
		ruleById: RuleById,
	): true {
		return true;
	}
	public override checkIfRuleCanBeFinal(
		alreadyCheckedRules: ReadonlySet<Rule<Atom, ConcreteSyntaxTreeNode<Atom>>>,
		rule: Rule<Atom, ConcreteSyntaxTreeNode<Atom>>,
		ruleById: RuleById,
	): false {
		return false;
	}
	public override computePossibleFirstingTerminals(
		alreadyCheckedRules: ReadonlySet<Rule<Atom, ConcreteSyntaxTreeNode<Atom>>>,
		ruleById: RuleById,
	): ReadonlySet<string> {
		const possibleFirstingTerminals: ReadonlySet<never> = new Set<never>();
		return possibleFirstingTerminals;
	}
	public override computePossibleFollowingTerminals(
		alreadyCheckedRules: ReadonlySet<Rule<Atom, ConcreteSyntaxTreeNode<Atom>>>,
		rule: Rule<Atom, ConcreteSyntaxTreeNode<Atom>>,
		ruleById: RuleById,
	): ReadonlySet<string> {
		const possibleFollowingTerminals: ReadonlySet<never> = new Set<never>();
		return possibleFollowingTerminals;
	}
	public override finalizeParsing(
		grammar: Grammar<ConcreteSyntaxTreeNode<Atom>>,
		index: Index,
		parsingTable: ParsingTable,
	): SuccessExpressionFinalizingParsingResult<EmptyAtom> {
		const atom = new EmptyAtom(new SpanIndexes(index, index));
		const finalizingParsingResult: SuccessExpressionFinalizingParsingResult<EmptyAtom> =
			new SuccessExpressionFinalizingParsingResult<EmptyAtom>(atom);
		return finalizingParsingResult;
	}
	public override *iterateWithDepth(
		alreadyVisitedRules: ReadonlySet<Rule<Atom, ConcreteSyntaxTreeNode<Atom>>>,
		depth: number,
		ruleById: RuleById,
	): Generator<never, void, void> {}
	public override parse(
		grammar: Grammar<ConcreteSyntaxTreeNode<Atom>>,
		index: number,
		parsingTable: ParsingTable,
		remainingCharacters: readonly [Character, ...(readonly Character[])],
	): SuccessExpressionParsingResult<EmptyAtom> {
		const atom: EmptyAtom = new EmptyAtom(new SpanIndexes(index, index));
		const expressionParsingResult: SuccessExpressionParsingResult<EmptyAtom> =
			new SuccessExpressionParsingResult<EmptyAtom>(
				atom,
				index,
				remainingCharacters,
			);
		return expressionParsingResult;
	}
	public override stringifyToBackusNaurForm(): readonly ['""'] {
		const stringifiedExpression: readonly ['""'] = ['""'];
		return stringifiedExpression;
	}
}
