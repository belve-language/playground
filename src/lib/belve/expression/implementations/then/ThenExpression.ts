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
		alreadyCheckedRules: ReadonlySet<Rule<Atom, ConcreteSyntaxTreeNode<Atom>>>,
		ruleById: RuleById,
	): boolean {
		const canBeEmpty =
			this.leftSubExpression.checkIfCanBeEmpty(alreadyCheckedRules, ruleById)
			&& this.rightSubExpression.checkIfCanBeEmpty(
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
		const ruleCanBeFinal =
			this.rightSubExpression.checkIfRuleCanBeFinal(
				alreadyCheckedRules,
				rule,
				ruleById,
			)
			|| (this.rightSubExpression.checkIfCanBeEmpty(
				new Set<Rule<Atom, ConcreteSyntaxTreeNode<Atom>>>(),
				ruleById,
			)
				&& this.leftSubExpression.checkIfRuleCanBeFinal(
					alreadyCheckedRules,
					rule,
					ruleById,
				));
		return ruleCanBeFinal;
	}
	public override computePossibleFirstingTerminals(
		alreadyCheckedRules: ReadonlySet<Rule<Atom, ConcreteSyntaxTreeNode<Atom>>>,
		ruleById: RuleById,
	): ReadonlySet<string> {
		const leftSubExpressionFirstingTerminals =
			this.leftSubExpression.computePossibleFirstingTerminals(
				alreadyCheckedRules,
				ruleById,
			);
		const leftSubExpressionCanBeEmpty =
			this.leftSubExpression.checkIfCanBeEmpty(
				new Set<Rule<Atom, ConcreteSyntaxTreeNode<Atom>>>(),
				ruleById,
			);
		if (leftSubExpressionCanBeEmpty) {
			const rightSubExpressionFirstingTerminals =
				this.rightSubExpression.computePossibleFirstingTerminals(
					alreadyCheckedRules,
					ruleById,
				);
			const expressionFirstingTerminals: ReadonlySet<string> =
				leftSubExpressionFirstingTerminals.union(
					rightSubExpressionFirstingTerminals,
				);
			return expressionFirstingTerminals;
		} else {
			return leftSubExpressionFirstingTerminals;
		}
	}
	public override computePossibleFollowingTerminals(
		alreadyCheckedRules: ReadonlySet<Rule<Atom, ConcreteSyntaxTreeNode<Atom>>>,
		rule: Rule<Atom, ConcreteSyntaxTreeNode<Atom>>,
		ruleById: RuleById,
	): ReadonlySet<string> {
		const leftSubExpressionPossibleFollowingTerminals =
			this.leftSubExpression.computePossibleFollowingTerminals(
				alreadyCheckedRules,
				rule,
				ruleById,
			);
		const rightSubExpressionPossibleFollowingTerminals =
			this.rightSubExpression.computePossibleFollowingTerminals(
				alreadyCheckedRules,
				rule,
				ruleById,
			);
		const subExpressionsPossibleFollowingTerminals =
			leftSubExpressionPossibleFollowingTerminals.union(
				rightSubExpressionPossibleFollowingTerminals,
			);
		const leftSubExpressionCanRuleBeFinal =
			this.leftSubExpression.checkIfRuleCanBeFinal(
				new Set<Rule<Atom, ConcreteSyntaxTreeNode<Atom>>>(),
				rule,
				ruleById,
			);
		if (leftSubExpressionCanRuleBeFinal) {
			const rightSubExpressionPossibleFirstingTerminals =
				this.rightSubExpression.computePossibleFirstingTerminals(
					new Set<Rule<Atom, ConcreteSyntaxTreeNode<Atom>>>(),
					ruleById,
				);
			const expressionPossibleFollowingTerminals: ReadonlySet<string> =
				subExpressionsPossibleFollowingTerminals.union(
					rightSubExpressionPossibleFirstingTerminals,
				);
			return expressionPossibleFollowingTerminals;
		} else {
			const expressionPossibleFollowingTerminals: ReadonlySet<string> =
				subExpressionsPossibleFollowingTerminals;
			return expressionPossibleFollowingTerminals;
		}
	}
	public override finalizeParsing(
		grammar: Grammar<ConcreteSyntaxTreeNode<Atom>>,
		index: number,
		parsingTable: ParsingTable,
	): SupportedExpressionFinalizingParsingResult<
		ThenAtom<LeftSubExpressionAtom, RightSubExpressionAtom>
	> {
		const leftSubExpressionFinalizingParsingResult =
			this.leftSubExpression.finalizeParsing(grammar, index, parsingTable);
		switch (leftSubExpressionFinalizingParsingResult.typeName) {
			case successExpressionFinalizingParsingResultTypeName: {
				const rightSubExpressionFinalizingParsingResult =
					this.rightSubExpression.finalizeParsing(grammar, index, parsingTable);
				switch (rightSubExpressionFinalizingParsingResult.typeName) {
					case successExpressionFinalizingParsingResultTypeName: {
						const atom = ThenAtom.create(
							leftSubExpressionFinalizingParsingResult.atom,
							rightSubExpressionFinalizingParsingResult.atom,
						);
						const finalizingParsingResult =
							new SuccessExpressionFinalizingParsingResult<
								ThenAtom<LeftSubExpressionAtom, RightSubExpressionAtom>
							>(atom);
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
		const leftSubExpressionParsingResult = this.leftSubExpression.parse(
			grammar,
			index,
			parsingTable,
			remainingCharacters,
		);
		switch (leftSubExpressionParsingResult.typeName) {
			case unexpectedCharacterParsingResultTypeName: {
				const expressionParsingResult: UnexpectedCharacterExpressionParsingResult =
					new UnexpectedCharacterExpressionParsingResult(
						leftSubExpressionParsingResult.index,
					);
				return expressionParsingResult;
			}
			case unexpectedFinalizingExpressionParsingResultTypeName: {
				const expressionParsingResult: UnexpectedFinalizingExpressionParsingResult =
					new UnexpectedFinalizingExpressionParsingResult();
				return expressionParsingResult;
			}
			case successExpressionParsingResultTypeName: {
				const [
					leftSubExpressionParsingResultFirstRemainingCharacter,
					...leftSubExpressionParsingResultRestRemainingCharacters
				] = leftSubExpressionParsingResult.remainingCharacters;
				if (
					leftSubExpressionParsingResultFirstRemainingCharacter === undefined
				) {
					const rightSubExpressionFinalizingParsingResult =
						this.rightSubExpression.finalizeParsing(
							grammar,
							index,
							parsingTable,
						);
					switch (rightSubExpressionFinalizingParsingResult.typeName) {
						case unexpectedFinalizingExpressionFinalizingParsingResultTypeName: {
							const expressionParsingResult: UnexpectedFinalizingExpressionParsingResult =
								new UnexpectedFinalizingExpressionParsingResult();
							return expressionParsingResult;
						}
						case successExpressionFinalizingParsingResultTypeName: {
							const expressionParsingResult =
								new SuccessExpressionParsingResult<
									ThenAtom<LeftSubExpressionAtom, RightSubExpressionAtom>
								>(
									ThenAtom.create<
										LeftSubExpressionAtom,
										RightSubExpressionAtom
									>(
										leftSubExpressionParsingResult.atom,
										rightSubExpressionFinalizingParsingResult.atom,
									),
									leftSubExpressionParsingResult.nextIndex,
									leftSubExpressionParsingResult.remainingCharacters,
								);
							return expressionParsingResult;
						}
					}
				} else {
					const rightSubExpressionParsingResult = this.rightSubExpression.parse(
						grammar,
						leftSubExpressionParsingResult.nextIndex,
						parsingTable,
						[
							leftSubExpressionParsingResultFirstRemainingCharacter,
							...leftSubExpressionParsingResultRestRemainingCharacters,
						],
					);
					switch (rightSubExpressionParsingResult.typeName) {
						case unexpectedCharacterParsingResultTypeName: {
							const expressionParsingResult: UnexpectedCharacterExpressionParsingResult =
								new UnexpectedCharacterExpressionParsingResult(
									rightSubExpressionParsingResult.index,
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
								new SuccessExpressionParsingResult<
									ThenAtom<LeftSubExpressionAtom, RightSubExpressionAtom>
								>(
									ThenAtom.create<
										LeftSubExpressionAtom,
										RightSubExpressionAtom
									>(
										leftSubExpressionParsingResult.atom,
										rightSubExpressionParsingResult.atom,
									),
									rightSubExpressionParsingResult.nextIndex,
									rightSubExpressionParsingResult.remainingCharacters,
								);
							return expressionParsingResult;
						}
					}
				}
			}
		}
	}
	public readonly rightSubExpression: Expression<RightSubExpressionAtom>;
	public override stringifyToBackusNaurForm(): readonly [
		string,
		...(readonly string[]),
	] {
		const stringifiedExpression: readonly [string, ...(readonly string[])] = [
			...this.leftSubExpression.stringifyToBackusNaurForm(),
			...this.rightSubExpression.stringifyToBackusNaurForm(),
		];
		return stringifiedExpression;
	}
}
