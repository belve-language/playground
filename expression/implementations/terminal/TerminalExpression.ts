import type {Grammar} from "../../../Grammar.ts";
import type {ParsingResult} from "../../../ParsingResult.ts";
import type {Rule} from "../../../Rule.ts";
import type {RuleById} from "../../../run.ts";
import {LeafConcreteSyntaxTreeNode} from "../../../src/lib/concrete-syntax-tree-node/implementations/leaf/LeafConcreteSyntaxTreeNode.ts";
import {Expression} from "../../Expression.ts";
export class TerminalExpression<
	Terminal extends string,
> extends Expression<"terminal"> {
	public constructor(terminal: Terminal) {
		super("terminal");
		this.terminal = terminal;
	}
	public override checkIfRuleCanBeFinalInThisExpression(
		alreadyCheckedRules: ReadonlySet<Rule>,
		rule: Rule,
		ruleById: RuleById,
	): boolean {
		return false;
	}
	public override checkIfThisExpressionCanBeEmpty(): boolean {
		return false;
	}
	public override computePossibleFirstingTerminalsOfThisExpression(): ReadonlySet<string> {
		return new Set<string>([this.terminal]);
	}
	public override computePossibleFollowingTerminalsOfRuleInThisExpression(
		alreadyCheckedRules: ReadonlySet<Rule>,
		rule: Rule,
		ruleById: RuleById,
	): ReadonlySet<string> {
		return new Set<string>();
	}
	public override finalizeParsing(): never {
		throw new Error("Parsing error: Unexpected end of input");
	}
	public override parse(
		grammar: Grammar,
		index: number,
		remainingCharacters: readonly [string, ...(readonly string[])],
	): ParsingResult<LeafConcreteSyntaxTreeNode<Terminal>> {
		const [firstRemainingCharacter, ...restRemainingCharacters] =
			remainingCharacters;
		if (firstRemainingCharacter === this.terminal) {
			const parsingResult: ParsingResult<LeafConcreteSyntaxTreeNode<Terminal>> =
				{
					nextIndex: index + 1,
					node: new LeafConcreteSyntaxTreeNode(this.terminal, index),
					remainingCharacters: restRemainingCharacters,
				};
			return parsingResult;
		} else {
			throw new Error(
				`Parsing failed: Unexpected character ${JSON.stringify(firstRemainingCharacter)} at index ${index.toString()}, expected ${JSON.stringify(this.terminal)}`,
			);
		}
	}
	public readonly terminal: Terminal;
}
