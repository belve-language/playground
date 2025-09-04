import type {FinalizingParsingResult} from "../../../FinalizingParsingResult.ts";
import type {Grammar} from "../../../Grammar.ts";
import type {ParsingResult} from "../../../ParsingResult.ts";
import type {ParsingTableRows} from "../../../ParsingTableRows.ts";
import type {Rule} from "../../../Rule.ts";
import type {RuleById} from "../../../run.ts";
import type {ConcreteSyntaxTreeNode} from "../../../src/lib/concrete-syntax-tree-node/ConcreteSyntaxTreeNode.ts";
import {Expression} from "../../Expression.ts";
export class EmptyExpression extends Expression<"empty"> {
	public constructor() {
		super("empty");
	}
	public override checkIfRuleCanBeFinalInThisExpression(
		alreadyCheckedRules: ReadonlySet<Rule>,
		rule: Rule,
		ruleById: RuleById,
	): boolean {
		return false;
	}
	public override checkIfThisExpressionCanBeEmpty(
		alreadyCheckedRules: ReadonlySet<Rule>,
		ruleById: RuleById,
	): boolean {
		return true;
	}
	public override computePossibleFirstingTerminalsOfThisExpression(
		alreadyCheckedRules: ReadonlySet<Rule>,
		ruleById: RuleById,
	): ReadonlySet<string> {
		return new Set<string>();
	}
	public override computePossibleFollowingTerminalsOfRuleInThisExpression(
		alreadyCheckedRules: ReadonlySet<Rule>,
		rule: Rule,
		ruleById: RuleById,
	): ReadonlySet<string> {
		return new Set<string>();
	}
	public override finalizeParsing(
		grammar: Grammar,
		parsingTableRows: ParsingTableRows,
	): FinalizingParsingResult<ConcreteSyntaxTreeNode | null> {
		const finalizingParsingResult: FinalizingParsingResult<null> = {node: null};
		return finalizingParsingResult;
	}
	public override parse(
		grammar: Grammar,
		index: number,
		parsingTableRows: ParsingTableRows,
		remainingCharacters: readonly [string, ...(readonly string[])],
	): ParsingResult<null> {
		const parsingResult: ParsingResult<null> = {
			nextIndex: index,
			node: null,
			remainingCharacters,
		};
		return parsingResult;
	}
}
