import type {Atom} from "../atom/Atom.ts";
import type {Character} from "../character/Character.ts";
import type {ConcreteSyntaxTreeNode} from "../concrete-syntax-tree-node/ConcreteSyntaxTreeNode.ts";
import type {Expression} from "../expression/Expression.ts";
import {successExpressionFinalizingParsingResultTypeName} from "../expression-finalizing-parsing-result/implementations/success/type-name/successExpressionFinalizingParsingResultTypeName.ts";
import {unexpectedFinalizingExpressionFinalizingParsingResultTypeName} from "../expression-finalizing-parsing-result/implementations/unexpected-finalizing/type-name/unexpectedFinalizingExpressionFinalizingParsingResultTypeName.ts";
import {successExpressionParsingResultTypeName} from "../expression-parsing-result/implementations/success/type-name/successExpressionParsingResultTypeName.ts";
import {unexpectedCharacterExpressionParsingResultTypeName} from "../expression-parsing-result/implementations/unexpected-character/type-name/unexpectedCharacterExpressionParsingResultTypeName.ts";
import {unexpectedFinalizingExpressionParsingResultTypeName} from "../expression-parsing-result/implementations/unexpected-finalizing/type-name/unexpectedFinalizingExpressionParsingResultTypeName.ts";
import type {Grammar} from "../grammar/Grammar.ts";
import type {Index} from "../index/Index.ts";
import type {ParsingTable} from "../parsing-table/ParsingTable.ts";
import type {ParsingTableRow} from "../parsing-table/row/ParsingTableRow.ts";
import type {RuleById} from "../rule-by-id/RuleById.ts";
import {SuccessRuleFinalizingParsingResult} from "../rule-finalizing-parsing-result/implementations/success/SuccessRuleFinalizingParsingResult.ts";
import {UnexpectedFinalizingRuleFinalizingParsingResult} from "../rule-finalizing-parsing-result/implementations/unexpected-finalizing/UnexpectedFinalizingRuleFinalizingParsingResult.ts";
import type {SupportedRuleFinalizingParsingResult} from "../rule-finalizing-parsing-result/supported/SupportedRuleFinalizingParsingResult.ts";
import {SuccessRuleParsingResult} from "../rule-parsing-result/implementations/success/SuccessRuleParsingResult.ts";
import {UnexpectedCharacterRuleParsingResult} from "../rule-parsing-result/implementations/unexpected-character/UnexpectedCharacterRuleParsingResult.ts";
import {UnexpectedFinalizingRuleParsingResult} from "../rule-parsing-result/implementations/unexpected-finalizing/UnexpectedFinalizingRuleParsingResult.ts";
import type {SupportedRuleParsingResult} from "../rule-parsing-result/supported/SupportedRuleParsingResult.ts";
export abstract class Rule<NodeToUse extends ConcreteSyntaxTreeNode<Atom>> {
	protected constructor() {}
	public abstract buildNode(
		atom: NodeToUse extends ConcreteSyntaxTreeNode<infer AtomToUse> ? AtomToUse
		:	never,
	): NodeToUse;
	public checkIfCanBeEmpty(
		alreadyCheckedRules: ReadonlySet<Rule<ConcreteSyntaxTreeNode<Atom>>>,
		ruleById: RuleById,
	): boolean {
		if (alreadyCheckedRules.has(this)) {
			return false;
		} else {
			const rightExpressions = this.getRightExpressions(ruleById);
			const canBeEmpty = rightExpressions.some((expression) => {
				const canExpressionBeEmpty = expression.checkIfCanBeEmpty(
					alreadyCheckedRules.union(new Set<this>([this])),
					ruleById,
				);
				return canExpressionBeEmpty;
			});
			return canBeEmpty;
		}
	}
	public checkIfRuleCanBeFinal(
		alreadyCheckedRules: ReadonlySet<Rule<ConcreteSyntaxTreeNode<Atom>>>,
		rule: Rule<ConcreteSyntaxTreeNode<Atom>>,
		ruleById: RuleById,
	): boolean {
		if (alreadyCheckedRules.has(this)) {
			return false;
		} else {
			const rightExpressions = this.getRightExpressions(ruleById);
			const canRuleBeFinal = rightExpressions.some((expression) => {
				return expression.checkIfRuleCanBeFinal(
					alreadyCheckedRules.union(new Set<this>([this])),
					rule,
					ruleById,
				);
			});
			return canRuleBeFinal;
		}
	}
	public computePossibleFirstingTerminals(
		alreadyCheckedRules: ReadonlySet<Rule<ConcreteSyntaxTreeNode<Atom>>>,
		ruleById: RuleById,
	): ReadonlySet<string> {
		if (alreadyCheckedRules.has(this)) {
			const possibleFirstingTerminals: ReadonlySet<string> = new Set<string>();
			return possibleFirstingTerminals;
		} else {
			const rightExpressions = this.getRightExpressions(ruleById);
			const possibleFirstingTerminals = rightExpressions.reduce<
				ReadonlySet<string>
			>((accumulatedPossibleFirstingTerminals, expression) => {
				const possibleFirstingTerminalsOfThisExpression =
					expression.computePossibleFirstingTerminals(
						alreadyCheckedRules.union(new Set<this>([this])),
						ruleById,
					);
				const newAccumulatedPossibleFirstingTerminals =
					accumulatedPossibleFirstingTerminals.union(
						possibleFirstingTerminalsOfThisExpression,
					);
				return newAccumulatedPossibleFirstingTerminals;
			}, new Set<string>());
			return possibleFirstingTerminals;
		}
	}
	public computePossibleFollowingTerminals(
		alreadyCheckedRules: ReadonlySet<Rule<ConcreteSyntaxTreeNode<Atom>>>,
		rule: Rule<ConcreteSyntaxTreeNode<Atom>>,
		ruleById: RuleById,
	): ReadonlySet<string> {
		if (alreadyCheckedRules.has(this)) {
			const possibleFollowingTerminals: ReadonlySet<string> = new Set<string>();
			return possibleFollowingTerminals;
		} else {
			const rightExpressions = this.getRightExpressions(ruleById);
			const possibleFollowingTerminals = rightExpressions.reduce<
				ReadonlySet<string>
			>((accumulatedPossibleFollowingTerminals, expression) => {
				const possibleFollowingTerminalsInExpression =
					expression.computePossibleFollowingTerminals(
						alreadyCheckedRules.union(new Set<this>([this])),
						rule,
						ruleById,
					);
				return accumulatedPossibleFollowingTerminals.union(
					possibleFollowingTerminalsInExpression,
				);
			}, new Set<string>());
			return possibleFollowingTerminals;
		}
	}
	public finalizeParsing(
		grammar: Grammar<ConcreteSyntaxTreeNode<Atom>>,
		index: number,
		parsingTable: ParsingTable,
	): SupportedRuleFinalizingParsingResult<NodeToUse> {
		const parsingTableRow = parsingTable.get(this) as ParsingTableRow<
			NodeToUse extends ConcreteSyntaxTreeNode<infer AtomToUse> ? AtomToUse
			:	never
		>;
		const expression = parsingTableRow.finalization;
		if (expression === null) {
			const result: UnexpectedFinalizingRuleFinalizingParsingResult =
				new UnexpectedFinalizingRuleFinalizingParsingResult();
			return result;
		} else {
			const expressionFinalizingParsingResult = expression.finalizeParsing(
				grammar,
				index,
				parsingTable,
			);
			switch (expressionFinalizingParsingResult.typeName) {
				case successExpressionFinalizingParsingResultTypeName: {
					const node = this.buildNode(expressionFinalizingParsingResult.atom);
					const finalizingParsingResult: SuccessRuleFinalizingParsingResult<NodeToUse> =
						new SuccessRuleFinalizingParsingResult<NodeToUse>(node);
					return finalizingParsingResult;
				}
				case unexpectedFinalizingExpressionFinalizingParsingResultTypeName: {
					const finalizingParsingResult: UnexpectedFinalizingRuleFinalizingParsingResult =
						new UnexpectedFinalizingRuleFinalizingParsingResult();
					return finalizingParsingResult;
				}
			}
		}
	}
	public abstract getRightExpressions(
		ruleById: RuleById,
	): readonly [
		Expression<
			NodeToUse extends ConcreteSyntaxTreeNode<infer AtomToUse> ? AtomToUse
			:	never
		>,
		...(readonly Expression<
			NodeToUse extends ConcreteSyntaxTreeNode<infer AtomToUse> ? AtomToUse
			:	never
		>[]),
	];
	public parse(
		grammar: Grammar<ConcreteSyntaxTreeNode<Atom>>,
		index: Index,
		parsingTable: ParsingTable,
		remainingCharacters: readonly [Character, ...(readonly Character[])],
	): SupportedRuleParsingResult<NodeToUse> {
		const [firstCharacter, ...restCharacters] = remainingCharacters;
		const parsingTableRow = parsingTable.get(this) as ParsingTableRow<
			NodeToUse extends ConcreteSyntaxTreeNode<infer AtomToUse> ? AtomToUse
			:	never
		>;
		const expression = parsingTableRow.terminals[firstCharacter];
		if (expression === undefined) {
			const parsingResult: UnexpectedCharacterRuleParsingResult =
				new UnexpectedCharacterRuleParsingResult(index);
			return parsingResult;
		} else {
			const expressionParsingResult = expression.parse(
				grammar,
				index,
				parsingTable,
				[firstCharacter, ...restCharacters],
			);
			switch (expressionParsingResult.typeName) {
				case successExpressionParsingResultTypeName: {
					const node = this.buildNode(expressionParsingResult.atom);
					const parsingResult: SuccessRuleParsingResult<NodeToUse> =
						new SuccessRuleParsingResult<NodeToUse>(
							expressionParsingResult.nextIndex,
							node,
							expressionParsingResult.remainingCharacters,
						);
					return parsingResult;
				}
				case unexpectedCharacterExpressionParsingResultTypeName: {
					const parsingResult: UnexpectedCharacterRuleParsingResult =
						new UnexpectedCharacterRuleParsingResult(
							expressionParsingResult.index,
						);
					return parsingResult;
				}
				case unexpectedFinalizingExpressionParsingResultTypeName: {
					const finalizingParsingResult: UnexpectedFinalizingRuleParsingResult =
						new UnexpectedFinalizingRuleParsingResult();
					return finalizingParsingResult;
				}
			}
		}
	}
}
