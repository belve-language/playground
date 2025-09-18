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
	public constructor(rule: Rule<Atom, NodeToUse>) {
		super();
		this.rule = rule;
	}
	public override checkIfCanBeEmpty(
		alreadyCheckedRules: ReadonlySet<Rule<Atom, ConcreteSyntaxTreeNode<Atom>>>,
		ruleById: RuleById,
	): boolean {
		const canBeEmpty = this.rule.checkIfCanBeEmpty(
			alreadyCheckedRules,
			ruleById,
		);
		return canBeEmpty;
	}
	public override checkIfRuleCanBeFinal(
		alreadyCheckedRules: ReadonlySet<Rule<Atom, ConcreteSyntaxTreeNode<Atom>>>,
		rule: Rule<Atom, ConcreteSyntaxTreeNode<Atom>>,
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
		alreadyCheckedRules: ReadonlySet<Rule<Atom, ConcreteSyntaxTreeNode<Atom>>>,
		ruleById: RuleById,
	): ReadonlySet<string> {
		const possibleFirstingTerminals =
			this.rule.computePossibleFirstingTerminals(alreadyCheckedRules, ruleById);
		return possibleFirstingTerminals;
	}
	public override computePossibleFollowingTerminals(
		alreadyCheckedRules: ReadonlySet<Rule<Atom, ConcreteSyntaxTreeNode<Atom>>>,
		rule: Rule<Atom, ConcreteSyntaxTreeNode<Atom>>,
		ruleById: RuleById,
	): ReadonlySet<string> {
		const possibleFollowingTerminals =
			this.rule.computePossibleFollowingTerminals(
				alreadyCheckedRules,
				rule,
				ruleById,
			);
		return possibleFollowingTerminals;
	}
	public override finalizeParsing(
		grammar: Grammar<ConcreteSyntaxTreeNode<Atom>>,
		index: number,
		parsingTable: ParsingTable,
	):
		| SuccessExpressionFinalizingParsingResult<NonTerminalAtom<NodeToUse>>
		| UnexpectedFinalizingExpressionFinalizingParsingResult {
		const ruleFinalizingParsingResult = this.rule.finalizeParsing(
			grammar,
			index,
			parsingTable,
		);
		switch (ruleFinalizingParsingResult.typeName) {
			case successRuleFinalizingParsingResultTypeName: {
				const atom: NonTerminalAtom<NodeToUse> = new NonTerminalAtom<NodeToUse>(
					ruleFinalizingParsingResult.node,
					ruleFinalizingParsingResult.node.atom.spanIndexes,
				);
				const expressionFinalizingParsingResult: SuccessExpressionFinalizingParsingResult<
					NonTerminalAtom<NodeToUse>
				> = new SuccessExpressionFinalizingParsingResult<
					NonTerminalAtom<NodeToUse>
				>(atom);
				return expressionFinalizingParsingResult;
			}
			case unexpectedFinalizingRuleFinalizingParsingResultTypeName: {
				const expressionFinalizingParsingResult: UnexpectedFinalizingExpressionFinalizingParsingResult =
					new UnexpectedFinalizingExpressionFinalizingParsingResult();
				return expressionFinalizingParsingResult;
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
			case unexpectedCharacterRuleParsingResultTypeName: {
				const expressionParsingResult: UnexpectedCharacterExpressionParsingResult =
					new UnexpectedCharacterExpressionParsingResult(
						ruleParsingResult.index,
					);
				return expressionParsingResult;
			}
			case unexpectedFinalizingExpressionParsingResultTypeName: {
				const expressionParsingResult: UnexpectedFinalizingExpressionParsingResult =
					new UnexpectedFinalizingExpressionParsingResult();
				return expressionParsingResult;
			}
			case successRuleParsingResultTypeName: {
				const atom: NonTerminalAtom<NodeToUse> = new NonTerminalAtom<NodeToUse>(
					ruleParsingResult.node,
					ruleParsingResult.node.atom.spanIndexes,
				);
				const expressionParsingResult: SuccessExpressionParsingResult<
					NonTerminalAtom<NodeToUse>
				> = new SuccessExpressionParsingResult<NonTerminalAtom<NodeToUse>>(
					atom,
					ruleParsingResult.nextIndex,
					ruleParsingResult.remainingCharacters,
				);
				return expressionParsingResult;
			}
		}
	}
	private readonly rule: Rule<Atom, NodeToUse>;
	public override stringifyToBackusNaurForm(): readonly [`<${string}>`] {
		const stringifiedExpression: readonly [`<${string}>`] = [
			`<${this.rule.name}>`,
		];
		return stringifiedExpression;
	}
}
