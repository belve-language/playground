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
import {GrammarIteratingResult} from "../grammar-iterating-result/GrammarIteratingResult.ts";
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
export abstract class Rule<
	AtomToUse extends Atom,
	NodeToUse extends ConcreteSyntaxTreeNode<AtomToUse>,
> {
	protected constructor(name: string) {
		this.name = name;
	}
	public abstract buildNode(atom: AtomToUse): NodeToUse;
	public checkIfCanBeEmpty(
		alreadyCheckedRules: ReadonlySet<Rule<Atom, ConcreteSyntaxTreeNode<Atom>>>,
		ruleById: RuleById,
	): boolean {
		if (alreadyCheckedRules.has(this)) {
			const ruleCanBeEmpty: false = false;
			return ruleCanBeEmpty;
		} else {
			const rightExpressions = this.getRightExpressions(ruleById);
			const ruleCanBeEmpty: boolean = rightExpressions.some((expression) => {
				const canExpressionBeEmpty = expression.checkIfCanBeEmpty(
					alreadyCheckedRules.union(new Set<this>([this])),
					ruleById,
				);
				return canExpressionBeEmpty;
			});
			return ruleCanBeEmpty;
		}
	}
	public checkIfRuleCanBeFinal(
		alreadyCheckedRules: ReadonlySet<Rule<Atom, ConcreteSyntaxTreeNode<Atom>>>,
		rule: Rule<Atom, ConcreteSyntaxTreeNode<Atom>>,
		ruleById: RuleById,
	): boolean {
		if (alreadyCheckedRules.has(this)) {
			const ruleCanBeFinal: false = false;
			return ruleCanBeFinal;
		} else {
			const rightSubExpressions = this.getRightExpressions(ruleById);
			const ruleCanBeFinal: boolean = rightSubExpressions.some((expression) => {
				return expression.checkIfRuleCanBeFinal(
					alreadyCheckedRules.union(new Set<this>([this])),
					rule,
					ruleById,
				);
			});
			return ruleCanBeFinal;
		}
	}
	public computePossibleFirstingTerminals(
		alreadyCheckedRules: ReadonlySet<Rule<Atom, ConcreteSyntaxTreeNode<Atom>>>,
		ruleById: RuleById,
	): ReadonlySet<string> {
		if (alreadyCheckedRules.has(this)) {
			const rulePossibleFirstingTerminals: ReadonlySet<never> =
				new Set<never>();
			return rulePossibleFirstingTerminals;
		} else {
			const rightSubExpressions = this.getRightExpressions(ruleById);
			const rulePossibleFirstingTerminals: ReadonlySet<string> =
				rightSubExpressions.reduce<ReadonlySet<string>>(
					(
						accumulatedRulePossibleFirstingTerminals: ReadonlySet<string>,
						expression: Expression<AtomToUse>,
					): ReadonlySet<string> => {
						const expressionPossibleFirstingTerminals =
							expression.computePossibleFirstingTerminals(
								alreadyCheckedRules.union(new Set<this>([this])),
								ruleById,
							);
						const newAccumulatedRulePossibleFirstingTerminals: ReadonlySet<string> =
							accumulatedRulePossibleFirstingTerminals.union(
								expressionPossibleFirstingTerminals,
							);
						return newAccumulatedRulePossibleFirstingTerminals;
					},
					new Set<never>(),
				);
			return rulePossibleFirstingTerminals;
		}
	}
	public computePossibleFollowingTerminals(
		alreadyCheckedRules: ReadonlySet<Rule<Atom, ConcreteSyntaxTreeNode<Atom>>>,
		rule: Rule<Atom, ConcreteSyntaxTreeNode<Atom>>,
		ruleById: RuleById,
	): ReadonlySet<string> {
		if (alreadyCheckedRules.has(this)) {
			const rulePossibleFollowingTerminals: ReadonlySet<never> =
				new Set<never>();
			return rulePossibleFollowingTerminals;
		} else {
			const rightExpressions = this.getRightExpressions(ruleById);
			const rulePossibleFollowingTerminals = rightExpressions.reduce<
				ReadonlySet<string>
			>(
				(
					accumulatedPossibleFollowingTerminals: ReadonlySet<string>,
					expression: Expression<AtomToUse>,
				): ReadonlySet<string> => {
					const expressionPossibleFollowingTerminals =
						expression.computePossibleFollowingTerminals(
							alreadyCheckedRules.union(new Set<this>([this])),
							rule,
							ruleById,
						);
					const newAccumulatedPossibleFollowingTerminals: ReadonlySet<string> =
						accumulatedPossibleFollowingTerminals.union(
							expressionPossibleFollowingTerminals,
						);
					return newAccumulatedPossibleFollowingTerminals;
				},
				new Set<never>(),
			);
			return rulePossibleFollowingTerminals;
		}
	}
	public finalizeParsing(
		grammar: Grammar<ConcreteSyntaxTreeNode<Atom>>,
		index: number,
		parsingTable: ParsingTable,
	): SupportedRuleFinalizingParsingResult<NodeToUse> {
		const parsingTableRow = parsingTable.get(
			this,
		) as ParsingTableRow<AtomToUse>;
		const expression = parsingTableRow.finalization;
		if (expression === null) {
			const ruleFinalizingParsingResult: UnexpectedFinalizingRuleFinalizingParsingResult =
				new UnexpectedFinalizingRuleFinalizingParsingResult();
			return ruleFinalizingParsingResult;
		} else {
			const expressionFinalizingParsingResult = expression.finalizeParsing(
				grammar,
				index,
				parsingTable,
			);
			switch (expressionFinalizingParsingResult.typeName) {
				case successExpressionFinalizingParsingResultTypeName: {
					const node = this.buildNode(expressionFinalizingParsingResult.atom);
					const ruleFinalizingParsingResult: SuccessRuleFinalizingParsingResult<NodeToUse> =
						new SuccessRuleFinalizingParsingResult<NodeToUse>(node);
					return ruleFinalizingParsingResult;
				}
				case unexpectedFinalizingExpressionFinalizingParsingResultTypeName: {
					const ruleFinalizingParsingResult: UnexpectedFinalizingRuleFinalizingParsingResult =
						new UnexpectedFinalizingRuleFinalizingParsingResult();
					return ruleFinalizingParsingResult;
				}
			}
		}
	}
	public abstract getRightExpressions(
		ruleById: RuleById,
	): readonly [Expression<AtomToUse>, ...(readonly Expression<AtomToUse>[])];
	public *iterateAllWithDepth(
		ruleById: RuleById,
	): Generator<GrammarIteratingResult, void, void> {
		const iteratingResults = this.iterateWithDepth(
			new Set<never>(),
			0,
			ruleById,
		);
		for (const iteratingResult of iteratingResults) {
			yield iteratingResult;
		}
	}
	public *iterateWithDepth(
		alreadyVisitedRules: ReadonlySet<Rule<Atom, ConcreteSyntaxTreeNode<Atom>>>,
		depth: number,
		ruleById: RuleById,
	): Generator<GrammarIteratingResult, void, void> {
		if (!alreadyVisitedRules.has(this)) {
			const ruleIteratingResult: GrammarIteratingResult =
				new GrammarIteratingResult(depth, this);
			yield ruleIteratingResult;
			const rightExpressions = this.getRightExpressions(ruleById);
			for (const expression of rightExpressions) {
				const expressionIteratingResults = expression.iterateWithDepth(
					alreadyVisitedRules.union(new Set<this>([this])),
					depth + 1,
					ruleById,
				);
				for (const expressionIteratingResult of expressionIteratingResults) {
					const ruleIteratingResult: GrammarIteratingResult =
						expressionIteratingResult;
					yield ruleIteratingResult;
				}
			}
		}
	}
	public readonly name: string;
	public parse(
		grammar: Grammar<ConcreteSyntaxTreeNode<Atom>>,
		index: Index,
		parsingTable: ParsingTable,
		remainingCharacters: readonly [Character, ...(readonly Character[])],
	): SupportedRuleParsingResult<NodeToUse> {
		const [firstCharacter, ...restCharacters] = remainingCharacters;
		const parsingTableRow = parsingTable.get(
			this,
		) as ParsingTableRow<AtomToUse>;
		const expression = parsingTableRow.terminals[firstCharacter];
		if (expression === undefined) {
			const ruleParsingResult: UnexpectedCharacterRuleParsingResult =
				new UnexpectedCharacterRuleParsingResult(index);
			return ruleParsingResult;
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
					const ruleParsingResult: SuccessRuleParsingResult<NodeToUse> =
						new SuccessRuleParsingResult<NodeToUse>(
							expressionParsingResult.nextIndex,
							node,
							expressionParsingResult.remainingCharacters,
						);
					return ruleParsingResult;
				}
				case unexpectedCharacterExpressionParsingResultTypeName: {
					const ruleParsingResult: UnexpectedCharacterRuleParsingResult =
						new UnexpectedCharacterRuleParsingResult(
							expressionParsingResult.index,
						);
					return ruleParsingResult;
				}
				case unexpectedFinalizingExpressionParsingResultTypeName: {
					const ruleParsingResult: UnexpectedFinalizingRuleParsingResult =
						new UnexpectedFinalizingRuleParsingResult();
					return ruleParsingResult;
				}
			}
		}
	}
	public stringifyToBackusNaurForm(
		ruleById: RuleById,
	): readonly [string, ...(readonly string[])] {
		const rightExpressions = this.getRightExpressions(ruleById);
		const stringifiedRule: readonly [string, ...(readonly string[])] = [
			`<${this.name}> ::=`,
			...rightExpressions[0].stringifyToBackusNaurForm(),
			...rightExpressions.slice(1).flatMap((expression) => {
				return ["|", ...expression.stringifyToBackusNaurForm()];
			}),
		];
		return stringifiedRule;
	}
}
