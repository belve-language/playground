import type {FinalizingParsingResult} from "../../../../../FinalizingParsingResult.ts";
import type {Grammar} from "../../../../../Grammar.ts";
import type {ParsingResult} from "../../../../../ParsingResult.ts";
import type {Rule} from "../../../../../Rule.ts";
import type {RuleById} from "../../../../../run.ts";
import type {ConcreteSyntaxTreeNode} from "../../../../../src/lib/concrete-syntax-tree-node/ConcreteSyntaxTreeNode.ts";
import {BranchConcreteSyntaxTreeNode} from "../../../../../src/lib/concrete-syntax-tree-node/implementations/branch/BranchConcreteSyntaxTreeNode.ts";
import type {EmptyExpression} from "../../../empty/EmptyExpression.ts";
import type {NonTerminalExpression} from "../../../non-terminal/NonTerminalExpression.ts";
import type {TerminalExpression} from "../../../terminal/TerminalExpression.ts";
import {ThenExpression} from "../../ThenExpression.ts";
export class FinalThenExpression extends ThenExpression<"final"> {
	public static createFromArray(
		expressions: readonly [
			EmptyExpression | NonTerminalExpression | TerminalExpression<string>,
			EmptyExpression | NonTerminalExpression | TerminalExpression<string>,
		],
	): FinalThenExpression {
		const [firstExpression, secondExpression] = expressions;
		return new FinalThenExpression(firstExpression, secondExpression);
	}
	private constructor(
		leftExpression:
			| EmptyExpression
			| NonTerminalExpression
			| TerminalExpression<string>,
		rightExpression:
			| EmptyExpression
			| NonTerminalExpression
			| TerminalExpression<string>,
	) {
		super("final");
		this.leftExpression = leftExpression;
		this.rightExpression = rightExpression;
	}
	public override checkIfRuleCanBeFinalInThisExpression(
		alreadyCheckedRules: ReadonlySet<Rule>,
		rule: Rule,
		ruleById: RuleById,
	): boolean {
		return (
			this.rightExpression.checkIfRuleCanBeFinalInThisExpression(
				alreadyCheckedRules,
				rule,
				ruleById,
			)
			|| (this.rightExpression.checkIfThisExpressionCanBeEmpty(
				new Set<Rule>(),
				ruleById,
			)
				&& this.leftExpression.checkIfRuleCanBeFinalInThisExpression(
					alreadyCheckedRules,
					rule,
					ruleById,
				))
		);
	}
	public override checkIfThisExpressionCanBeEmpty(
		alreadyCheckedRules: ReadonlySet<Rule>,
		ruleById: RuleById,
	): boolean {
		return (
			this.leftExpression.checkIfThisExpressionCanBeEmpty(
				alreadyCheckedRules,
				ruleById,
			)
			&& this.rightExpression.checkIfThisExpressionCanBeEmpty(
				alreadyCheckedRules,
				ruleById,
			)
		);
	}
	public override computePossibleFirstingTerminalsOfThisExpression(
		alreadyCheckedRules: ReadonlySet<Rule>,
		ruleById: RuleById,
	): ReadonlySet<string> {
		const leftExpressionFirstingTerminals =
			this.leftExpression.computePossibleFirstingTerminalsOfThisExpression(
				alreadyCheckedRules,
				ruleById,
			);
		if (
			this.leftExpression.checkIfThisExpressionCanBeEmpty(
				new Set<Rule>(),
				ruleById,
			)
		) {
			const rightExpressionFirstingTerminals =
				this.rightExpression.computePossibleFirstingTerminalsOfThisExpression(
					alreadyCheckedRules,
					ruleById,
				);
			return leftExpressionFirstingTerminals.union(
				rightExpressionFirstingTerminals,
			);
		} else {
			return leftExpressionFirstingTerminals;
		}
	}
	public override computePossibleFollowingTerminalsOfRuleInThisExpression(
		alreadyCheckedRules: ReadonlySet<Rule>,
		rule: Rule,
		ruleById: RuleById,
	): ReadonlySet<string> {
		const possibleFollowingTerminalsOfRuleInLeftExpression =
			this.leftExpression.computePossibleFollowingTerminalsOfRuleInThisExpression(
				alreadyCheckedRules,
				rule,
				ruleById,
			);
		const possibleFollowingTerminalsOfRuleInRightExpression =
			this.rightExpression.computePossibleFollowingTerminalsOfRuleInThisExpression(
				alreadyCheckedRules,
				rule,
				ruleById,
			);
		const possibleFollowingTerminalsOfRuleInSubExpressions =
			possibleFollowingTerminalsOfRuleInLeftExpression.union(
				possibleFollowingTerminalsOfRuleInRightExpression,
			);
		if (
			this.leftExpression.checkIfRuleCanBeFinalInThisExpression(
				new Set<Rule>(),
				rule,
				ruleById,
			)
		) {
			const possibleFirstingTerminalsOfRightExpression =
				this.rightExpression.computePossibleFirstingTerminalsOfThisExpression(
					new Set<Rule>(),
					ruleById,
				);
			const possibleFollowingTerminalsOfRuleInThisExpression =
				possibleFollowingTerminalsOfRuleInSubExpressions.union(
					possibleFirstingTerminalsOfRightExpression,
				);
			return possibleFollowingTerminalsOfRuleInThisExpression;
		} else {
			return possibleFollowingTerminalsOfRuleInSubExpressions;
		}
	}
	public override finalizeParsing(
		grammar: Grammar,
	): FinalizingParsingResult<
		BranchConcreteSyntaxTreeNode<
			readonly [ConcreteSyntaxTreeNode | null, ConcreteSyntaxTreeNode | null]
		>
	> {
		const finalizingParsingResultOfLeftExpression =
			this.leftExpression.finalizeParsing(grammar);
		const finalizingParsingResultOfRightExpression =
			this.rightExpression.finalizeParsing(grammar);
		const finalizingParsingResult: FinalizingParsingResult<
			BranchConcreteSyntaxTreeNode<
				readonly [ConcreteSyntaxTreeNode | null, ConcreteSyntaxTreeNode | null]
			>
		> = {
			node: new BranchConcreteSyntaxTreeNode([
				finalizingParsingResultOfLeftExpression.node,
				finalizingParsingResultOfRightExpression.node,
			]),
		};
		return finalizingParsingResult;
	}
	public readonly leftExpression:
		| EmptyExpression
		| NonTerminalExpression
		| TerminalExpression<string>;
	public override parse(
		grammar: Grammar,
		index: number,
		remainingCharacters: readonly [string, ...(readonly string[])],
	): ParsingResult<
		BranchConcreteSyntaxTreeNode<
			readonly [ConcreteSyntaxTreeNode | null, ConcreteSyntaxTreeNode | null]
		>
	> {
		const parsingResultOfLeftExpression = this.leftExpression.parse(
			grammar,
			index,
			remainingCharacters,
		);
		const [
			firstRemainingCharacterOfParsingResultOfLeftExpression,
			...restRemainingCharactersOfParsingResultOfLeftExpression
		] = parsingResultOfLeftExpression.remainingCharacters;
		if (firstRemainingCharacterOfParsingResultOfLeftExpression === undefined) {
			const finalizingParsingResultOfRightExpression =
				this.rightExpression.finalizeParsing(grammar);
			return {
				nextIndex: parsingResultOfLeftExpression.nextIndex,
				node: new BranchConcreteSyntaxTreeNode([
					parsingResultOfLeftExpression.node,
					finalizingParsingResultOfRightExpression.node,
				]),
				remainingCharacters: parsingResultOfLeftExpression.remainingCharacters,
			};
		} else {
			const parsingResultOfRightExpression = this.rightExpression.parse(
				grammar,
				parsingResultOfLeftExpression.nextIndex,
				[
					firstRemainingCharacterOfParsingResultOfLeftExpression,
					...restRemainingCharactersOfParsingResultOfLeftExpression,
				],
			);
			const parsingResult: ParsingResult<
				BranchConcreteSyntaxTreeNode<
					readonly [
						ConcreteSyntaxTreeNode | null,
						ConcreteSyntaxTreeNode | null,
					]
				>
			> = {
				nextIndex: parsingResultOfRightExpression.nextIndex,
				node: new BranchConcreteSyntaxTreeNode([
					parsingResultOfLeftExpression.node,
					parsingResultOfRightExpression.node,
				]),
				remainingCharacters: parsingResultOfRightExpression.remainingCharacters,
			};
			return parsingResult;
		}
	}
	public readonly rightExpression:
		| EmptyExpression
		| NonTerminalExpression
		| TerminalExpression<string>;
}
