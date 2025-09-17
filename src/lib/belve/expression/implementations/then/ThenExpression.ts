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
		alreadyCheckedRules: ReadonlySet<Rule<Atom, ConcreteSyntaxTreeNode<Atom>>>,
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
		alreadyCheckedRules: ReadonlySet<Rule<Atom, ConcreteSyntaxTreeNode<Atom>>>,
		rule: Rule<Atom, ConcreteSyntaxTreeNode<Atom>>,
		ruleById: RuleById,
	): boolean {
		return (
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
				))
		);
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
		if (
			this.leftSubExpression.checkIfCanBeEmpty(
				new Set<Rule<Atom, ConcreteSyntaxTreeNode<Atom>>>(),
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
		alreadyCheckedRules: ReadonlySet<Rule<Atom, ConcreteSyntaxTreeNode<Atom>>>,
		rule: Rule<Atom, ConcreteSyntaxTreeNode<Atom>>,
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
				new Set<Rule<Atom, ConcreteSyntaxTreeNode<Atom>>>(),
				rule,
				ruleById,
			)
		) {
			const RightExpressionpossibleFirstingTerminals =
				this.rightSubExpression.computePossibleFirstingTerminals(
					new Set<Rule<Atom, ConcreteSyntaxTreeNode<Atom>>>(),
					ruleById,
				);
			const possibleFollowingTerminalsInThisExpression =
				possibleFollowingTerminalsInSubExpressions.union(
					RightExpressionpossibleFirstingTerminals,
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
		const LeftExpressionfinalizingParsingResult =
			this.leftSubExpression.finalizeParsing(grammar, index, parsingTable);
		const a = LeftExpressionfinalizingParsingResult;
		switch (LeftExpressionfinalizingParsingResult.typeName) {
			case successExpressionFinalizingParsingResultTypeName: {
				const RightExpressionfinalizingParsingResult =
					this.rightSubExpression.finalizeParsing(grammar, index, parsingTable);
				switch (RightExpressionfinalizingParsingResult.typeName) {
					case successExpressionFinalizingParsingResultTypeName: {
						const thenAtom = ThenAtom.create(
							LeftExpressionfinalizingParsingResult.atom,
							RightExpressionfinalizingParsingResult.atom,
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
		const LeftExpressionparsingResult = this.leftSubExpression.parse(
			grammar,
			index,
			parsingTable,
			remainingCharacters,
		);
		switch (LeftExpressionparsingResult.typeName) {
			case unexpectedCharacterParsingResultTypeName: {
				const parsingResult: UnexpectedCharacterExpressionParsingResult =
					new UnexpectedCharacterExpressionParsingResult(
						LeftExpressionparsingResult.index,
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
					ParsingResultLeftExpressionfirstRemainingCharacter,
					...ParsingResultLeftExpressionrestRemainingCharacters
				] = LeftExpressionparsingResult.remainingCharacters;
				if (ParsingResultLeftExpressionfirstRemainingCharacter === undefined) {
					const RightExpressionfinalizingParsingResult =
						this.rightSubExpression.finalizeParsing(
							grammar,
							index,
							parsingTable,
						);
					switch (RightExpressionfinalizingParsingResult.typeName) {
						case unexpectedFinalizingExpressionFinalizingParsingResultTypeName: {
							const expressionParsingResult: UnexpectedFinalizingExpressionParsingResult =
								new UnexpectedFinalizingExpressionParsingResult();
							return expressionParsingResult;
						}
						case successExpressionFinalizingParsingResultTypeName: {
							const expressionParsingResult =
								new SuccessExpressionParsingResult(
									ThenAtom.create(
										LeftExpressionparsingResult.atom,
										RightExpressionfinalizingParsingResult.atom,
									),
									LeftExpressionparsingResult.nextIndex,
									LeftExpressionparsingResult.remainingCharacters,
								);
							return expressionParsingResult;
						}
					}
				} else {
					const RightExpressionparsingResult = this.rightSubExpression.parse(
						grammar,
						LeftExpressionparsingResult.nextIndex,
						parsingTable,
						[
							ParsingResultLeftExpressionfirstRemainingCharacter,
							...ParsingResultLeftExpressionrestRemainingCharacters,
						],
					);
					switch (RightExpressionparsingResult.typeName) {
						case unexpectedCharacterParsingResultTypeName: {
							const expressionParsingResult: UnexpectedCharacterExpressionParsingResult =
								new UnexpectedCharacterExpressionParsingResult(
									RightExpressionparsingResult.index,
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
									ThenAtom.create(
										LeftExpressionparsingResult.atom,
										RightExpressionparsingResult.atom,
									),
									RightExpressionparsingResult.nextIndex,
									RightExpressionparsingResult.remainingCharacters,
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
