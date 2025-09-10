import type {Atom} from "../../../atom/Atom.ts";
import type {EmptyAtom} from "../../../atom/implementations/empty/EmptyAtom.ts";
import type {NonTerminalAtom} from "../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {TerminalAtom} from "../../../atom/implementations/terminal/TerminalAtom.ts";
import {ThenAtom} from "../../../atom/implementations/then/ThenAtom.ts";
import type {Character} from "../../../character/Character.ts";
import {ConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/ConcreteSyntaxTreeNode.ts";
import {SuccessExpressionFinalizingParsingResult} from "../../../expression-finalizing-parsing-result/implementations/success/SuccessExpressionFinalizingParsingResult.ts";
import {successExpressionFinalizingParsingResultTypeName} from "../../../expression-finalizing-parsing-result/implementations/success/type-name/successExpressionFinalizingParsingResultTypeName.ts";
import {UnexpectedFinalizingExpressionFinalizingParsingResult} from "../../../expression-finalizing-parsing-result/implementations/unexpected-finalizing/UnexpectedFinalizingExpressionFinalizingParsingResult.ts";
import {unexpectedFinalizingExpressionFinalizingParsingResultTypeName} from "../../../expression-finalizing-parsing-result/implementations/unexpected-finalizing/type-name/unexpectedFinalizingExpressionFinalizingParsingResultTypeName.ts";
import type {SupportedExpressionFinalizingParsingResult} from "../../../expression-finalizing-parsing-result/supported/SupportedExpressionFinalizingParsingResult.ts";
import {SuccessExpressionParsingResult} from "../../../expression-parsing-result/implementations/success/SuccessExpressionParsingResult.ts";
import {successExpressionParsingResultTypeName} from "../../../expression-parsing-result/implementations/success/type-name/successExpressionParsingResultTypeName.ts";
import {UnexpectedCharacterExpressionParsingResult} from "../../../expression-parsing-result/implementations/unexpected-character/UnexpectedCharacterExpressionParsingResult.ts";
import {UnexpectedFinalizingExpressionParsingResult} from "../../../expression-parsing-result/implementations/unexpected-finalizing/UnexpectedFinalizingExpressionParsingResult.ts";
import {unexpectedFinalizingExpressionParsingResultTypeName} from "../../../expression-parsing-result/implementations/unexpected-finalizing/type-name/unexpectedFinalizingExpressionParsingResultTypeName.ts";
import type {SupportedExpressionParsingResult} from "../../../expression-parsing-result/supported/SupportedExpressionParsingResult.ts";
import type {Grammar} from "../../../grammar/Grammar.ts";
import {unexpectedCharacterParsingResultTypeName} from "../../../parsing-result/implementations/unexpected-character/type-name/unexpectedCharacterParsingResultTypeName.ts";
import type {ParsingTable} from "../../../parsing-table/ParsingTable.ts";
import type {Rule} from "../../../rule/Rule.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {Expression} from "../../Expression.ts";
export class ThenExpression<
	LeftSubExpressionAtom extends
		| EmptyAtom
		| NonTerminalAtom<ConcreteSyntaxTreeNode<Atom>>
		| TerminalAtom<Character>,
	RightSubExpressionAtom extends Atom,
> extends Expression<ThenAtom<LeftSubExpressionAtom, RightSubExpressionAtom>> {
	public constructor(
		leftSubExpression: Expression<LeftSubExpressionAtom>,
		rightSubExpression: Expression<RightSubExpressionAtom>,
	) {
		super();
		this.leftSubExpression = leftSubExpression;
		this.rightSubExpression = rightSubExpression;
	}
	public override checkIfCanBeEmpty(
		alreadyCheckedRules: ReadonlySet<Rule<ConcreteSyntaxTreeNode<Atom>>>,
		ruleById: RuleById,
	): boolean {
		return (
			this.leftSubExpression.checkIfCanBeEmpty(alreadyCheckedRules, ruleById)
			&& this.rightSubExpression.checkIfCanBeEmpty(
				alreadyCheckedRules,
				ruleById,
			)
		);
	}
	public override checkIfRuleCanBeFinal(
		alreadyCheckedRules: ReadonlySet<Rule<ConcreteSyntaxTreeNode<Atom>>>,
		rule: Rule<ConcreteSyntaxTreeNode<Atom>>,
		ruleById: RuleById,
	): boolean {
		return (
			this.rightSubExpression.checkIfRuleCanBeFinal(
				alreadyCheckedRules,
				rule,
				ruleById,
			)
			|| (this.rightSubExpression.checkIfCanBeEmpty(
				new Set<Rule<ConcreteSyntaxTreeNode<Atom>>>(),
				ruleById,
			)
				&& this.leftSubExpression.checkIfRuleCanBeFinal(
					alreadyCheckedRules,
					rule,
					ruleById,
				))
		);
	}
	public override computePossibleFirstingTerminals(
		alreadyCheckedRules: ReadonlySet<Rule<ConcreteSyntaxTreeNode<Atom>>>,
		ruleById: RuleById,
	): ReadonlySet<string> {
		const leftSubExpressionFirstingTerminals =
			this.leftSubExpression.computePossibleFirstingTerminals(
				alreadyCheckedRules,
				ruleById,
			);
		if (
			this.leftSubExpression.checkIfCanBeEmpty(
				new Set<Rule<ConcreteSyntaxTreeNode<Atom>>>(),
				ruleById,
			)
		) {
			const rightSubExpressionFirstingTerminals =
				this.rightSubExpression.computePossibleFirstingTerminals(
					alreadyCheckedRules,
					ruleById,
				);
			return leftSubExpressionFirstingTerminals.union(
				rightSubExpressionFirstingTerminals,
			);
		} else {
			return leftSubExpressionFirstingTerminals;
		}
	}
	public override computePossibleFollowingTerminals(
		alreadyCheckedRules: ReadonlySet<Rule<ConcreteSyntaxTreeNode<Atom>>>,
		rule: Rule<ConcreteSyntaxTreeNode<Atom>>,
		ruleById: RuleById,
	): ReadonlySet<string> {
		const possibleFollowingTerminalsInLeftExpression =
			this.leftSubExpression.computePossibleFollowingTerminals(
				alreadyCheckedRules,
				rule,
				ruleById,
			);
		const possibleFollowingTerminalsInRightExpression =
			this.rightSubExpression.computePossibleFollowingTerminals(
				alreadyCheckedRules,
				rule,
				ruleById,
			);
		const possibleFollowingTerminalsInSubExpressions =
			possibleFollowingTerminalsInLeftExpression.union(
				possibleFollowingTerminalsInRightExpression,
			);
		if (
			this.leftSubExpression.checkIfRuleCanBeFinal(
				new Set<Rule<ConcreteSyntaxTreeNode<Atom>>>(),
				rule,
				ruleById,
			)
		) {
			const possibleFirstingTerminalsOfRightExpression =
				this.rightSubExpression.computePossibleFirstingTerminals(
					new Set<Rule<ConcreteSyntaxTreeNode<Atom>>>(),
					ruleById,
				);
			const possibleFollowingTerminalsInThisExpression =
				possibleFollowingTerminalsInSubExpressions.union(
					possibleFirstingTerminalsOfRightExpression,
				);
			return possibleFollowingTerminalsInThisExpression;
		} else {
			return possibleFollowingTerminalsInSubExpressions;
		}
	}
	public override finalizeParsing(
		grammar: Grammar<ConcreteSyntaxTreeNode<Atom>>,
		index: number,
		parsingTable: ParsingTable,
	): SupportedExpressionFinalizingParsingResult<
		ThenAtom<LeftSubExpressionAtom, RightSubExpressionAtom>
	> {
		const finalizingParsingResultOfLeftExpression =
			this.leftSubExpression.finalizeParsing(grammar, index, parsingTable);
		const a = finalizingParsingResultOfLeftExpression;
		switch (finalizingParsingResultOfLeftExpression.typeName) {
			case successExpressionFinalizingParsingResultTypeName: {
				const finalizingParsingResultOfRightExpression =
					this.rightSubExpression.finalizeParsing(grammar, index, parsingTable);
				switch (finalizingParsingResultOfRightExpression.typeName) {
					case successExpressionFinalizingParsingResultTypeName: {
						const thenAtom = new ThenAtom(
							finalizingParsingResultOfLeftExpression.atom,
							finalizingParsingResultOfRightExpression.atom,
							new SpanIndexes(
								finalizingParsingResultOfLeftExpression.atom.spanIndexes.from,
								finalizingParsingResultOfRightExpression.atom.spanIndexes.until,
							),
						);
						const finalizingParsingResult =
							new SuccessExpressionFinalizingParsingResult(thenAtom);
						return finalizingParsingResult;
					}
					case unexpectedFinalizingExpressionFinalizingParsingResultTypeName: {
						const finalizingParsingResult: UnexpectedFinalizingExpressionFinalizingParsingResult =
							new UnexpectedFinalizingExpressionFinalizingParsingResult();
						return finalizingParsingResult;
					}
				}
			}
			case unexpectedFinalizingExpressionFinalizingParsingResultTypeName: {
				const finalizingParsingResult: UnexpectedFinalizingExpressionFinalizingParsingResult =
					new UnexpectedFinalizingExpressionFinalizingParsingResult();
				return finalizingParsingResult;
			}
		}
	}
	public readonly leftSubExpression: Expression<LeftSubExpressionAtom>;
	public override parse(
		grammar: Grammar<ConcreteSyntaxTreeNode<Atom>>,
		index: number,
		parsingTable: ParsingTable,
		remainingCharacters: readonly [Character, ...(readonly Character[])],
	): SupportedExpressionParsingResult<
		ThenAtom<LeftSubExpressionAtom, RightSubExpressionAtom>
	> {
		const parsingResultOfLeftExpression = this.leftSubExpression.parse(
			grammar,
			index,
			parsingTable,
			remainingCharacters,
		);
		switch (parsingResultOfLeftExpression.typeName) {
			case unexpectedCharacterParsingResultTypeName: {
				const parsingResult: UnexpectedCharacterExpressionParsingResult =
					new UnexpectedCharacterExpressionParsingResult(
						parsingResultOfLeftExpression.index,
					);
				return parsingResult;
			}
			case unexpectedFinalizingExpressionParsingResultTypeName: {
				const parsingResult: UnexpectedFinalizingExpressionParsingResult =
					new UnexpectedFinalizingExpressionParsingResult();
				return parsingResult;
			}
			case successExpressionParsingResultTypeName: {
				const [
					firstRemainingCharacterOfParsingResultOfLeftExpression,
					...restRemainingCharactersOfParsingResultOfLeftExpression
				] = parsingResultOfLeftExpression.remainingCharacters;
				if (
					firstRemainingCharacterOfParsingResultOfLeftExpression === undefined
				) {
					const finalizingParsingResultOfRightExpression =
						this.rightSubExpression.finalizeParsing(
							grammar,
							index,
							parsingTable,
						);
					switch (finalizingParsingResultOfRightExpression.typeName) {
						case unexpectedFinalizingExpressionFinalizingParsingResultTypeName: {
							const expressionParsingResult: UnexpectedFinalizingExpressionParsingResult =
								new UnexpectedFinalizingExpressionParsingResult();
							return expressionParsingResult;
						}
						case successExpressionFinalizingParsingResultTypeName: {
							const expressionParsingResult =
								new SuccessExpressionParsingResult(
									new ThenAtom(
										parsingResultOfLeftExpression.atom,
										finalizingParsingResultOfRightExpression.atom,
										new SpanIndexes(
											parsingResultOfLeftExpression.atom.spanIndexes.from,
											finalizingParsingResultOfRightExpression.atom.spanIndexes.until,
										),
									),
									parsingResultOfLeftExpression.nextIndex,
									parsingResultOfLeftExpression.remainingCharacters,
								);
							return expressionParsingResult;
						}
					}
				} else {
					const parsingResultOfRightExpression = this.rightSubExpression.parse(
						grammar,
						parsingResultOfLeftExpression.nextIndex,
						parsingTable,
						[
							firstRemainingCharacterOfParsingResultOfLeftExpression,
							...restRemainingCharactersOfParsingResultOfLeftExpression,
						],
					);
					switch (parsingResultOfRightExpression.typeName) {
						case unexpectedCharacterParsingResultTypeName: {
							const expressionParsingResult: UnexpectedCharacterExpressionParsingResult =
								new UnexpectedCharacterExpressionParsingResult(
									parsingResultOfRightExpression.index,
								);
							return expressionParsingResult;
						}
						case unexpectedFinalizingExpressionParsingResultTypeName: {
							const expressionParsingResult: UnexpectedFinalizingExpressionParsingResult =
								new UnexpectedFinalizingExpressionParsingResult();
							return expressionParsingResult;
						}
						case successExpressionParsingResultTypeName: {
							const expressionParsingResult =
								new SuccessExpressionParsingResult(
									new ThenAtom(
										parsingResultOfLeftExpression.atom,
										parsingResultOfRightExpression.atom,
										new SpanIndexes(
											parsingResultOfLeftExpression.atom.spanIndexes.from,
											parsingResultOfRightExpression.atom.spanIndexes.until,
										),
									),
									parsingResultOfRightExpression.nextIndex,
									parsingResultOfRightExpression.remainingCharacters,
								);
							return expressionParsingResult;
						}
					}
				}
			}
		}
	}
	public override partify(): readonly string[] {
		return [
			...this.leftSubExpression.partify(),
			...this.rightSubExpression.partify(),
		];
	}
	public readonly rightSubExpression: Expression<RightSubExpressionAtom>;
}
