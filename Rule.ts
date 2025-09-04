import type {FinalizingParsingResult} from "./FinalizingParsingResult.ts";
import type {Grammar} from "./Grammar.ts";
import type {ParsingResult} from "./ParsingResult.ts";
import {ParsingTableRow} from "./ParsingTableRow.ts";
import type {ParsingTableRows} from "./ParsingTableRows.ts";
import type {Expression} from "./expression/Expression.ts";
import type {ThenExpression} from "./expression/implementations/then/ThenExpression.ts";
import type {RuleById} from "./run.ts";
import type {ConcreteSyntaxTreeNode} from "./src/lib/concrete-syntax-tree-node/ConcreteSyntaxTreeNode.ts";
import {BranchConcreteSyntaxTreeNode} from "./src/lib/concrete-syntax-tree-node/implementations/branch/BranchConcreteSyntaxTreeNode.ts";
import type {LeafConcreteSyntaxTreeNode} from "./src/lib/concrete-syntax-tree-node/implementations/leaf/LeafConcreteSyntaxTreeNode.ts";
import type {Index} from "./src/lib/index/Index.ts";
export abstract class Rule {
	protected constructor() {}
	public abstract buildNode(
		childNode: ConcreteSyntaxTreeNode | null,
	):
		| BranchConcreteSyntaxTreeNode<
				readonly [
					ConcreteSyntaxTreeNode | null,
					...(readonly (ConcreteSyntaxTreeNode | null)[]),
				]
		  >
		| LeafConcreteSyntaxTreeNode<string>;
	public checkIfCanBeEmpty(
		alreadyCheckedRules: ReadonlySet<Rule>,
		ruleById: RuleById,
	): boolean {
		if (alreadyCheckedRules.has(this)) {
			return false;
		} else {
			const rightExpressions = this.getRightExpressions(ruleById);
			return rightExpressions.some((expression) => {
				return expression.checkIfThisExpressionCanBeEmpty(
					alreadyCheckedRules.union(new Set<Rule>([this])),
					ruleById,
				);
			});
		}
	}
	public checkIfRuleCanBeFinalInThisRule(
		alreadyCheckedRules: ReadonlySet<Rule>,
		rule: Rule,
		ruleById: RuleById,
	): boolean {
		if (alreadyCheckedRules.has(this)) {
			return false;
		} else {
			const rightExpressions = this.getRightExpressions(ruleById);
			return rightExpressions.some((expression) => {
				return expression.checkIfRuleCanBeFinalInThisExpression(
					alreadyCheckedRules.union(new Set<Rule>([this])),
					rule,
					ruleById,
				);
			});
		}
	}
	public computePossibleFirstingTerminalOfThisRule(
		alreadyCheckedRules: ReadonlySet<Rule>,
		ruleById: RuleById,
	): ReadonlySet<string> {
		if (alreadyCheckedRules.has(this)) {
			return new Set<string>();
		} else {
			const rightExpressions = this.getRightExpressions(ruleById);
			const possibleFirstingTerminalsOfThisRule = rightExpressions.reduce<
				ReadonlySet<string>
			>((accumulatedPossibleFirstingTerminals, expression) => {
				const possibleFirstingTerminalsOfThisExpression =
					expression.computePossibleFirstingTerminalsOfThisExpression(
						alreadyCheckedRules.union(new Set<Rule>([this])),
						ruleById,
					);
				const newAccumulatedPossibleFirstingTerminals =
					accumulatedPossibleFirstingTerminals.union(
						possibleFirstingTerminalsOfThisExpression,
					);
				return newAccumulatedPossibleFirstingTerminals;
			}, new Set<string>());
			return possibleFirstingTerminalsOfThisRule;
		}
	}
	public computePossibleFollowingTerminalsOfGivenRuleInThisRule(
		alreadyCheckedRules: ReadonlySet<Rule>,
		rule: Rule,
		ruleById: RuleById,
	): ReadonlySet<string> {
		if (alreadyCheckedRules.has(this)) {
			return new Set<string>();
		} else {
			const rightExpressions = this.getRightExpressions(ruleById);
			const possibleFollowingTerminalsOfGivenRule = rightExpressions.reduce<
				ReadonlySet<string>
			>((accumulatedPossibleFollowingTerminalsOfGivenRule, expression) => {
				const possibleFollowingTerminalsOfGivenRuleInExpression =
					expression.computePossibleFollowingTerminalsOfRuleInThisExpression(
						alreadyCheckedRules.union(new Set<Rule>([this])),
						rule,
						ruleById,
					);
				return accumulatedPossibleFollowingTerminalsOfGivenRule.union(
					possibleFollowingTerminalsOfGivenRuleInExpression,
				);
			}, new Set<string>());
			return possibleFollowingTerminalsOfGivenRule;
		}
	}
	public finalizeParsing(
		grammar: Grammar,
		parsingTableRows: ParsingTableRows,
	): FinalizingParsingResult<
		| BranchConcreteSyntaxTreeNode<
				readonly [
					ConcreteSyntaxTreeNode | null,
					...(readonly (ConcreteSyntaxTreeNode | null)[]),
				]
		  >
		| LeafConcreteSyntaxTreeNode<string>
	> {
		const parsingTableRow = parsingTableRows.get(this) as ParsingTableRow;
		const expression = parsingTableRow.finalization;
		if (expression === null) {
			throw new Error(`Unexpected end of input when parsing rule "${this}"`);
		} else {
			const expressionFinalizingParsingResult = expression.finalizeParsing(
				grammar,
				parsingTableRows,
			);
			const node = this.buildNode(expressionFinalizingParsingResult.node);
			const finalizingParsingResult: FinalizingParsingResult<
				| BranchConcreteSyntaxTreeNode<
						readonly [
							ConcreteSyntaxTreeNode | null,
							...(readonly (ConcreteSyntaxTreeNode | null)[]),
						]
				  >
				| LeafConcreteSyntaxTreeNode<string>
			> = {node: node};
			return finalizingParsingResult;
		}
	}
	public abstract getRightExpressions(
		ruleById: RuleById,
	): readonly [ThenExpression<string>, ...(readonly ThenExpression<string>[])];
	public parse(
		grammar: Grammar,
		index: Index,
		parsingTableRows: ParsingTableRows,
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
		const [firstCharacter, ...restCharacters] = remainingCharacters;
		const parsingTableRow = parsingTableRows.get(this) as ParsingTableRow;
		const expression = parsingTableRow.terminals[firstCharacter];
		if (expression === undefined) {
			throw new Error(
				`Unexpected character "${firstCharacter}" at index ${index.toString(10)}`,
			);
		} else {
			const expressionParsingResult = expression.parse(
				grammar,
				index,
				parsingTableRows,
				[firstCharacter, ...restCharacters],
			);
			const node = this.buildNode(expressionParsingResult.node);
			const parsingResult = {
				nextIndex: expressionParsingResult.nextIndex,
				node: node,
				remainingCharacters: expressionParsingResult.remainingCharacters,
			};
			return parsingResult;
		}
	}
}
