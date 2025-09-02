import type {FinalizingParsingResult} from "../FinalizingParsingResult.ts";
import type {FirstSet} from "../FirstSet.ts";
import type {Grammar} from "../Grammar.ts";
import type {ParsingResult} from "../ParsingResult.ts";
import type {Rule} from "../Rule.ts";
import type {RuleById} from "../run.ts";
import type {ConcreteSyntaxTreeNode} from "../src/lib/concrete-syntax-tree-node/ConcreteSyntaxTreeNode.ts";
export abstract class Expression<TypeName extends string> {
	public constructor(typeName: TypeName) {
		this.typeName = typeName;
	}
	public abstract checkIfRuleCanBeFinalInThisExpression(
		alreadyCheckedRules: ReadonlySet<Rule>,
		rule: Rule,
		ruleById: RuleById,
	): boolean;
	public abstract checkIfThisExpressionCanBeEmpty(
		alreadyCheckedRules: ReadonlySet<Rule>,
		ruleById: RuleById,
	): boolean;
	public computeFirstSet(ruleById: RuleById): FirstSet {
		return {
			canBeEmpty: this.checkIfThisExpressionCanBeEmpty(
				new Set<Rule>(),
				ruleById,
			),
			terminals: this.computePossibleFirstingTerminalsOfThisExpression(
				new Set<Rule>(),
				ruleById,
			),
		};
	}
	public abstract computePossibleFirstingTerminalsOfThisExpression(
		alreadyCheckedRules: ReadonlySet<Rule>,
		ruleById: RuleById,
	): ReadonlySet<string>;
	public abstract computePossibleFollowingTerminalsOfRuleInThisExpression(
		alreadyCheckedRules: ReadonlySet<Rule>,
		rule: Rule,
		ruleById: RuleById,
	): ReadonlySet<string>;
	public abstract finalizeParsing(
		grammar: Grammar,
	): FinalizingParsingResult<ConcreteSyntaxTreeNode | null>;
	public abstract parse(
		grammar: Grammar,
		index: number,
		remainingCharacters: readonly [string, ...(readonly string[])],
	): ParsingResult<ConcreteSyntaxTreeNode | null>;
	public readonly typeName: TypeName;
}
