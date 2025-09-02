import {Grammar} from "./Grammar.ts";
import {Parser} from "./Parser.ts";
import {Rule} from "./Rule.ts";
import type {Expression} from "./expression/Expression.ts";
import {EmptyExpression} from "./expression/implementations/empty/EmptyExpression.ts";
import {NonTerminalExpression} from "./expression/implementations/non-terminal/NonTerminalExpression.ts";
import {TerminalExpression} from "./expression/implementations/terminal/TerminalExpression.ts";
import {FinalThenExpression} from "./expression/implementations/then/implementations/final/FinalThenExpression.ts";
import {IntermediateThenExpression} from "./expression/implementations/then/implementations/intermediate/IntermediateThenExpression.ts";
import {SingleThenExpression} from "./expression/implementations/then/implementations/single/SingleThenExpression.ts";
import {BranchConcreteSyntaxTreeNode} from "./src/lib/concrete-syntax-tree-node/implementations/branch/BranchConcreteSyntaxTreeNode.ts";
import {LeafConcreteSyntaxTreeNode} from "./src/lib/concrete-syntax-tree-node/implementations/leaf/LeafConcreteSyntaxTreeNode.ts";
import type {Index} from "./src/lib/index/Index.ts";
class BlockRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<BlockBranchConcreteSyntaxTreeNodeChildren>,
	): BlockBranchConcreteSyntaxTreeNode {
		const node = new BlockBranchConcreteSyntaxTreeNode(rawNode.children);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			IntermediateThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.OpeningCurlyBracketCharacter),
				new NonTerminalExpression(ruleById.OptionalBlockContent),
				new NonTerminalExpression(ruleById.ClosingCurlyBracketCharacter),
				new NonTerminalExpression(ruleById.OptionalWhitespace),
			]),
		] as const;
	}
}
class BlockContentRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<BlockContentBranchConcreteSyntaxTreeNodeChildren>,
	): BlockContentBranchConcreteSyntaxTreeNode {
		const node = new BlockContentBranchConcreteSyntaxTreeNode(rawNode.children);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.PaddedOptionalStatements),
			]),
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.Statements),
			]),
		] as const;
	}
}
class BlockStatementRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<BlockStatementBranchConcreteSyntaxTreeNodeChildren>,
	): BlockStatementBranchConcreteSyntaxTreeNode {
		const node = new BlockStatementBranchConcreteSyntaxTreeNode(
			rawNode.children,
		);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.Block),
			]),
		] as const;
	}
}
class ClosingCurlyBracketCharacterRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<
			readonly [
				LeafConcreteSyntaxTreeNode<ClosingCurlyBracketCharacterLeafConcreteSyntaxTreeNodeCharacter>,
			]
		>,
	): ClosingCurlyBracketCharacterLeafConcreteSyntaxTreeNode {
		const node = new ClosingCurlyBracketCharacterLeafConcreteSyntaxTreeNode(
			rawNode.children[0].character,
			rawNode.children[0].index,
		);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([new TerminalExpression("}")]),
		] as const;
	}
}
class ClosingRoundBracketCharacterRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<
			readonly [
				LeafConcreteSyntaxTreeNode<ClosingRoundBracketCharacterLeafConcreteSyntaxTreeNodeCharacter>,
			]
		>,
	): ClosingRoundBracketCharacterLeafConcreteSyntaxTreeNode {
		const node = new ClosingRoundBracketCharacterLeafConcreteSyntaxTreeNode(
			rawNode.children[0].character,
			rawNode.children[0].index,
		);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([new TerminalExpression(")")]),
		] as const;
	}
}
class ClosingSquareBracketCharacterRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<
			readonly [
				LeafConcreteSyntaxTreeNode<ClosingSquareBracketCharacterLeafConcreteSyntaxTreeNodeCharacter>,
			]
		>,
	): ClosingSquareBracketCharacterLeafConcreteSyntaxTreeNode {
		const node = new ClosingSquareBracketCharacterLeafConcreteSyntaxTreeNode(
			rawNode.children[0].character,
			rawNode.children[0].index,
		);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([new TerminalExpression("]")]),
		] as const;
	}
}
class OptionalContentRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<OptionalContentBranchConcreteSyntaxTreeNodeChildren>,
	): OptionalContentBranchConcreteSyntaxTreeNode {
		const node = new OptionalContentBranchConcreteSyntaxTreeNode(
			rawNode.children,
		);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.Content),
			]),
			SingleThenExpression.createFromArray([new EmptyExpression()]),
		] as const;
	}
}
class ContentRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<ContentBranchConcreteSyntaxTreeNodeChildren>,
	): ContentBranchConcreteSyntaxTreeNode {
		const node = new ContentBranchConcreteSyntaxTreeNode(rawNode.children);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.PaddedOptionalFunctions),
			]),
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.Functions),
			]),
		] as const;
	}
}
class FunctionRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<FunctionBranchConcreteSyntaxTreeNodeChildren>,
	): FunctionBranchConcreteSyntaxTreeNode {
		const node = new FunctionBranchConcreteSyntaxTreeNode(rawNode.children);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			FinalThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.OptionalFunctionHeader),
				new NonTerminalExpression(ruleById.FunctionBody),
			]),
		] as const;
	}
}
class FunctionBodyRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<FunctionBodyBranchConcreteSyntaxTreeNodeChildren>,
	): FunctionBodyBranchConcreteSyntaxTreeNode {
		const node = new FunctionBodyBranchConcreteSyntaxTreeNode(rawNode.children);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.Block),
			]),
		] as const;
	}
}
class FunctionCallRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<FunctionCallBranchConcreteSyntaxTreeNodeChildren>,
	): FunctionCallBranchConcreteSyntaxTreeNode {
		const node = new FunctionCallBranchConcreteSyntaxTreeNode(rawNode.children);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.FunctionCallSegments),
			]),
		] as const;
	}
}
class FunctionCallSegmentsRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<FunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren>,
	): FunctionCallSegmentsBranchConcreteSyntaxTreeNode {
		const node = new FunctionCallSegmentsBranchConcreteSyntaxTreeNode(
			rawNode.children,
		);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(
					ruleById.StartingWithKnownFunctionCallSegments,
				),
			]),
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(
					ruleById.StartingWithUnknownFunctionCallSegments,
				),
			]),
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(
					ruleById.StartingWithWordFunctionCallSegments,
				),
			]),
		] as const;
	}
}
class FunctionCallStatementRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<FunctionCallStatementBranchConcreteSyntaxTreeNodeChildren>,
	): FunctionCallStatementBranchConcreteSyntaxTreeNode {
		const node = new FunctionCallStatementBranchConcreteSyntaxTreeNode(
			rawNode.children,
		);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.FunctionCall),
			]),
		] as const;
	}
}
class FunctionHeaderRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<FunctionHeaderBranchConcreteSyntaxTreeNodeChildren>,
	): FunctionHeaderBranchConcreteSyntaxTreeNode {
		const node = new FunctionHeaderBranchConcreteSyntaxTreeNode(
			rawNode.children,
		);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.FunctionHeaderSegments),
			]),
		] as const;
	}
}
class FunctionHeaderSegmentsRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<FunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren>,
	): FunctionHeaderSegmentsBranchConcreteSyntaxTreeNode {
		const node = new FunctionHeaderSegmentsBranchConcreteSyntaxTreeNode(
			rawNode.children,
		);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(
					ruleById.StartingWithKnownFunctionHeaderSegments,
				),
			]),
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(
					ruleById.StartingWithUnknownFunctionHeaderSegments,
				),
			]),
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(
					ruleById.StartingWithWordFunctionHeaderSegments,
				),
			]),
		] as const;
	}
}
class FunctionsRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<FunctionsBranchConcreteSyntaxTreeNodeChildren>,
	): FunctionsBranchConcreteSyntaxTreeNode {
		const node = new FunctionsBranchConcreteSyntaxTreeNode(rawNode.children);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			FinalThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.Function),
				new NonTerminalExpression(ruleById.OptionalFunctions),
			]),
		] as const;
	}
}
class KnownFunctionCallSegmentRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<KnownFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren>,
	): KnownFunctionCallSegmentBranchConcreteSyntaxTreeNode {
		const node = new KnownFunctionCallSegmentBranchConcreteSyntaxTreeNode(
			rawNode.children,
		);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			IntermediateThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.OpeningRoundBracketCharacter),
				new NonTerminalExpression(
					ruleById.OptionalKnownFunctionCallSegmentContent,
				),
				new NonTerminalExpression(ruleById.ClosingRoundBracketCharacter),
			]),
		] as const;
	}
}
class KnownFunctionCallSegmentContentRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<KnownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeChildren>,
	): KnownFunctionCallSegmentContentBranchConcreteSyntaxTreeNode {
		const node =
			new KnownFunctionCallSegmentContentBranchConcreteSyntaxTreeNode(
				rawNode.children,
			);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.PaddedOptionalPaddedVariableName),
			]),
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.PaddedVariableName),
			]),
		] as const;
	}
}
class KnownFunctionHeaderSegmentRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<KnownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren>,
	): KnownFunctionHeaderSegmentBranchConcreteSyntaxTreeNode {
		const node = new KnownFunctionHeaderSegmentBranchConcreteSyntaxTreeNode(
			rawNode.children,
		);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			IntermediateThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.OpeningRoundBracketCharacter),
				new NonTerminalExpression(ruleById.KnownFunctionHeaderSegmentContent),
				new NonTerminalExpression(ruleById.ClosingRoundBracketCharacter),
			]),
		] as const;
	}
}
class KnownFunctionHeaderSegmentContentRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<KnownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNodeChildren>,
	): KnownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNode {
		const node =
			new KnownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNode(
				rawNode.children,
			);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.PaddedOptionalPaddedVariableName),
			]),
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.PaddedVariableName),
			]),
		] as const;
	}
}
class OpeningCurlyBracketCharacterRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<
			readonly [
				LeafConcreteSyntaxTreeNode<OpeningCurlyBracketCharacterLeafConcreteSyntaxTreeNodeCharacter>,
			]
		>,
	): OpeningCurlyBracketCharacterLeafConcreteSyntaxTreeNode {
		const node = new OpeningCurlyBracketCharacterLeafConcreteSyntaxTreeNode(
			rawNode.children[0].character,
			rawNode.children[0].index,
		);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([new TerminalExpression("{")]),
		] as const;
	}
}
class OpeningRoundBracketCharacterRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<
			readonly [
				LeafConcreteSyntaxTreeNode<OpeningRoundBracketCharacterLeafConcreteSyntaxTreeNodeCharacter>,
			]
		>,
	): OpeningRoundBracketCharacterLeafConcreteSyntaxTreeNode {
		const node = new OpeningRoundBracketCharacterLeafConcreteSyntaxTreeNode(
			rawNode.children[0].character,
			rawNode.children[0].index,
		);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([new TerminalExpression("(")]),
		] as const;
	}
}
class OpeningSquareBracketCharacterRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<
			readonly [
				LeafConcreteSyntaxTreeNode<OpeningSquareBracketCharacterLeafConcreteSyntaxTreeNodeCharacter>,
			]
		>,
	): OpeningSquareBracketCharacterLeafConcreteSyntaxTreeNode {
		const node = new OpeningSquareBracketCharacterLeafConcreteSyntaxTreeNode(
			rawNode.children[0].character,
			rawNode.children[0].index,
		);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([new TerminalExpression("[")]),
		] as const;
	}
}
class OperatorCharacterRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<
			readonly [
				LeafConcreteSyntaxTreeNode<OperatorCharacterLeafConcreteSyntaxTreeNodeCharacter>,
			]
		>,
	): OperatorCharacterLeafConcreteSyntaxTreeNode {
		const node = new OperatorCharacterLeafConcreteSyntaxTreeNode(
			rawNode.children[0].character,
			rawNode.children[0].index,
		);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([new TerminalExpression(",")]),
			SingleThenExpression.createFromArray([new TerminalExpression(".")]),
		] as const;
	}
}
class OptionalBlockContentRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<OptionalBlockContentBranchConcreteSyntaxTreeNodeChildren>,
	): OptionalBlockContentBranchConcreteSyntaxTreeNode {
		const node = new OptionalBlockContentBranchConcreteSyntaxTreeNode(
			rawNode.children,
		);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.BlockContent),
			]),
			SingleThenExpression.createFromArray([new EmptyExpression()]),
		] as const;
	}
}
class OptionalFunctionCallSegmentsRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<OptionalFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren>,
	): OptionalFunctionCallSegmentsBranchConcreteSyntaxTreeNode {
		const node = new OptionalFunctionCallSegmentsBranchConcreteSyntaxTreeNode(
			rawNode.children,
		);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.FunctionCallSegments),
			]),
			SingleThenExpression.createFromArray([new EmptyExpression()]),
		] as const;
	}
}
class OptionalFunctionHeaderRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<OptionalFunctionHeaderBranchConcreteSyntaxTreeNodeChildren>,
	): OptionalFunctionHeaderBranchConcreteSyntaxTreeNode {
		const node = new OptionalFunctionHeaderBranchConcreteSyntaxTreeNode(
			rawNode.children,
		);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.FunctionHeader),
			]),
			SingleThenExpression.createFromArray([new EmptyExpression()]),
		] as const;
	}
}
class OptionalFunctionHeaderSegmentsRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<OptionalFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren>,
	): OptionalFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode {
		const node = new OptionalFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode(
			rawNode.children,
		);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.FunctionHeaderSegments),
			]),
			SingleThenExpression.createFromArray([new EmptyExpression()]),
		] as const;
	}
}
class OptionalFunctionsRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<OptionalFunctionsBranchConcreteSyntaxTreeNodeChildren>,
	): OptionalFunctionsBranchConcreteSyntaxTreeNode {
		const node = new OptionalFunctionsBranchConcreteSyntaxTreeNode(
			rawNode.children,
		);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.Functions),
			]),
			SingleThenExpression.createFromArray([new EmptyExpression()]),
		] as const;
	}
}
class OptionalKnownFunctionCallSegmentContentRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<OptionalKnownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeChildren>,
	): OptionalKnownFunctionCallSegmentContentBranchConcreteSyntaxTreeNode {
		const node =
			new OptionalKnownFunctionCallSegmentContentBranchConcreteSyntaxTreeNode(
				rawNode.children,
			);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.KnownFunctionCallSegmentContent),
			]),
			SingleThenExpression.createFromArray([new EmptyExpression()]),
		] as const;
	}
}
class OptionalPaddedVariableNameRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<OptionalPaddedVariableNameBranchConcreteSyntaxTreeNodeChildren>,
	): OptionalPaddedVariableNameBranchConcreteSyntaxTreeNode {
		const node = new OptionalPaddedVariableNameBranchConcreteSyntaxTreeNode(
			rawNode.children,
		);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.PaddedVariableName),
			]),
			SingleThenExpression.createFromArray([new EmptyExpression()]),
		] as const;
	}
}
class OptionalSeparatedStatementsRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<OptionalSeparatedStatementsBranchConcreteSyntaxTreeNodeChildren>,
	): OptionalSeparatedStatementsBranchConcreteSyntaxTreeNode {
		const node = new OptionalSeparatedStatementsBranchConcreteSyntaxTreeNode(
			rawNode.children,
		);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.SeparatedStatements),
			]),
			SingleThenExpression.createFromArray([new EmptyExpression()]),
		] as const;
	}
}
class OptionalStartingWithKnownFunctionCallSegmentsRestRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<OptionalStartingWithKnownFunctionCallSegmentsRestBranchConcreteSyntaxTreeNodeChildren>,
	): OptionalStartingWithKnownFunctionCallSegmentsRestBranchConcreteSyntaxTreeNode {
		const node =
			new OptionalStartingWithKnownFunctionCallSegmentsRestBranchConcreteSyntaxTreeNode(
				rawNode.children,
			);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(
					ruleById.StartingWithKnownFunctionCallSegmentsRest,
				),
			]),
			SingleThenExpression.createFromArray([new EmptyExpression()]),
		] as const;
	}
}
class OptionalStartingWithKnownFunctionHeaderSegmentsRestRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<OptionalStartingWithKnownFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNodeChildren>,
	): OptionalStartingWithKnownFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNode {
		const node =
			new OptionalStartingWithKnownFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNode(
				rawNode.children,
			);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(
					ruleById.StartingWithKnownFunctionHeaderSegmentsRest,
				),
			]),
			SingleThenExpression.createFromArray([new EmptyExpression()]),
		] as const;
	}
}
class OptionalStartingWithUnknownFunctionCallSegmentsRestRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<OptionalStartingWithUnknownFunctionCallSegmentsRestBranchConcreteSyntaxTreeNodeChildren>,
	): OptionalStartingWithUnknownFunctionCallSegmentsRestBranchConcreteSyntaxTreeNode {
		const node =
			new OptionalStartingWithUnknownFunctionCallSegmentsRestBranchConcreteSyntaxTreeNode(
				rawNode.children,
			);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(
					ruleById.StartingWithUnknownFunctionCallSegmentsRest,
				),
			]),
			SingleThenExpression.createFromArray([new EmptyExpression()]),
		] as const;
	}
}
class OptionalStartingWithUnknownFunctionHeaderSegmentsRestRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<OptionalStartingWithUnknownFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNodeChildren>,
	): OptionalStartingWithUnknownFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNode {
		const node =
			new OptionalStartingWithUnknownFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNode(
				rawNode.children,
			);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(
					ruleById.StartingWithUnknownFunctionHeaderSegmentsRest,
				),
			]),
			SingleThenExpression.createFromArray([new EmptyExpression()]),
		] as const;
	}
}
class OptionalStartingWithWordFunctionCallSegmentsRestRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<OptionalStartingWithWordFunctionCallSegmentsRestBranchConcreteSyntaxTreeNodeChildren>,
	): OptionalStartingWithWordFunctionCallSegmentsRestBranchConcreteSyntaxTreeNode {
		const node =
			new OptionalStartingWithWordFunctionCallSegmentsRestBranchConcreteSyntaxTreeNode(
				rawNode.children,
			);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(
					ruleById.StartingWithWordFunctionCallSegmentsRest,
				),
			]),
			SingleThenExpression.createFromArray([new EmptyExpression()]),
		] as const;
	}
}
class OptionalStartingWithWordFunctionHeaderSegmentsRestRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<OptionalStartingWithWordFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNodeChildren>,
	): OptionalStartingWithWordFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNode {
		const node =
			new OptionalStartingWithWordFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNode(
				rawNode.children,
			);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(
					ruleById.StartingWithWordFunctionHeaderSegmentsRest,
				),
			]),
			SingleThenExpression.createFromArray([new EmptyExpression()]),
		] as const;
	}
}
class OptionalStatementsRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<OptionalStatementsBranchConcreteSyntaxTreeNodeChildren>,
	): OptionalStatementsBranchConcreteSyntaxTreeNode {
		const node = new OptionalStatementsBranchConcreteSyntaxTreeNode(
			rawNode.children,
		);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.Statements),
			]),
			SingleThenExpression.createFromArray([new EmptyExpression()]),
		] as const;
	}
}
class OptionalUnknownFunctionCallSegmentContentRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<OptionalUnknownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeChildren>,
	): OptionalUnknownFunctionCallSegmentContentBranchConcreteSyntaxTreeNode {
		const node =
			new OptionalUnknownFunctionCallSegmentContentBranchConcreteSyntaxTreeNode(
				rawNode.children,
			);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.UnknownFunctionCallSegmentContent),
			]),
			SingleThenExpression.createFromArray([new EmptyExpression()]),
		] as const;
	}
}
class OptionalUnknownFunctionHeaderSegmentContentRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<OptionalUnknownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNodeChildren>,
	): OptionalUnknownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNode {
		const node =
			new OptionalUnknownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNode(
				rawNode.children,
			);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.UnknownFunctionHeaderSegmentContent),
			]),
			SingleThenExpression.createFromArray([new EmptyExpression()]),
		] as const;
	}
}
class OptionalWhitespaceRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<OptionalWhitespaceBranchConcreteSyntaxTreeNodeChildren>,
	): OptionalWhitespaceBranchConcreteSyntaxTreeNode {
		const node = new OptionalWhitespaceBranchConcreteSyntaxTreeNode(
			rawNode.children,
		);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.Whitespace),
			]),
			SingleThenExpression.createFromArray([new EmptyExpression()]),
		] as const;
	}
}
class OptionalWhitespaceCharactersRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<OptionalWhitespaceCharactersBranchConcreteSyntaxTreeNodeChildren>,
	): OptionalWhitespaceCharactersBranchConcreteSyntaxTreeNode {
		const node = new OptionalWhitespaceCharactersBranchConcreteSyntaxTreeNode(
			rawNode.children,
		);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.WhitespaceCharacters),
			]),
			SingleThenExpression.createFromArray([new EmptyExpression()]),
		] as const;
	}
}
class OptionalWordCharactersRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<OptionalWordCharactersBranchConcreteSyntaxTreeNodeChildren>,
	): OptionalWordCharactersBranchConcreteSyntaxTreeNode {
		const node = new OptionalWordCharactersBranchConcreteSyntaxTreeNode(
			rawNode.children,
		);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.WordCharacters),
			]),
			SingleThenExpression.createFromArray([new EmptyExpression()]),
		] as const;
	}
}
class PaddedOptionalFunctionsRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<PaddedOptionalFunctionsBranchConcreteSyntaxTreeNodeChildren>,
	): PaddedOptionalFunctionsBranchConcreteSyntaxTreeNode {
		const node = new PaddedOptionalFunctionsBranchConcreteSyntaxTreeNode(
			rawNode.children,
		);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			FinalThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.Whitespace),
				new NonTerminalExpression(ruleById.OptionalFunctions),
			]),
		] as const;
	}
}
class PaddedOptionalPaddedVariableNameRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<PaddedOptionalPaddedVariableNameBranchConcreteSyntaxTreeNodeChildren>,
	): PaddedOptionalPaddedVariableNameBranchConcreteSyntaxTreeNode {
		const node =
			new PaddedOptionalPaddedVariableNameBranchConcreteSyntaxTreeNode(
				rawNode.children,
			);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			FinalThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.Whitespace),
				new NonTerminalExpression(ruleById.OptionalPaddedVariableName),
			]),
		] as const;
	}
}
class PaddedOptionalStatementsRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<PaddedOptionalStatementsBranchConcreteSyntaxTreeNodeChildren>,
	): PaddedOptionalStatementsBranchConcreteSyntaxTreeNode {
		const node = new PaddedOptionalStatementsBranchConcreteSyntaxTreeNode(
			rawNode.children,
		);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			FinalThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.Whitespace),
				new NonTerminalExpression(ruleById.OptionalStatements),
			]),
		] as const;
	}
}
class PaddedVariableNameRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<PaddedVariableNameBranchConcreteSyntaxTreeNodeChildren>,
	): PaddedVariableNameBranchConcreteSyntaxTreeNode {
		const node = new PaddedVariableNameBranchConcreteSyntaxTreeNode(
			rawNode.children,
		);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			FinalThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.VariableName),
				new NonTerminalExpression(ruleById.OptionalWhitespace),
			]),
		] as const;
	}
}
class SeparatedOptionalFunctionCallSegmentsRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<SeparatedOptionalFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren>,
	): SeparatedOptionalFunctionCallSegmentsBranchConcreteSyntaxTreeNode {
		const node =
			new SeparatedOptionalFunctionCallSegmentsBranchConcreteSyntaxTreeNode(
				rawNode.children,
			);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			FinalThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.Whitespace),
				new NonTerminalExpression(ruleById.OptionalFunctionCallSegments),
			]),
		] as const;
	}
}
class SeparatedOptionalFunctionHeaderSegmentsRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<SeparatedOptionalFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren>,
	): SeparatedOptionalFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode {
		const node =
			new SeparatedOptionalFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode(
				rawNode.children,
			);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			FinalThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.Whitespace),
				new NonTerminalExpression(ruleById.OptionalFunctionHeaderSegments),
			]),
		] as const;
	}
}
class SeparatedStatementsRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<SeparatedStatementsBranchConcreteSyntaxTreeNodeChildren>,
	): SeparatedStatementsBranchConcreteSyntaxTreeNode {
		const node = new SeparatedStatementsBranchConcreteSyntaxTreeNode(
			rawNode.children,
		);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			IntermediateThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.OperatorCharacter),
				new NonTerminalExpression(ruleById.OptionalWhitespace),
				new NonTerminalExpression(ruleById.Statements),
			]),
		] as const;
	}
}
class StartingWithKnownFunctionCallSegmentsRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<StartingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren>,
	): StartingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNode {
		const node =
			new StartingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNode(
				rawNode.children,
			);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			FinalThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.KnownFunctionCallSegment),
				new NonTerminalExpression(
					ruleById.OptionalStartingWithKnownFunctionCallSegmentsRest,
				),
			]),
		] as const;
	}
}
class StartingWithKnownFunctionCallSegmentsRestRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<StartingWithKnownFunctionCallSegmentsRestBranchConcreteSyntaxTreeNodeChildren>,
	): StartingWithKnownFunctionCallSegmentsRestBranchConcreteSyntaxTreeNode {
		const node =
			new StartingWithKnownFunctionCallSegmentsRestBranchConcreteSyntaxTreeNode(
				rawNode.children,
			);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(
					ruleById.SeparatedOptionalFunctionCallSegments,
				),
			]),
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(
					ruleById.StartingWithUnknownFunctionCallSegments,
				),
			]),
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(
					ruleById.StartingWithWordFunctionCallSegments,
				),
			]),
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(
					ruleById.StartingWithKnownFunctionCallSegments,
				),
			]),
		] as const;
	}
}
class StartingWithKnownFunctionHeaderSegmentsRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<StartingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren>,
	): StartingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode {
		const node =
			new StartingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode(
				rawNode.children,
			);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			FinalThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.KnownFunctionHeaderSegment),
				new NonTerminalExpression(
					ruleById.OptionalStartingWithKnownFunctionHeaderSegmentsRest,
				),
			]),
		] as const;
	}
}
class StartingWithKnownFunctionHeaderSegmentsRestRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<StartingWithKnownFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNodeChildren>,
	): StartingWithKnownFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNode {
		const node =
			new StartingWithKnownFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNode(
				rawNode.children,
			);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(
					ruleById.SeparatedOptionalFunctionHeaderSegments,
				),
			]),
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(
					ruleById.StartingWithUnknownFunctionHeaderSegments,
				),
			]),
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(
					ruleById.StartingWithKnownFunctionHeaderSegments,
				),
			]),
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(
					ruleById.StartingWithWordFunctionHeaderSegments,
				),
			]),
		] as const;
	}
}
class StartingWithUnknownFunctionCallSegmentsRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<StartingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren>,
	): StartingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNode {
		const node =
			new StartingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNode(
				rawNode.children,
			);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			FinalThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.UnknownFunctionCallSegment),
				new NonTerminalExpression(
					ruleById.OptionalStartingWithUnknownFunctionCallSegmentsRest,
				),
			]),
		] as const;
	}
}
class StartingWithUnknownFunctionCallSegmentsRestRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<StartingWithUnknownFunctionCallSegmentsRestBranchConcreteSyntaxTreeNodeChildren>,
	): StartingWithUnknownFunctionCallSegmentsRestBranchConcreteSyntaxTreeNode {
		const node =
			new StartingWithUnknownFunctionCallSegmentsRestBranchConcreteSyntaxTreeNode(
				rawNode.children,
			);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(
					ruleById.SeparatedOptionalFunctionCallSegments,
				),
			]),
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(
					ruleById.StartingWithUnknownFunctionCallSegments,
				),
			]),
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(
					ruleById.StartingWithKnownFunctionCallSegments,
				),
			]),
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(
					ruleById.StartingWithWordFunctionCallSegments,
				),
			]),
		] as const;
	}
}
class StartingWithUnknownFunctionHeaderSegmentsRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<StartingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren>,
	): StartingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode {
		const node =
			new StartingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode(
				rawNode.children,
			);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			FinalThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.UnknownFunctionHeaderSegment),
				new NonTerminalExpression(
					ruleById.OptionalStartingWithUnknownFunctionHeaderSegmentsRest,
				),
			]),
		] as const;
	}
}
class StartingWithUnknownFunctionHeaderSegmentsRestRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<StartingWithUnknownFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNodeChildren>,
	): StartingWithUnknownFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNode {
		const node =
			new StartingWithUnknownFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNode(
				rawNode.children,
			);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(
					ruleById.SeparatedOptionalFunctionHeaderSegments,
				),
			]),
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(
					ruleById.StartingWithUnknownFunctionHeaderSegments,
				),
			]),
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(
					ruleById.StartingWithKnownFunctionHeaderSegments,
				),
			]),
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(
					ruleById.StartingWithWordFunctionHeaderSegments,
				),
			]),
		] as const;
	}
}
class StartingWithWordFunctionCallSegmentsRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<StartingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren>,
	): StartingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNode {
		const node =
			new StartingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNode(
				rawNode.children,
			);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			FinalThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.WordFunctionCallSegment),
				new NonTerminalExpression(
					ruleById.OptionalStartingWithWordFunctionCallSegmentsRest,
				),
			]),
		] as const;
	}
}
class StartingWithWordFunctionCallSegmentsRestRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<StartingWithWordFunctionCallSegmentsRestBranchConcreteSyntaxTreeNodeChildren>,
	): StartingWithWordFunctionCallSegmentsRestBranchConcreteSyntaxTreeNode {
		const node =
			new StartingWithWordFunctionCallSegmentsRestBranchConcreteSyntaxTreeNode(
				rawNode.children,
			);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(
					ruleById.SeparatedOptionalFunctionCallSegments,
				),
			]),
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(
					ruleById.StartingWithUnknownFunctionCallSegments,
				),
			]),
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(
					ruleById.StartingWithKnownFunctionCallSegments,
				),
			]),
		] as const;
	}
}
class StartingWithWordFunctionHeaderSegmentsRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<StartingWithWordFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren>,
	): StartingWithWordFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode {
		const node =
			new StartingWithWordFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode(
				rawNode.children,
			);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			FinalThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.WordFunctionHeaderSegment),
				new NonTerminalExpression(
					ruleById.OptionalStartingWithWordFunctionHeaderSegmentsRest,
				),
			]),
		] as const;
	}
}
class StartingWithWordFunctionHeaderSegmentsRestRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<StartingWithWordFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNodeChildren>,
	): StartingWithWordFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNode {
		const node =
			new StartingWithWordFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNode(
				rawNode.children,
			);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(
					ruleById.SeparatedOptionalFunctionHeaderSegments,
				),
			]),
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(
					ruleById.StartingWithUnknownFunctionHeaderSegments,
				),
			]),
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(
					ruleById.StartingWithKnownFunctionHeaderSegments,
				),
			]),
		] as const;
	}
}
class StatementRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<StatementBranchConcreteSyntaxTreeNodeChildren>,
	): StatementBranchConcreteSyntaxTreeNode {
		const node = new StatementBranchConcreteSyntaxTreeNode(rawNode.children);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.BlockStatement),
			]),
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.FunctionCallStatement),
			]),
		] as const;
	}
}
class StatementsRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<StatementsBranchConcreteSyntaxTreeNodeChildren>,
	): StatementsBranchConcreteSyntaxTreeNode {
		const node = new StatementsBranchConcreteSyntaxTreeNode(rawNode.children);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			FinalThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.Statement),
				new NonTerminalExpression(ruleById.OptionalSeparatedStatements),
			]),
		] as const;
	}
}
class UnknownFunctionCallSegmentRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<UnknownFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren>,
	): UnknownFunctionCallSegmentBranchConcreteSyntaxTreeNode {
		const node = new UnknownFunctionCallSegmentBranchConcreteSyntaxTreeNode(
			rawNode.children,
		);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			IntermediateThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.OpeningSquareBracketCharacter),
				new NonTerminalExpression(
					ruleById.OptionalUnknownFunctionCallSegmentContent,
				),
				new NonTerminalExpression(ruleById.ClosingSquareBracketCharacter),
			]),
		] as const;
	}
}
class UnknownFunctionCallSegmentContentRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<UnknownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeChildren>,
	): UnknownFunctionCallSegmentContentBranchConcreteSyntaxTreeNode {
		const node =
			new UnknownFunctionCallSegmentContentBranchConcreteSyntaxTreeNode(
				rawNode.children,
			);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.PaddedOptionalPaddedVariableName),
			]),
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.PaddedVariableName),
			]),
		] as const;
	}
}
class UnknownFunctionHeaderSegmentRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<UnknownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren>,
	): UnknownFunctionHeaderSegmentBranchConcreteSyntaxTreeNode {
		const node = new UnknownFunctionHeaderSegmentBranchConcreteSyntaxTreeNode(
			rawNode.children,
		);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			IntermediateThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.OpeningSquareBracketCharacter),
				new NonTerminalExpression(
					ruleById.OptionalUnknownFunctionHeaderSegmentContent,
				),
				new NonTerminalExpression(ruleById.ClosingSquareBracketCharacter),
			]),
		] as const;
	}
}
class UnknownFunctionHeaderSegmentContentRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<UnknownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNodeChildren>,
	): UnknownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNode {
		const node =
			new UnknownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNode(
				rawNode.children,
			);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.PaddedOptionalPaddedVariableName),
			]),
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.PaddedVariableName),
			]),
		] as const;
	}
}
class VariableNameRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<VariableNameBranchConcreteSyntaxTreeNodeChildren>,
	): VariableNameBranchConcreteSyntaxTreeNode {
		const node = new VariableNameBranchConcreteSyntaxTreeNode(rawNode.children);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.Word),
			]),
		] as const;
	}
}
class WhitespaceRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<WhitespaceBranchConcreteSyntaxTreeNodeChildren>,
	): WhitespaceBranchConcreteSyntaxTreeNode {
		const node = new WhitespaceBranchConcreteSyntaxTreeNode(rawNode.children);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.WhitespaceCharacters),
			]),
		] as const;
	}
}
class WhitespaceCharacterRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<
			readonly [
				LeafConcreteSyntaxTreeNode<WhitespaceCharacterLeafConcreteSyntaxTreeNodeCharacter>,
			]
		>,
	): WhitespaceCharacterLeafConcreteSyntaxTreeNode {
		const node = new WhitespaceCharacterLeafConcreteSyntaxTreeNode(
			rawNode.children[0].character,
			rawNode.children[0].index,
		);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([new TerminalExpression(" ")]),
			SingleThenExpression.createFromArray([new TerminalExpression("\n")]),
			SingleThenExpression.createFromArray([new TerminalExpression("\t")]),
		] as const;
	}
}
class WhitespaceCharactersRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<WhitespaceCharactersBranchConcreteSyntaxTreeNodeChildren>,
	): WhitespaceCharactersBranchConcreteSyntaxTreeNode {
		const node = new WhitespaceCharactersBranchConcreteSyntaxTreeNode(
			rawNode.children,
		);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			FinalThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.WhitespaceCharacter),
				new NonTerminalExpression(ruleById.OptionalWhitespaceCharacters),
			]),
		] as const;
	}
}
class WordRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<WordBranchConcreteSyntaxTreeNodeChildren>,
	): WordBranchConcreteSyntaxTreeNode {
		const node = new WordBranchConcreteSyntaxTreeNode(rawNode.children);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.WordCharacters),
			]),
		] as const;
	}
}
class WordCharacterRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<
			readonly [
				LeafConcreteSyntaxTreeNode<WordCharacterLeafConcreteSyntaxTreeNodeCharacter>,
			]
		>,
	): WordCharacterLeafConcreteSyntaxTreeNode {
		const node = new WordCharacterLeafConcreteSyntaxTreeNode(
			rawNode.children[0].character,
			rawNode.children[0].index,
		);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([new TerminalExpression("a")]),
			SingleThenExpression.createFromArray([new TerminalExpression("b")]),
			SingleThenExpression.createFromArray([new TerminalExpression("c")]),
			SingleThenExpression.createFromArray([new TerminalExpression("d")]),
			SingleThenExpression.createFromArray([new TerminalExpression("e")]),
			SingleThenExpression.createFromArray([new TerminalExpression("f")]),
			SingleThenExpression.createFromArray([new TerminalExpression("g")]),
			SingleThenExpression.createFromArray([new TerminalExpression("h")]),
			SingleThenExpression.createFromArray([new TerminalExpression("i")]),
			SingleThenExpression.createFromArray([new TerminalExpression("j")]),
			SingleThenExpression.createFromArray([new TerminalExpression("k")]),
			SingleThenExpression.createFromArray([new TerminalExpression("l")]),
			SingleThenExpression.createFromArray([new TerminalExpression("m")]),
			SingleThenExpression.createFromArray([new TerminalExpression("n")]),
			SingleThenExpression.createFromArray([new TerminalExpression("o")]),
			SingleThenExpression.createFromArray([new TerminalExpression("p")]),
			SingleThenExpression.createFromArray([new TerminalExpression("q")]),
			SingleThenExpression.createFromArray([new TerminalExpression("r")]),
			SingleThenExpression.createFromArray([new TerminalExpression("s")]),
			SingleThenExpression.createFromArray([new TerminalExpression("t")]),
			SingleThenExpression.createFromArray([new TerminalExpression("u")]),
			SingleThenExpression.createFromArray([new TerminalExpression("v")]),
			SingleThenExpression.createFromArray([new TerminalExpression("w")]),
			SingleThenExpression.createFromArray([new TerminalExpression("x")]),
			SingleThenExpression.createFromArray([new TerminalExpression("y")]),
			SingleThenExpression.createFromArray([new TerminalExpression("z")]),
			SingleThenExpression.createFromArray([new TerminalExpression("A")]),
			SingleThenExpression.createFromArray([new TerminalExpression("B")]),
			SingleThenExpression.createFromArray([new TerminalExpression("C")]),
			SingleThenExpression.createFromArray([new TerminalExpression("D")]),
			SingleThenExpression.createFromArray([new TerminalExpression("E")]),
			SingleThenExpression.createFromArray([new TerminalExpression("F")]),
			SingleThenExpression.createFromArray([new TerminalExpression("G")]),
			SingleThenExpression.createFromArray([new TerminalExpression("H")]),
			SingleThenExpression.createFromArray([new TerminalExpression("I")]),
			SingleThenExpression.createFromArray([new TerminalExpression("J")]),
			SingleThenExpression.createFromArray([new TerminalExpression("K")]),
			SingleThenExpression.createFromArray([new TerminalExpression("L")]),
			SingleThenExpression.createFromArray([new TerminalExpression("M")]),
			SingleThenExpression.createFromArray([new TerminalExpression("N")]),
			SingleThenExpression.createFromArray([new TerminalExpression("O")]),
			SingleThenExpression.createFromArray([new TerminalExpression("P")]),
			SingleThenExpression.createFromArray([new TerminalExpression("Q")]),
			SingleThenExpression.createFromArray([new TerminalExpression("R")]),
			SingleThenExpression.createFromArray([new TerminalExpression("S")]),
			SingleThenExpression.createFromArray([new TerminalExpression("T")]),
			SingleThenExpression.createFromArray([new TerminalExpression("U")]),
			SingleThenExpression.createFromArray([new TerminalExpression("V")]),
			SingleThenExpression.createFromArray([new TerminalExpression("W")]),
			SingleThenExpression.createFromArray([new TerminalExpression("X")]),
			SingleThenExpression.createFromArray([new TerminalExpression("Y")]),
			SingleThenExpression.createFromArray([new TerminalExpression("Z")]),
			SingleThenExpression.createFromArray([new TerminalExpression("0")]),
			SingleThenExpression.createFromArray([new TerminalExpression("1")]),
			SingleThenExpression.createFromArray([new TerminalExpression("2")]),
			SingleThenExpression.createFromArray([new TerminalExpression("3")]),
			SingleThenExpression.createFromArray([new TerminalExpression("4")]),
			SingleThenExpression.createFromArray([new TerminalExpression("5")]),
			SingleThenExpression.createFromArray([new TerminalExpression("6")]),
			SingleThenExpression.createFromArray([new TerminalExpression("7")]),
			SingleThenExpression.createFromArray([new TerminalExpression("8")]),
			SingleThenExpression.createFromArray([new TerminalExpression("9")]),
			SingleThenExpression.createFromArray([new TerminalExpression("!")]),
			SingleThenExpression.createFromArray([new TerminalExpression("#")]),
			SingleThenExpression.createFromArray([new TerminalExpression("$")]),
			SingleThenExpression.createFromArray([new TerminalExpression("%")]),
			SingleThenExpression.createFromArray([new TerminalExpression("&")]),
			SingleThenExpression.createFromArray([new TerminalExpression("+")]),
			SingleThenExpression.createFromArray([new TerminalExpression("-")]),
			SingleThenExpression.createFromArray([new TerminalExpression("*")]),
			SingleThenExpression.createFromArray([new TerminalExpression("/")]),
			SingleThenExpression.createFromArray([new TerminalExpression(":")]),
			SingleThenExpression.createFromArray([new TerminalExpression(";")]),
			SingleThenExpression.createFromArray([new TerminalExpression("<")]),
			SingleThenExpression.createFromArray([new TerminalExpression("=")]),
			SingleThenExpression.createFromArray([new TerminalExpression(">")]),
			SingleThenExpression.createFromArray([new TerminalExpression("?")]),
			SingleThenExpression.createFromArray([new TerminalExpression("@")]),
			SingleThenExpression.createFromArray([new TerminalExpression("^")]),
			SingleThenExpression.createFromArray([new TerminalExpression("_")]),
		] as const;
	}
}
class WordCharactersRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<WordCharactersBranchConcreteSyntaxTreeNodeChildren>,
	): WordCharactersBranchConcreteSyntaxTreeNode {
		const node = new WordCharactersBranchConcreteSyntaxTreeNode(
			rawNode.children,
		);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			FinalThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.WordCharacter),
				new NonTerminalExpression(ruleById.OptionalWordCharacters),
			]),
		] as const;
	}
}
class WordFunctionCallSegmentRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<WordFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren>,
	): WordFunctionCallSegmentBranchConcreteSyntaxTreeNode {
		const node = new WordFunctionCallSegmentBranchConcreteSyntaxTreeNode(
			rawNode.children,
		);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.Word),
			]),
		] as const;
	}
}
class WordFunctionHeaderSegmentRule extends Rule {
	public constructor() {
		super();
	}
	public override buildNode(
		rawNode: BranchConcreteSyntaxTreeNode<WordFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren>,
	): WordFunctionHeaderSegmentBranchConcreteSyntaxTreeNode {
		const node = new WordFunctionHeaderSegmentBranchConcreteSyntaxTreeNode(
			rawNode.children,
		);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		return [
			SingleThenExpression.createFromArray([
				new NonTerminalExpression(ruleById.WordCharacters),
			]),
		] as const;
	}
}
const ruleById = {
	Block: new BlockRule(),
	BlockContent: new BlockContentRule(),
	BlockStatement: new BlockStatementRule(),
	ClosingCurlyBracketCharacter: new ClosingCurlyBracketCharacterRule(),
	ClosingRoundBracketCharacter: new ClosingRoundBracketCharacterRule(),
	ClosingSquareBracketCharacter: new ClosingSquareBracketCharacterRule(),
	Content: new ContentRule(),
	Function: new FunctionRule(),
	FunctionBody: new FunctionBodyRule(),
	FunctionCall: new FunctionCallRule(),
	FunctionCallSegments: new FunctionCallSegmentsRule(),
	FunctionCallStatement: new FunctionCallStatementRule(),
	FunctionHeader: new FunctionHeaderRule(),
	FunctionHeaderSegments: new FunctionHeaderSegmentsRule(),
	Functions: new FunctionsRule(),
	KnownFunctionCallSegment: new KnownFunctionCallSegmentRule(),
	KnownFunctionCallSegmentContent: new KnownFunctionCallSegmentContentRule(),
	KnownFunctionHeaderSegment: new KnownFunctionHeaderSegmentRule(),
	KnownFunctionHeaderSegmentContent:
		new KnownFunctionHeaderSegmentContentRule(),
	OpeningCurlyBracketCharacter: new OpeningCurlyBracketCharacterRule(),
	OpeningRoundBracketCharacter: new OpeningRoundBracketCharacterRule(),
	OpeningSquareBracketCharacter: new OpeningSquareBracketCharacterRule(),
	OperatorCharacter: new OperatorCharacterRule(),
	OptionalBlockContent: new OptionalBlockContentRule(),
	OptionalContent: new OptionalContentRule(),
	OptionalFunctionCallSegments: new OptionalFunctionCallSegmentsRule(),
	OptionalFunctionHeader: new OptionalFunctionHeaderRule(),
	OptionalFunctionHeaderSegments: new OptionalFunctionHeaderSegmentsRule(),
	OptionalFunctions: new OptionalFunctionsRule(),
	OptionalKnownFunctionCallSegmentContent:
		new OptionalKnownFunctionCallSegmentContentRule(),
	OptionalPaddedVariableName: new OptionalPaddedVariableNameRule(),
	OptionalSeparatedStatements: new OptionalSeparatedStatementsRule(),
	OptionalStartingWithKnownFunctionCallSegmentsRest:
		new OptionalStartingWithKnownFunctionCallSegmentsRestRule(),
	OptionalStartingWithKnownFunctionHeaderSegmentsRest:
		new OptionalStartingWithKnownFunctionHeaderSegmentsRestRule(),
	OptionalStartingWithUnknownFunctionCallSegmentsRest:
		new OptionalStartingWithUnknownFunctionCallSegmentsRestRule(),
	OptionalStartingWithUnknownFunctionHeaderSegmentsRest:
		new OptionalStartingWithUnknownFunctionHeaderSegmentsRestRule(),
	OptionalStartingWithWordFunctionCallSegmentsRest:
		new OptionalStartingWithWordFunctionCallSegmentsRestRule(),
	OptionalStartingWithWordFunctionHeaderSegmentsRest:
		new OptionalStartingWithWordFunctionHeaderSegmentsRestRule(),
	OptionalStatements: new OptionalStatementsRule(),
	OptionalUnknownFunctionCallSegmentContent:
		new OptionalUnknownFunctionCallSegmentContentRule(),
	OptionalUnknownFunctionHeaderSegmentContent:
		new OptionalUnknownFunctionHeaderSegmentContentRule(),
	OptionalWhitespace: new OptionalWhitespaceRule(),
	OptionalWhitespaceCharacters: new OptionalWhitespaceCharactersRule(),
	OptionalWordCharacters: new OptionalWordCharactersRule(),
	PaddedOptionalFunctions: new PaddedOptionalFunctionsRule(),
	PaddedOptionalPaddedVariableName: new PaddedOptionalPaddedVariableNameRule(),
	PaddedOptionalStatements: new PaddedOptionalStatementsRule(),
	PaddedVariableName: new PaddedVariableNameRule(),
	SeparatedOptionalFunctionCallSegments:
		new SeparatedOptionalFunctionCallSegmentsRule(),
	SeparatedOptionalFunctionHeaderSegments:
		new SeparatedOptionalFunctionHeaderSegmentsRule(),
	SeparatedStatements: new SeparatedStatementsRule(),
	StartingWithKnownFunctionCallSegments:
		new StartingWithKnownFunctionCallSegmentsRule(),
	StartingWithKnownFunctionCallSegmentsRest:
		new StartingWithKnownFunctionCallSegmentsRestRule(),
	StartingWithKnownFunctionHeaderSegments:
		new StartingWithKnownFunctionHeaderSegmentsRule(),
	StartingWithKnownFunctionHeaderSegmentsRest:
		new StartingWithKnownFunctionHeaderSegmentsRestRule(),
	StartingWithUnknownFunctionCallSegments:
		new StartingWithUnknownFunctionCallSegmentsRule(),
	StartingWithUnknownFunctionCallSegmentsRest:
		new StartingWithUnknownFunctionCallSegmentsRestRule(),
	StartingWithUnknownFunctionHeaderSegments:
		new StartingWithUnknownFunctionHeaderSegmentsRule(),
	StartingWithUnknownFunctionHeaderSegmentsRest:
		new StartingWithUnknownFunctionHeaderSegmentsRestRule(),
	StartingWithWordFunctionCallSegments:
		new StartingWithWordFunctionCallSegmentsRule(),
	StartingWithWordFunctionCallSegmentsRest:
		new StartingWithWordFunctionCallSegmentsRestRule(),
	StartingWithWordFunctionHeaderSegments:
		new StartingWithWordFunctionHeaderSegmentsRule(),
	StartingWithWordFunctionHeaderSegmentsRest:
		new StartingWithWordFunctionHeaderSegmentsRestRule(),
	Statement: new StatementRule(),
	Statements: new StatementsRule(),
	UnknownFunctionCallSegment: new UnknownFunctionCallSegmentRule(),
	UnknownFunctionCallSegmentContent:
		new UnknownFunctionCallSegmentContentRule(),
	UnknownFunctionHeaderSegment: new UnknownFunctionHeaderSegmentRule(),
	UnknownFunctionHeaderSegmentContent:
		new UnknownFunctionHeaderSegmentContentRule(),
	VariableName: new VariableNameRule(),
	Whitespace: new WhitespaceRule(),
	WhitespaceCharacter: new WhitespaceCharacterRule(),
	WhitespaceCharacters: new WhitespaceCharactersRule(),
	Word: new WordRule(),
	WordCharacter: new WordCharacterRule(),
	WordCharacters: new WordCharactersRule(),
	WordFunctionCallSegment: new WordFunctionCallSegmentRule(),
	WordFunctionHeaderSegment: new WordFunctionHeaderSegmentRule(),
} as const;
export type RuleById = {
	readonly Block: BlockRule;
	readonly BlockContent: BlockContentRule;
	readonly BlockStatement: BlockStatementRule;
	readonly ClosingCurlyBracketCharacter: ClosingCurlyBracketCharacterRule;
	readonly ClosingRoundBracketCharacter: ClosingRoundBracketCharacterRule;
	readonly ClosingSquareBracketCharacter: ClosingSquareBracketCharacterRule;
	readonly Content: ContentRule;
	readonly Function: FunctionRule;
	readonly FunctionBody: FunctionBodyRule;
	readonly FunctionCall: FunctionCallRule;
	readonly FunctionCallSegments: FunctionCallSegmentsRule;
	readonly FunctionCallStatement: FunctionCallStatementRule;
	readonly FunctionHeader: FunctionHeaderRule;
	readonly FunctionHeaderSegments: FunctionHeaderSegmentsRule;
	readonly Functions: FunctionsRule;
	readonly KnownFunctionCallSegment: KnownFunctionCallSegmentRule;
	readonly KnownFunctionCallSegmentContent: KnownFunctionCallSegmentContentRule;
	readonly KnownFunctionHeaderSegment: KnownFunctionHeaderSegmentRule;
	readonly KnownFunctionHeaderSegmentContent: KnownFunctionHeaderSegmentContentRule;
	readonly OpeningCurlyBracketCharacter: OpeningCurlyBracketCharacterRule;
	readonly OpeningRoundBracketCharacter: OpeningRoundBracketCharacterRule;
	readonly OpeningSquareBracketCharacter: OpeningSquareBracketCharacterRule;
	readonly OperatorCharacter: OperatorCharacterRule;
	readonly OptionalBlockContent: OptionalBlockContentRule;
	readonly OptionalContent: OptionalContentRule;
	readonly OptionalFunctionCallSegments: OptionalFunctionCallSegmentsRule;
	readonly OptionalFunctionHeader: OptionalFunctionHeaderRule;
	readonly OptionalFunctionHeaderSegments: OptionalFunctionHeaderSegmentsRule;
	readonly OptionalFunctions: OptionalFunctionsRule;
	readonly OptionalKnownFunctionCallSegmentContent: OptionalKnownFunctionCallSegmentContentRule;
	readonly OptionalPaddedVariableName: OptionalPaddedVariableNameRule;
	readonly OptionalSeparatedStatements: OptionalSeparatedStatementsRule;
	readonly OptionalStartingWithKnownFunctionCallSegmentsRest: OptionalStartingWithKnownFunctionCallSegmentsRestRule;
	readonly OptionalStartingWithKnownFunctionHeaderSegmentsRest: OptionalStartingWithKnownFunctionHeaderSegmentsRestRule;
	readonly OptionalStartingWithUnknownFunctionCallSegmentsRest: OptionalStartingWithUnknownFunctionCallSegmentsRestRule;
	readonly OptionalStartingWithUnknownFunctionHeaderSegmentsRest: OptionalStartingWithUnknownFunctionHeaderSegmentsRestRule;
	readonly OptionalStartingWithWordFunctionCallSegmentsRest: OptionalStartingWithWordFunctionCallSegmentsRestRule;
	readonly OptionalStartingWithWordFunctionHeaderSegmentsRest: OptionalStartingWithWordFunctionHeaderSegmentsRestRule;
	readonly OptionalStatements: OptionalStatementsRule;
	readonly OptionalUnknownFunctionCallSegmentContent: OptionalUnknownFunctionCallSegmentContentRule;
	readonly OptionalUnknownFunctionHeaderSegmentContent: OptionalUnknownFunctionHeaderSegmentContentRule;
	readonly OptionalWhitespace: OptionalWhitespaceRule;
	readonly OptionalWhitespaceCharacters: OptionalWhitespaceCharactersRule;
	readonly OptionalWordCharacters: OptionalWordCharactersRule;
	readonly PaddedOptionalFunctions: PaddedOptionalFunctionsRule;
	readonly PaddedOptionalPaddedVariableName: PaddedOptionalPaddedVariableNameRule;
	readonly PaddedOptionalStatements: PaddedOptionalStatementsRule;
	readonly PaddedVariableName: PaddedVariableNameRule;
	readonly SeparatedOptionalFunctionCallSegments: SeparatedOptionalFunctionCallSegmentsRule;
	readonly SeparatedOptionalFunctionHeaderSegments: SeparatedOptionalFunctionHeaderSegmentsRule;
	readonly SeparatedStatements: SeparatedStatementsRule;
	readonly StartingWithKnownFunctionCallSegments: StartingWithKnownFunctionCallSegmentsRule;
	readonly StartingWithKnownFunctionCallSegmentsRest: StartingWithKnownFunctionCallSegmentsRestRule;
	readonly StartingWithKnownFunctionHeaderSegments: StartingWithKnownFunctionHeaderSegmentsRule;
	readonly StartingWithKnownFunctionHeaderSegmentsRest: StartingWithKnownFunctionHeaderSegmentsRestRule;
	readonly StartingWithUnknownFunctionCallSegments: StartingWithUnknownFunctionCallSegmentsRule;
	readonly StartingWithUnknownFunctionCallSegmentsRest: StartingWithUnknownFunctionCallSegmentsRestRule;
	readonly StartingWithUnknownFunctionHeaderSegments: StartingWithUnknownFunctionHeaderSegmentsRule;
	readonly StartingWithUnknownFunctionHeaderSegmentsRest: StartingWithUnknownFunctionHeaderSegmentsRestRule;
	readonly StartingWithWordFunctionCallSegments: StartingWithWordFunctionCallSegmentsRule;
	readonly StartingWithWordFunctionCallSegmentsRest: StartingWithWordFunctionCallSegmentsRestRule;
	readonly StartingWithWordFunctionHeaderSegments: StartingWithWordFunctionHeaderSegmentsRule;
	readonly StartingWithWordFunctionHeaderSegmentsRest: StartingWithWordFunctionHeaderSegmentsRestRule;
	readonly Statement: StatementRule;
	readonly Statements: StatementsRule;
	readonly UnknownFunctionCallSegment: UnknownFunctionCallSegmentRule;
	readonly UnknownFunctionCallSegmentContent: UnknownFunctionCallSegmentContentRule;
	readonly UnknownFunctionHeaderSegment: UnknownFunctionHeaderSegmentRule;
	readonly UnknownFunctionHeaderSegmentContent: UnknownFunctionHeaderSegmentContentRule;
	readonly VariableName: VariableNameRule;
	readonly Whitespace: WhitespaceRule;
	readonly WhitespaceCharacter: WhitespaceCharacterRule;
	readonly WhitespaceCharacters: WhitespaceCharactersRule;
	readonly Word: WordRule;
	readonly WordCharacter: WordCharacterRule;
	readonly WordCharacters: WordCharactersRule;
	readonly WordFunctionCallSegment: WordFunctionCallSegmentRule;
	readonly WordFunctionHeaderSegment: WordFunctionHeaderSegmentRule;
};
const grammar = new Grammar(ruleById, ruleById.OptionalContent);

// const sourceCodeContent = `is (dividend) not divisible by (divisor) {
// 	(dividend) % (divisor) != (0)
// }
// is (number) prime {
// 	(number) > (1),
// 	root of degree (2) of (number) = [maximaldivisortocheck],
// 	none of the integers between (2) and (maximaldivisortocheck) divide (number)
// }
// none of the integers between (start) and (end) divide (dividend) {
// 	(start) > (end).
// 	(start) <= (end),
// 	is (dividend) not divisible by (start),
// 	(start) + (1) = [nextstart],
// 	none of the integers between (nextstart) and (end) divide (dividend)
// }
// {
// 	is (37) prime
// }
// class OpeningCurlyBracketCharacterNode {}
// class ClosingCurlyBracketCharacterNode {}
// class OptionalWhitespaceCharactersNode {
// 	public static readonly children = [
// 		[WhitespaceCharactersNode] as const,
// 		[] as const,
// 	] as const;
// }
type BlockBranchConcreteSyntaxTreeNodeChildren = readonly [
	OpeningCurlyBracketCharacterLeafConcreteSyntaxTreeNode,
	OptionalBlockContentBranchConcreteSyntaxTreeNode,
	ClosingCurlyBracketCharacterLeafConcreteSyntaxTreeNode,
	OptionalWhitespaceBranchConcreteSyntaxTreeNode,
];
class BlockBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<BlockBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(children: BlockBranchConcreteSyntaxTreeNodeChildren) {
		super(children);
	}
}
type OpeningCurlyBracketCharacterLeafConcreteSyntaxTreeNodeCharacter = "{";
class OpeningCurlyBracketCharacterLeafConcreteSyntaxTreeNode extends LeafConcreteSyntaxTreeNode<OpeningCurlyBracketCharacterLeafConcreteSyntaxTreeNodeCharacter> {
	public constructor(
		character: OpeningCurlyBracketCharacterLeafConcreteSyntaxTreeNodeCharacter,
		index: Index,
	) {
		super(character, index);
	}
}
type ClosingCurlyBracketCharacterLeafConcreteSyntaxTreeNodeCharacter = "}";
class ClosingCurlyBracketCharacterLeafConcreteSyntaxTreeNode extends LeafConcreteSyntaxTreeNode<ClosingCurlyBracketCharacterLeafConcreteSyntaxTreeNodeCharacter> {
	public constructor(
		character: ClosingCurlyBracketCharacterLeafConcreteSyntaxTreeNodeCharacter,
		index: Index,
	) {
		super(character, index);
	}
}
type OptionalBlockContentBranchConcreteSyntaxTreeNodeChildren = readonly [
	BlockContentBranchConcreteSyntaxTreeNode | null,
];
class OptionalBlockContentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<OptionalBlockContentBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: OptionalBlockContentBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type OptionalWhitespaceBranchConcreteSyntaxTreeNodeChildren = readonly [
	null | WhitespaceBranchConcreteSyntaxTreeNode,
];
class OptionalWhitespaceBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<OptionalWhitespaceBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: OptionalWhitespaceBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type WhitespaceCharactersBranchConcreteSyntaxTreeNodeChildren = readonly [
	WhitespaceCharacterLeafConcreteSyntaxTreeNode,
	OptionalWhitespaceCharactersBranchConcreteSyntaxTreeNode,
];
class WhitespaceCharactersBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<WhitespaceCharactersBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: WhitespaceCharactersBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type WhitespaceCharacterLeafConcreteSyntaxTreeNodeCharacter = " " | "\n" | "\t";
class WhitespaceCharacterLeafConcreteSyntaxTreeNode extends LeafConcreteSyntaxTreeNode<WhitespaceCharacterLeafConcreteSyntaxTreeNodeCharacter> {
	public constructor(
		character: WhitespaceCharacterLeafConcreteSyntaxTreeNodeCharacter,
		index: Index,
	) {
		super(character, index);
	}
}
type OptionalWhitespaceCharactersBranchConcreteSyntaxTreeNodeChildren =
	readonly [null | WhitespaceCharactersBranchConcreteSyntaxTreeNode];
class OptionalWhitespaceCharactersBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<OptionalWhitespaceCharactersBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: OptionalWhitespaceCharactersBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type BlockContentBranchConcreteSyntaxTreeNodeChildren =
	| readonly [PaddedOptionalStatementsBranchConcreteSyntaxTreeNode]
	| readonly [StatementsBranchConcreteSyntaxTreeNode];
class BlockContentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<BlockContentBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: BlockContentBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type PaddedOptionalStatementsBranchConcreteSyntaxTreeNodeChildren = readonly [
	WhitespaceBranchConcreteSyntaxTreeNode,
	OptionalStatementsBranchConcreteSyntaxTreeNode,
];
class PaddedOptionalStatementsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<PaddedOptionalStatementsBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: PaddedOptionalStatementsBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type StatementsBranchConcreteSyntaxTreeNodeChildren = readonly [
	StatementBranchConcreteSyntaxTreeNode,
	OptionalSeparatedStatementsBranchConcreteSyntaxTreeNode,
];
class StatementsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<StatementsBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(children: StatementsBranchConcreteSyntaxTreeNodeChildren) {
		super(children);
	}
}
type StatementBranchConcreteSyntaxTreeNodeChildren =
	| readonly [BlockStatementBranchConcreteSyntaxTreeNode]
	| readonly [FunctionCallStatementBranchConcreteSyntaxTreeNode];
class StatementBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<StatementBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(children: StatementBranchConcreteSyntaxTreeNodeChildren) {
		super(children);
	}
}
type BlockStatementBranchConcreteSyntaxTreeNodeChildren = readonly [
	BlockBranchConcreteSyntaxTreeNode,
];
class BlockStatementBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<BlockStatementBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: BlockStatementBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type FunctionCallStatementBranchConcreteSyntaxTreeNodeChildren = readonly [
	FunctionCallBranchConcreteSyntaxTreeNode,
];
class FunctionCallStatementBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<FunctionCallStatementBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: FunctionCallStatementBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type FunctionCallBranchConcreteSyntaxTreeNodeChildren = readonly [
	FunctionCallSegmentsBranchConcreteSyntaxTreeNode,
];
class FunctionCallBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<FunctionCallBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: FunctionCallBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type FunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren =
	| readonly [StartingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNode]
	| readonly [
			StartingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNode,
	  ]
	| readonly [StartingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNode];
class FunctionCallSegmentsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<FunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: FunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type OptionalStatementsBranchConcreteSyntaxTreeNodeChildren = readonly [
	null | StatementsBranchConcreteSyntaxTreeNode,
];
class OptionalStatementsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<OptionalStatementsBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: OptionalStatementsBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type OptionalSeparatedStatementsBranchConcreteSyntaxTreeNodeChildren =
	readonly [null | SeparatedStatementsBranchConcreteSyntaxTreeNode];
class OptionalSeparatedStatementsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<OptionalSeparatedStatementsBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: OptionalSeparatedStatementsBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type SeparatedStatementsBranchConcreteSyntaxTreeNodeChildren = readonly [
	OperatorCharacterLeafConcreteSyntaxTreeNode,
	OptionalWhitespaceBranchConcreteSyntaxTreeNode,
	StatementsBranchConcreteSyntaxTreeNode,
];
class SeparatedStatementsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<SeparatedStatementsBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: SeparatedStatementsBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type OperatorCharacterLeafConcreteSyntaxTreeNodeCharacter = "," | ".";
class OperatorCharacterLeafConcreteSyntaxTreeNode extends LeafConcreteSyntaxTreeNode<OperatorCharacterLeafConcreteSyntaxTreeNodeCharacter> {
	public constructor(
		character: OperatorCharacterLeafConcreteSyntaxTreeNodeCharacter,
		index: Index,
	) {
		super(character, index);
	}
}
type StartingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren =
	readonly [
		KnownFunctionCallSegmentBranchConcreteSyntaxTreeNode,
		OptionalStartingWithKnownFunctionCallSegmentsRestBranchConcreteSyntaxTreeNode,
	];
class StartingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<StartingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: StartingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type KnownFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren = readonly [
	OpeningRoundBracketCharacterLeafConcreteSyntaxTreeNode,
	OptionalKnownFunctionCallSegmentContentBranchConcreteSyntaxTreeNode,
	ClosingRoundBracketCharacterLeafConcreteSyntaxTreeNode,
];
class KnownFunctionCallSegmentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<KnownFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: KnownFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type OpeningRoundBracketCharacterLeafConcreteSyntaxTreeNodeCharacter = "(";
class OpeningRoundBracketCharacterLeafConcreteSyntaxTreeNode extends LeafConcreteSyntaxTreeNode<OpeningRoundBracketCharacterLeafConcreteSyntaxTreeNodeCharacter> {
	public constructor(
		character: OpeningRoundBracketCharacterLeafConcreteSyntaxTreeNodeCharacter,
		index: Index,
	) {
		super(character, index);
	}
}
type ClosingRoundBracketCharacterLeafConcreteSyntaxTreeNodeCharacter = ")";
class ClosingRoundBracketCharacterLeafConcreteSyntaxTreeNode extends LeafConcreteSyntaxTreeNode<ClosingRoundBracketCharacterLeafConcreteSyntaxTreeNodeCharacter> {
	public constructor(
		character: ClosingRoundBracketCharacterLeafConcreteSyntaxTreeNodeCharacter,
		index: Index,
	) {
		super(character, index);
	}
}
type OptionalKnownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeChildren =
	readonly [KnownFunctionCallSegmentContentBranchConcreteSyntaxTreeNode | null];
class OptionalKnownFunctionCallSegmentContentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<OptionalKnownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: OptionalKnownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type KnownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeChildren =
	| readonly [PaddedOptionalPaddedVariableNameBranchConcreteSyntaxTreeNode]
	| readonly [PaddedVariableNameBranchConcreteSyntaxTreeNode];
class KnownFunctionCallSegmentContentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<KnownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: KnownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type PaddedOptionalPaddedVariableNameBranchConcreteSyntaxTreeNodeChildren =
	readonly [
		WhitespaceBranchConcreteSyntaxTreeNode,
		OptionalPaddedVariableNameBranchConcreteSyntaxTreeNode,
	];
class PaddedOptionalPaddedVariableNameBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<PaddedOptionalPaddedVariableNameBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: PaddedOptionalPaddedVariableNameBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type PaddedVariableNameBranchConcreteSyntaxTreeNodeChildren = readonly [
	VariableNameBranchConcreteSyntaxTreeNode,
	OptionalWhitespaceBranchConcreteSyntaxTreeNode,
];
class PaddedVariableNameBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<PaddedVariableNameBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: PaddedVariableNameBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type VariableNameBranchConcreteSyntaxTreeNodeChildren = readonly [
	WordBranchConcreteSyntaxTreeNode,
];
class VariableNameBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<VariableNameBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: VariableNameBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type WordBranchConcreteSyntaxTreeNodeChildren = readonly [
	WordCharactersBranchConcreteSyntaxTreeNode,
];
class WordBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<WordBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(children: WordBranchConcreteSyntaxTreeNodeChildren) {
		super(children);
	}
}
type WordCharactersBranchConcreteSyntaxTreeNodeChildren = readonly [
	WordCharacterLeafConcreteSyntaxTreeNode,
	OptionalWordCharactersBranchConcreteSyntaxTreeNode,
];
class WordCharactersBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<WordCharactersBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: WordCharactersBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type WordCharacterLeafConcreteSyntaxTreeNodeCharacter =
	| "0"
	| "1"
	| "2"
	| "3"
	| "4"
	| "5"
	| "6"
	| "7"
	| "8"
	| "9"
	| "!"
	| "%"
	| "*"
	| "+"
	| "-"
	| "/"
	| "<"
	| "="
	| ">"
	| "?"
	| "^"
	| "a"
	| "b"
	| "c"
	| "d"
	| "e"
	| "f"
	| "g"
	| "h"
	| "i"
	| "j"
	| "k"
	| "l"
	| "m"
	| "n"
	| "o"
	| "p"
	| "q"
	| "r"
	| "s"
	| "t"
	| "u"
	| "v"
	| "w"
	| "x"
	| "y"
	| "z";
class WordCharacterLeafConcreteSyntaxTreeNode extends LeafConcreteSyntaxTreeNode<WordCharacterLeafConcreteSyntaxTreeNodeCharacter> {
	public constructor(
		character: WordCharacterLeafConcreteSyntaxTreeNodeCharacter,
		index: Index,
	) {
		super(character, index);
	}
}
type OptionalWordCharactersBranchConcreteSyntaxTreeNodeChildren = readonly [
	null | WordCharactersBranchConcreteSyntaxTreeNode,
];
class OptionalWordCharactersBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<OptionalWordCharactersBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: OptionalWordCharactersBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type OptionalPaddedVariableNameBranchConcreteSyntaxTreeNodeChildren = readonly [
	null | PaddedVariableNameBranchConcreteSyntaxTreeNode,
];
class OptionalPaddedVariableNameBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<OptionalPaddedVariableNameBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: OptionalPaddedVariableNameBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type OptionalStartingWithKnownFunctionCallSegmentsRestBranchConcreteSyntaxTreeNodeChildren =
	readonly [
		null | StartingWithKnownFunctionCallSegmentsRestBranchConcreteSyntaxTreeNode,
	];
class OptionalStartingWithKnownFunctionCallSegmentsRestBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<OptionalStartingWithKnownFunctionCallSegmentsRestBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: OptionalStartingWithKnownFunctionCallSegmentsRestBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type StartingWithKnownFunctionCallSegmentsRestBranchConcreteSyntaxTreeNodeChildren =

		| readonly [
				SeparatedOptionalFunctionCallSegmentsBranchConcreteSyntaxTreeNode,
		  ]
		| readonly [
				StartingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNode,
		  ]
		| readonly [
				StartingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNode,
		  ]
		| readonly [
				StartingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNode,
		  ];
class StartingWithKnownFunctionCallSegmentsRestBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<StartingWithKnownFunctionCallSegmentsRestBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: StartingWithKnownFunctionCallSegmentsRestBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type SeparatedOptionalFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren =
	readonly [
		WhitespaceBranchConcreteSyntaxTreeNode,
		OptionalFunctionCallSegmentsBranchConcreteSyntaxTreeNode,
	];
class SeparatedOptionalFunctionCallSegmentsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<SeparatedOptionalFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: SeparatedOptionalFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type WhitespaceBranchConcreteSyntaxTreeNodeChildren = readonly [
	WhitespaceCharactersBranchConcreteSyntaxTreeNode,
];
class WhitespaceBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<WhitespaceBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(children: WhitespaceBranchConcreteSyntaxTreeNodeChildren) {
		super(children);
	}
}
type OptionalFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren =
	readonly [FunctionCallSegmentsBranchConcreteSyntaxTreeNode | null];
class OptionalFunctionCallSegmentsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<OptionalFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: OptionalFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type StartingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren =
	readonly [
		UnknownFunctionCallSegmentBranchConcreteSyntaxTreeNode,
		OptionalStartingWithUnknownFunctionCallSegmentsRestBranchConcreteSyntaxTreeNode,
	];
class StartingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<StartingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: StartingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type UnknownFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren = readonly [
	OpeningSquareBracketCharacterLeafConcreteSyntaxTreeNode,
	OptionalUnknownFunctionCallSegmentContentBranchConcreteSyntaxTreeNode,
	ClosingSquareBracketCharacterLeafConcreteSyntaxTreeNode,
];
class UnknownFunctionCallSegmentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<UnknownFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: UnknownFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type OpeningSquareBracketCharacterLeafConcreteSyntaxTreeNodeCharacter = "[";
class OpeningSquareBracketCharacterLeafConcreteSyntaxTreeNode extends LeafConcreteSyntaxTreeNode<OpeningSquareBracketCharacterLeafConcreteSyntaxTreeNodeCharacter> {
	public constructor(
		character: OpeningSquareBracketCharacterLeafConcreteSyntaxTreeNodeCharacter,
		index: Index,
	) {
		super(character, index);
	}
}
type ClosingSquareBracketCharacterLeafConcreteSyntaxTreeNodeCharacter = "]";
class ClosingSquareBracketCharacterLeafConcreteSyntaxTreeNode extends LeafConcreteSyntaxTreeNode<ClosingSquareBracketCharacterLeafConcreteSyntaxTreeNodeCharacter> {
	public constructor(
		character: ClosingSquareBracketCharacterLeafConcreteSyntaxTreeNodeCharacter,
		index: Index,
	) {
		super(character, index);
	}
}
type OptionalUnknownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeChildren =
	readonly [
		null | UnknownFunctionCallSegmentContentBranchConcreteSyntaxTreeNode,
	];
class OptionalUnknownFunctionCallSegmentContentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<OptionalUnknownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: OptionalUnknownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type UnknownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeChildren =
	| readonly [PaddedOptionalPaddedVariableNameBranchConcreteSyntaxTreeNode]
	| readonly [PaddedVariableNameBranchConcreteSyntaxTreeNode];
class UnknownFunctionCallSegmentContentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<UnknownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: UnknownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type OptionalStartingWithUnknownFunctionCallSegmentsRestBranchConcreteSyntaxTreeNodeChildren =
	readonly [
		null | StartingWithUnknownFunctionCallSegmentsRestBranchConcreteSyntaxTreeNode,
	];
class OptionalStartingWithUnknownFunctionCallSegmentsRestBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<OptionalStartingWithUnknownFunctionCallSegmentsRestBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: OptionalStartingWithUnknownFunctionCallSegmentsRestBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type StartingWithUnknownFunctionCallSegmentsRestBranchConcreteSyntaxTreeNodeChildren =

		| readonly [
				SeparatedOptionalFunctionCallSegmentsBranchConcreteSyntaxTreeNode,
		  ]
		| readonly [
				StartingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNode,
		  ]
		| readonly [
				StartingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNode,
		  ]
		| readonly [
				StartingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNode,
		  ];
class StartingWithUnknownFunctionCallSegmentsRestBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<StartingWithUnknownFunctionCallSegmentsRestBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: StartingWithUnknownFunctionCallSegmentsRestBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type StartingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren =
	readonly [
		WordFunctionCallSegmentBranchConcreteSyntaxTreeNode,
		OptionalStartingWithWordFunctionCallSegmentsRestBranchConcreteSyntaxTreeNode,
	];
class StartingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<StartingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: StartingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type WordFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren = readonly [
	WordBranchConcreteSyntaxTreeNode,
];
class WordFunctionCallSegmentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<WordFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: WordFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type OptionalStartingWithWordFunctionCallSegmentsRestBranchConcreteSyntaxTreeNodeChildren =
	readonly [
		null | StartingWithWordFunctionCallSegmentsRestBranchConcreteSyntaxTreeNode,
	];
class OptionalStartingWithWordFunctionCallSegmentsRestBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<OptionalStartingWithWordFunctionCallSegmentsRestBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: OptionalStartingWithWordFunctionCallSegmentsRestBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type StartingWithWordFunctionCallSegmentsRestBranchConcreteSyntaxTreeNodeChildren =

		| readonly [
				SeparatedOptionalFunctionCallSegmentsBranchConcreteSyntaxTreeNode,
		  ]
		| readonly [
				StartingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNode,
		  ]
		| readonly [
				StartingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNode,
		  ];
class StartingWithWordFunctionCallSegmentsRestBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<StartingWithWordFunctionCallSegmentsRestBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: StartingWithWordFunctionCallSegmentsRestBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type ContentBranchConcreteSyntaxTreeNodeChildren =
	| readonly [FunctionsBranchConcreteSyntaxTreeNode]
	| readonly [PaddedOptionalFunctionsBranchConcreteSyntaxTreeNode];
class ContentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<ContentBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(children: ContentBranchConcreteSyntaxTreeNodeChildren) {
		super(children);
	}
}
type OptionalContentBranchConcreteSyntaxTreeNodeChildren = readonly [
	ContentBranchConcreteSyntaxTreeNode | null,
];
class OptionalContentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<OptionalContentBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: OptionalContentBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type FunctionsBranchConcreteSyntaxTreeNodeChildren = readonly [
	FunctionBranchConcreteSyntaxTreeNode,
	OptionalFunctionsBranchConcreteSyntaxTreeNode,
];
class FunctionsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<FunctionsBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(children: FunctionsBranchConcreteSyntaxTreeNodeChildren) {
		super(children);
	}
}
type FunctionBranchConcreteSyntaxTreeNodeChildren = readonly [
	OptionalFunctionHeaderBranchConcreteSyntaxTreeNode,
	FunctionBodyBranchConcreteSyntaxTreeNode,
];
class FunctionBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<FunctionBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(children: FunctionBranchConcreteSyntaxTreeNodeChildren) {
		super(children);
	}
}
type OptionalFunctionHeaderBranchConcreteSyntaxTreeNodeChildren = readonly [
	FunctionHeaderBranchConcreteSyntaxTreeNode | null,
];
class OptionalFunctionHeaderBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<OptionalFunctionHeaderBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: OptionalFunctionHeaderBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type FunctionHeaderBranchConcreteSyntaxTreeNodeChildren = readonly [
	FunctionHeaderSegmentsBranchConcreteSyntaxTreeNode,
];
class FunctionHeaderBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<FunctionHeaderBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: FunctionHeaderBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type FunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren =
	| readonly [
			StartingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode,
	  ]
	| readonly [
			StartingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode,
	  ]
	| readonly [
			StartingWithWordFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode,
	  ];
class FunctionHeaderSegmentsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<FunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: FunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type FunctionBodyBranchConcreteSyntaxTreeNodeChildren = readonly [
	BlockBranchConcreteSyntaxTreeNode,
];
class FunctionBodyBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<FunctionBodyBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: FunctionBodyBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type PaddedOptionalFunctionsBranchConcreteSyntaxTreeNodeChildren = readonly [
	WhitespaceBranchConcreteSyntaxTreeNode,
	OptionalFunctionsBranchConcreteSyntaxTreeNode,
];
class PaddedOptionalFunctionsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<PaddedOptionalFunctionsBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: PaddedOptionalFunctionsBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type OptionalFunctionsBranchConcreteSyntaxTreeNodeChildren = readonly [
	FunctionsBranchConcreteSyntaxTreeNode | null,
];
class OptionalFunctionsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<OptionalFunctionsBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: OptionalFunctionsBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type StartingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren =
	readonly [
		KnownFunctionHeaderSegmentBranchConcreteSyntaxTreeNode,
		OptionalStartingWithKnownFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNode,
	];
class StartingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<StartingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: StartingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type KnownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren = readonly [
	OpeningRoundBracketCharacterLeafConcreteSyntaxTreeNode,
	OptionalKnownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNode,
	ClosingRoundBracketCharacterLeafConcreteSyntaxTreeNode,
];
class KnownFunctionHeaderSegmentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<KnownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: KnownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type OptionalKnownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNodeChildren =
	readonly [
		KnownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNode | null,
	];
class OptionalKnownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<OptionalKnownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: OptionalKnownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type KnownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNodeChildren =
	| readonly [PaddedOptionalPaddedVariableNameBranchConcreteSyntaxTreeNode]
	| readonly [PaddedVariableNameBranchConcreteSyntaxTreeNode];
class KnownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<KnownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: KnownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type OptionalStartingWithKnownFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNodeChildren =
	readonly [
		null | StartingWithKnownFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNode,
	];
class OptionalStartingWithKnownFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<OptionalStartingWithKnownFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: OptionalStartingWithKnownFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type StartingWithKnownFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNodeChildren =

		| readonly [
				SeparatedOptionalFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode,
		  ]
		| readonly [
				StartingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode,
		  ]
		| readonly [
				StartingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode,
		  ]
		| readonly [
				StartingWithWordFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode,
		  ];
class StartingWithKnownFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<StartingWithKnownFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: StartingWithKnownFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type SeparatedOptionalFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren =
	readonly [
		WhitespaceBranchConcreteSyntaxTreeNode,
		OptionalFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode,
	];
class SeparatedOptionalFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<SeparatedOptionalFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: SeparatedOptionalFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type OptionalFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren =
	readonly [FunctionHeaderSegmentsBranchConcreteSyntaxTreeNode | null];
class OptionalFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<OptionalFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: OptionalFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type StartingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren =
	readonly [
		UnknownFunctionHeaderSegmentBranchConcreteSyntaxTreeNode,
		OptionalStartingWithUnknownFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNode,
	];
class StartingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<StartingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: StartingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type UnknownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren =
	readonly [
		OpeningSquareBracketCharacterLeafConcreteSyntaxTreeNode,
		OptionalUnknownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNode,
		ClosingSquareBracketCharacterLeafConcreteSyntaxTreeNode,
	];
class UnknownFunctionHeaderSegmentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<UnknownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: UnknownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type OptionalUnknownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNodeChildren =
	readonly [
		null | UnknownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNode,
	];
class OptionalUnknownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<OptionalUnknownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: OptionalUnknownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type UnknownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNodeChildren =
	| readonly [PaddedOptionalPaddedVariableNameBranchConcreteSyntaxTreeNode]
	| readonly [PaddedVariableNameBranchConcreteSyntaxTreeNode];
class UnknownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<UnknownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: UnknownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type OptionalStartingWithUnknownFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNodeChildren =
	readonly [
		null | StartingWithUnknownFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNode,
	];
class OptionalStartingWithUnknownFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<OptionalStartingWithUnknownFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: OptionalStartingWithUnknownFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type StartingWithUnknownFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNodeChildren =

		| readonly [
				SeparatedOptionalFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode,
		  ]
		| readonly [
				StartingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode,
		  ]
		| readonly [
				StartingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode,
		  ]
		| readonly [
				StartingWithWordFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode,
		  ];
class StartingWithUnknownFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<StartingWithUnknownFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: StartingWithUnknownFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type StartingWithWordFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren =
	readonly [
		WordFunctionHeaderSegmentBranchConcreteSyntaxTreeNode,
		OptionalStartingWithWordFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNode,
	];
class StartingWithWordFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<StartingWithWordFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: StartingWithWordFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type WordFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren = readonly [
	WordBranchConcreteSyntaxTreeNode,
];
class WordFunctionHeaderSegmentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<WordFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: WordFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type OptionalStartingWithWordFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNodeChildren =
	readonly [
		null | StartingWithWordFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNode,
	];
class OptionalStartingWithWordFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<OptionalStartingWithWordFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: OptionalStartingWithWordFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
type StartingWithWordFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNodeChildren =

		| readonly [
				SeparatedOptionalFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode,
		  ]
		| readonly [
				StartingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode,
		  ]
		| readonly [
				StartingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode,
		  ];
class StartingWithWordFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<StartingWithWordFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: StartingWithWordFunctionHeaderSegmentsRestBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children);
	}
}
const sourceCodeContent = ` `;
const sourceCodeContentCharacters: readonly string[] =
	sourceCodeContent.split("");
const parser = new Parser(grammar);
// for (const [ruleName1, rule1] of Object.entries(grammar.ruleById)) {
// 	console.log(ruleName1, grammar.computeFollowSetOfRule(rule1));
// }
// for (const [ruleName1, rule1] of Object.entries(grammar.ruleById)) {
// 	for (const [ruleName2, rule2] of Object.entries(grammar.ruleById)) {
// 		console.log(
// 			ruleName1,
// 			ruleName2,
// 			rule1.checkIfRuleCanBeFinalInThisRule(
// 				new Set<Rule>(),
// 				rule2,
// 				grammar.ruleById,
// 			),
// 		);
// 	}
// }
// debugger;
// console.log(
// 	grammar.ruleById.Statements.checkIfRuleCanBeFinalInThisRule(
// 		new Set<Rule>(),
// 		grammar.ruleById.WordCharacter,
// 		grammar.ruleById,
// 	),
// );

debugger;
const parsingResult = parser.parse(sourceCodeContentCharacters);
console.dir(parsingResult, {depth: null});
