import type {Atom} from "../atom/Atom.ts";
import type {Character} from "../character/Character.ts";
import type {ConcreteSyntaxTreeNode} from "../concrete-syntax-tree-node/ConcreteSyntaxTreeNode.ts";
import type {SupportedExpressionFinalizingParsingResult} from "../expression-finalizing-parsing-result/supported/SupportedExpressionFinalizingParsingResult.ts";
import type {SupportedExpressionParsingResult} from "../expression-parsing-result/supported/SupportedExpressionParsingResult.ts";
import type {FirstSet} from "../first-set/FirstSet.ts";
import type {Grammar} from "../grammar/Grammar.ts";
import type {ParsingTable} from "../parsing-table/ParsingTable.ts";
import type {Rule} from "../rule/Rule.ts";
import type {RuleById} from "../rule-by-id/RuleById.ts";
export abstract class Expression<AtomToUse extends Atom> {
	protected constructor() {}
	public abstract checkIfCanBeEmpty(
		alreadyCheckedRules: ReadonlySet<Rule<ConcreteSyntaxTreeNode<Atom>>>,
		ruleById: RuleById,
	): boolean;
	public abstract checkIfRuleCanBeFinal(
		alreadyCheckedRules: ReadonlySet<Rule<ConcreteSyntaxTreeNode<Atom>>>,
		rule: Rule<ConcreteSyntaxTreeNode<Atom>>,
		ruleById: RuleById,
	): boolean;
	public computeFirstSet(ruleById: RuleById): FirstSet {
		const firstSet: FirstSet = {
			canBeEmpty: this.checkIfCanBeEmpty(
				new Set<Rule<ConcreteSyntaxTreeNode<Atom>>>(),
				ruleById,
			),
			terminals: this.computePossibleFirstingTerminals(
				new Set<Rule<ConcreteSyntaxTreeNode<Atom>>>(),
				ruleById,
			),
		};
		return firstSet;
	}
	public abstract computePossibleFirstingTerminals(
		alreadyCheckedRules: ReadonlySet<Rule<ConcreteSyntaxTreeNode<Atom>>>,
		ruleById: RuleById,
	): ReadonlySet<string>;
	public abstract computePossibleFollowingTerminals(
		alreadyCheckedRules: ReadonlySet<Rule<ConcreteSyntaxTreeNode<Atom>>>,
		rule: Rule<ConcreteSyntaxTreeNode<Atom>>,
		ruleById: RuleById,
	): ReadonlySet<string>;
	public abstract finalizeParsing(
		grammar: Grammar<ConcreteSyntaxTreeNode<Atom>>,
		index: number,
		parsingTable: ParsingTable,
	): SupportedExpressionFinalizingParsingResult<AtomToUse>;
	public abstract parse(
		grammar: Grammar<ConcreteSyntaxTreeNode<Atom>>,
		index: number,
		parsingTable: ParsingTable,
		remainingCharacters: readonly [Character, ...(readonly Character[])],
	): SupportedExpressionParsingResult<AtomToUse>;
	public abstract partify(): readonly string[];
}
