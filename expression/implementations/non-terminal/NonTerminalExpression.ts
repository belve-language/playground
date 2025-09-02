import type {FinalizingParsingResult} from "../../../FinalizingParsingResult.ts";
import type {Grammar} from "../../../Grammar.ts";
import type {ParsingResult} from "../../../ParsingResult.ts";
import type {Rule} from "../../../Rule.ts";
import type {RuleById} from "../../../run.ts";
import type {ConcreteSyntaxTreeNode} from "../../../src/lib/concrete-syntax-tree-node/ConcreteSyntaxTreeNode.ts";
import {BranchConcreteSyntaxTreeNode} from "../../../src/lib/concrete-syntax-tree-node/implementations/branch/BranchConcreteSyntaxTreeNode.ts";
import type {LeafConcreteSyntaxTreeNode} from "../../../src/lib/concrete-syntax-tree-node/implementations/leaf/LeafConcreteSyntaxTreeNode.ts";
import type {Index} from "../../../src/lib/index/Index.ts";
import {Expression} from "../../Expression.ts";
export class NonTerminalExpression extends Expression<"nonTerminal"> {
	public constructor(rule: Rule) {
		super("nonTerminal");
		this.rule = rule;
	}
	public override checkIfRuleCanBeFinalInThisExpression(
		alreadyCheckedRules: ReadonlySet<Rule>,
		rule: Rule,
		ruleById: RuleById,
	): boolean {
		if (this.rule === rule) {
			return true;
		} else {
			return this.rule.checkIfRuleCanBeFinalInThisRule(
				alreadyCheckedRules,
				rule,
				ruleById,
			);
		}
	}
	public override checkIfThisExpressionCanBeEmpty(
		alreadyCheckedRules: ReadonlySet<Rule>,
		ruleById: RuleById,
	): boolean {
		return this.rule.checkIfCanBeEmpty(alreadyCheckedRules, ruleById);
	}
	public override computePossibleFirstingTerminalsOfThisExpression(
		alreadyCheckedRules: ReadonlySet<Rule>,
		ruleById: RuleById,
	): ReadonlySet<string> {
		const possibleFirstingTerminalsOfThisExpression =
			this.rule.computePossibleFirstingTerminalOfThisRule(
				alreadyCheckedRules,
				ruleById,
			);
		return possibleFirstingTerminalsOfThisExpression;
	}
	public override computePossibleFollowingTerminalsOfRuleInThisExpression(
		alreadyCheckedRules: ReadonlySet<Rule>,
		rule: Rule,
		ruleById: RuleById,
	): ReadonlySet<string> {
		const possibleFollowingTerminalsOfRuleInThisExpression =
			this.rule.computePossibleFollowingTerminalsOfGivenRuleInThisRule(
				alreadyCheckedRules,
				rule,
				ruleById,
			);
		return possibleFollowingTerminalsOfRuleInThisExpression;
	}
	public override finalizeParsing(
		grammar: Grammar,
	): FinalizingParsingResult<
		| BranchConcreteSyntaxTreeNode<
				readonly [
					ConcreteSyntaxTreeNode | null,
					...(readonly (ConcreteSyntaxTreeNode | null)[]),
				]
		  >
		| LeafConcreteSyntaxTreeNode<string>
	> {
		const finalizingParsingResult = this.rule.finalizeParsing(grammar);
		return finalizingParsingResult;
	}
	public override parse(
		grammar: Grammar,
		index: Index,
		remainingCharacters: readonly [string, ...(readonly string[])],
	): ParsingResult<
		| BranchConcreteSyntaxTreeNode<
				readonly [
					ConcreteSyntaxTreeNode | null,
					...(readonly (ConcreteSyntaxTreeNode | null)[]),
				]
		  >
		| LeafConcreteSyntaxTreeNode<string>
	> {
		const ruleParsingResult = this.rule.parse(
			grammar,
			index,
			remainingCharacters,
		);
		const parsingResult: ParsingResult<
			| BranchConcreteSyntaxTreeNode<
					readonly [
						ConcreteSyntaxTreeNode | null,
						...(readonly (ConcreteSyntaxTreeNode | null)[]),
					]
			  >
			| LeafConcreteSyntaxTreeNode<string>
		> = ruleParsingResult;
		return parsingResult;
	}
	private readonly rule: Rule;
}
