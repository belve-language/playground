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
export class SingleThenExpression extends ThenExpression<"single"> {
	public static createFromArray(
		expressions: readonly [
			EmptyExpression | NonTerminalExpression | TerminalExpression<string>,
		],
	): SingleThenExpression {
		const [expression] = expressions;
		return new SingleThenExpression(expression);
	}
	private constructor(
		expression:
			| EmptyExpression
			| NonTerminalExpression
			| TerminalExpression<string>,
	) {
		super("single");
		this.expression = expression;
	}
	public override checkIfRuleCanBeFinalInThisExpression(
		alreadyCheckedRules: ReadonlySet<Rule>,
		rule: Rule,
		ruleById: RuleById,
	): boolean {
		return this.expression.checkIfRuleCanBeFinalInThisExpression(
			alreadyCheckedRules,
			rule,
			ruleById,
		);
	}
	public override checkIfThisExpressionCanBeEmpty(
		alreadyCheckedRules: ReadonlySet<Rule>,
		ruleById: RuleById,
	): boolean {
		return this.expression.checkIfThisExpressionCanBeEmpty(
			alreadyCheckedRules,
			ruleById,
		);
	}
	public override computePossibleFirstingTerminalsOfThisExpression(
		alreadyCheckedRules: ReadonlySet<Rule>,
		ruleById: RuleById,
	): ReadonlySet<string> {
		return this.expression.computePossibleFirstingTerminalsOfThisExpression(
			alreadyCheckedRules,
			ruleById,
		);
	}
	public override computePossibleFollowingTerminalsOfRuleInThisExpression(
		alreadyCheckedRules: ReadonlySet<Rule>,
		rule: Rule,
		ruleById: RuleById,
	): ReadonlySet<string> {
		return this.expression.computePossibleFollowingTerminalsOfRuleInThisExpression(
			alreadyCheckedRules,
			rule,
			ruleById,
		);
	}
	private readonly expression:
		| EmptyExpression
		| NonTerminalExpression
		| TerminalExpression<string>;
	public override finalizeParsing(
		grammar: Grammar,
	): FinalizingParsingResult<
		BranchConcreteSyntaxTreeNode<readonly [ConcreteSyntaxTreeNode | null]>
	> {
		const finalizingParsingResultOfExpression =
			this.expression.finalizeParsing(grammar);
		const finalizingParsingResult: FinalizingParsingResult<
			BranchConcreteSyntaxTreeNode<readonly [ConcreteSyntaxTreeNode | null]>
		> = {
			node: new BranchConcreteSyntaxTreeNode([
				finalizingParsingResultOfExpression.node,
			]),
		};
		return finalizingParsingResult;
	}
	public override parse(
		grammar: Grammar,
		index: number,
		remainingCharacters: readonly [string, ...(readonly string[])],
	): ParsingResult<
		BranchConcreteSyntaxTreeNode<readonly [ConcreteSyntaxTreeNode | null]>
	> {
		const parsingResultOfExpression = this.expression.parse(
			grammar,
			index,
			remainingCharacters,
		);
		const parsingResult: ParsingResult<
			BranchConcreteSyntaxTreeNode<readonly [ConcreteSyntaxTreeNode | null]>
		> = {
			nextIndex: parsingResultOfExpression.nextIndex,
			node: new BranchConcreteSyntaxTreeNode([parsingResultOfExpression.node]),
			remainingCharacters: parsingResultOfExpression.remainingCharacters,
		};
		return parsingResult;
	}
}
