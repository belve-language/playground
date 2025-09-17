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
		alreadyCheckedRules: ReadonlySet<Rule<ConcreteSyntaxTreeNode<Atom>>>,
		ruleById: RuleById,
	): true {
		return true;
	}
	public override checkIfRuleCanBeFinal(
		alreadyCheckedRules: ReadonlySet<Rule<ConcreteSyntaxTreeNode<Atom>>>,
		rule: Rule<ConcreteSyntaxTreeNode<Atom>>,
		ruleById: RuleById,
	): false {
		return false;
	}
	public override computePossibleFirstingTerminals(
		alreadyCheckedRules: ReadonlySet<Rule<ConcreteSyntaxTreeNode<Atom>>>,
		ruleById: RuleById,
	): ReadonlySet<string> {
		const possibleFirstingTerminals: ReadonlySet<string> = new Set<string>();
		return possibleFirstingTerminals;
	}
	public override computePossibleFollowingTerminals(
		alreadyCheckedRules: ReadonlySet<Rule<ConcreteSyntaxTreeNode<Atom>>>,
		rule: Rule<ConcreteSyntaxTreeNode<Atom>>,
		ruleById: RuleById,
	): ReadonlySet<string> {
		const possibleFollowingTerminals: ReadonlySet<string> = new Set<string>();
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
	public override parse(
		grammar: Grammar<ConcreteSyntaxTreeNode<Atom>>,
		index: number,
		parsingTable: ParsingTable,
		remainingCharacters: readonly [Character, ...(readonly Character[])],
	): SuccessExpressionParsingResult<EmptyAtom> {
		const atom: EmptyAtom = new EmptyAtom(new SpanIndexes(index, index));
		const parsingResult: SuccessExpressionParsingResult<EmptyAtom> =
			new SuccessExpressionParsingResult(atom, index, remainingCharacters);
		return parsingResult;
	}
	public override stringifyToBackusNaurForm(): '""' {
		const stringifiedExpression: '""' = '""';
		return stringifiedExpression;
	}
}
