import {Atom} from "../../../atom/Atom.ts";
import {NonTerminalAtom} from "../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {Character} from "../../../character/Character.ts";
import type {ConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/ConcreteSyntaxTreeNode.ts";
import {SuccessExpressionFinalizingParsingResult} from "../../../expression-finalizing-parsing-result/implementations/success/SuccessExpressionFinalizingParsingResult.ts";
import {UnexpectedFinalizingExpressionFinalizingParsingResult} from "../../../expression-finalizing-parsing-result/implementations/unexpected-finalizing/UnexpectedFinalizingExpressionFinalizingParsingResult.ts";
import {SuccessExpressionParsingResult} from "../../../expression-parsing-result/implementations/success/SuccessExpressionParsingResult.ts";
import {UnexpectedCharacterExpressionParsingResult} from "../../../expression-parsing-result/implementations/unexpected-character/UnexpectedCharacterExpressionParsingResult.ts";
import {UnexpectedFinalizingExpressionParsingResult} from "../../../expression-parsing-result/implementations/unexpected-finalizing/UnexpectedFinalizingExpressionParsingResult.ts";
import {unexpectedFinalizingExpressionParsingResultTypeName} from "../../../expression-parsing-result/implementations/unexpected-finalizing/type-name/unexpectedFinalizingExpressionParsingResultTypeName.ts";
import type {Grammar} from "../../../grammar/Grammar.ts";
import type {Index} from "../../../index/Index.ts";
import type {ParsingTable} from "../../../parsing-table/ParsingTable.ts";
import type {Rule} from "../../../rule/Rule.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {successRuleFinalizingParsingResultTypeName} from "../../../rule-finalizing-parsing-result/implementations/success/type-name/successRuleFinalizingParsingResultTypeName.ts";
import {unexpectedFinalizingRuleFinalizingParsingResultTypeName} from "../../../rule-finalizing-parsing-result/implementations/unexpected-finalizing/type-name/unexpectedFinalizingRuleFinalizingParsingResultTypeName.ts";
import {successRuleParsingResultTypeName} from "../../../rule-parsing-result/implementations/success/type-name/successRuleParsingResultTypeName.ts";
import {unexpectedCharacterRuleParsingResultTypeName} from "../../../rule-parsing-result/implementations/unexpected-character/type-name/unexpectedCharacterRuleParsingResultTypeName.ts";
import {Expression} from "../../Expression.ts";
export class NonTerminalExpression<
	NodeToUse extends ConcreteSyntaxTreeNode<Atom>,
> extends Expression<NonTerminalAtom<NodeToUse>> {
	public constructor(rule: Rule<NodeToUse>) {
		super();
		this.rule = rule;
	}
	public override checkIfCanBeEmpty(
		alreadyCheckedRules: ReadonlySet<Rule<ConcreteSyntaxTreeNode<Atom>>>,
		ruleById: RuleById,
	): boolean {
		const canBeEmpty = this.rule.checkIfCanBeEmpty(
			alreadyCheckedRules,
			ruleById,
		);
		return canBeEmpty;
	}
	public override checkIfRuleCanBeFinal(
		alreadyCheckedRules: ReadonlySet<Rule<ConcreteSyntaxTreeNode<Atom>>>,
		rule: Rule<ConcreteSyntaxTreeNode<Atom>>,
		ruleById: RuleById,
	): boolean {
		if (this.rule === rule) {
			return true;
		} else {
			const canBeFinal = this.rule.checkIfRuleCanBeFinal(
				alreadyCheckedRules,
				rule,
				ruleById,
			);
			return canBeFinal;
		}
	}
	public override computePossibleFirstingTerminals(
		alreadyCheckedRules: ReadonlySet<Rule<ConcreteSyntaxTreeNode<Atom>>>,
		ruleById: RuleById,
	): ReadonlySet<string> {
		const possibleFirstingTerminals =
			this.rule.computePossibleFirstingTerminals(alreadyCheckedRules, ruleById);
		return possibleFirstingTerminals;
	}
	public override computePossibleFollowingTerminals(
		alreadyCheckedRules: ReadonlySet<Rule<ConcreteSyntaxTreeNode<Atom>>>,
		rule: Rule<ConcreteSyntaxTreeNode<Atom>>,
		ruleById: RuleById,
	): ReadonlySet<string> {
		const possibleFollowingTerminalsInThisExpression =
			this.rule.computePossibleFollowingTerminals(
				alreadyCheckedRules,
				rule,
				ruleById,
			);
		return possibleFollowingTerminalsInThisExpression;
	}
	public override finalizeParsing(
		grammar: Grammar<ConcreteSyntaxTreeNode<Atom>>,
		index: number,
		parsingTable: ParsingTable,
	):
		| SuccessExpressionFinalizingParsingResult<NonTerminalAtom<NodeToUse>>
		| UnexpectedFinalizingExpressionFinalizingParsingResult {
		const finalizingParsingResult = this.rule.finalizeParsing(
			grammar,
			index,
			parsingTable,
		);
		switch (finalizingParsingResult.typeName) {
			case successRuleFinalizingParsingResultTypeName: {
				const atom: NonTerminalAtom<NodeToUse> = new NonTerminalAtom<NodeToUse>(
					finalizingParsingResult.node,
					finalizingParsingResult.node.atom.spanIndexes,
				);
				const result: SuccessExpressionFinalizingParsingResult<
					NonTerminalAtom<NodeToUse>
				> = new SuccessExpressionFinalizingParsingResult<
					NonTerminalAtom<NodeToUse>
				>(atom);
				return result;
			}
			case unexpectedFinalizingRuleFinalizingParsingResultTypeName: {
				const result: UnexpectedFinalizingExpressionFinalizingParsingResult =
					new UnexpectedFinalizingExpressionFinalizingParsingResult();
				return result;
			}
		}
	}
	public override parse(
		grammar: Grammar<ConcreteSyntaxTreeNode<Atom>>,
		index: Index,
		parsingTable: ParsingTable,
		remainingCharacters: readonly [Character, ...(readonly Character[])],
	):
		| SuccessExpressionParsingResult<NonTerminalAtom<NodeToUse>>
		| UnexpectedCharacterExpressionParsingResult
		| UnexpectedFinalizingExpressionParsingResult {
		const ruleParsingResult = this.rule.parse(
			grammar,
			index,
			parsingTable,
			remainingCharacters,
		);
		switch (ruleParsingResult.typeName) {
			case unexpectedFinalizingExpressionParsingResultTypeName: {
				const parsingResult: UnexpectedFinalizingExpressionParsingResult =
					new UnexpectedFinalizingExpressionParsingResult();
				return parsingResult;
			}
			case unexpectedCharacterRuleParsingResultTypeName: {
				const parsingResult: UnexpectedCharacterExpressionParsingResult =
					new UnexpectedCharacterExpressionParsingResult(
						ruleParsingResult.index,
					);
				return parsingResult;
			}
			case successRuleParsingResultTypeName: {
				const atom: NonTerminalAtom<NodeToUse> = new NonTerminalAtom<NodeToUse>(
					ruleParsingResult.node,
					ruleParsingResult.node.atom.spanIndexes,
				);
				const result: SuccessExpressionParsingResult<
					NonTerminalAtom<NodeToUse>
				> = new SuccessExpressionParsingResult<NonTerminalAtom<NodeToUse>>(
					atom,
					ruleParsingResult.nextIndex,
					ruleParsingResult.remainingCharacters,
				);
				return result;
			}
		}
	}
	public override partify(): readonly string[] {
		function naurifyName(name: string): string {
			return name.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
		}
		const ruleName = naurifyName(this.rule.name);
		return [`<${ruleName}>`];
	}
	private readonly rule: Rule<NodeToUse>;
}
