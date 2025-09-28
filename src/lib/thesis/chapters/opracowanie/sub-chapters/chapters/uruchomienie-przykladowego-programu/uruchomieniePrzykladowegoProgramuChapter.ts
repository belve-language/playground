import type {AbstractSyntaxTreeNode} from "../../../../../../belve/abstract-syntax-tree-node/AbstractSyntaxTreeNode.ts";
import {MainFunctionAbstractSyntaxTreeNode} from "../../../../../../belve/abstract-syntax-tree-node/implementations/function/implementations/main/MainFunctionAbstractSyntaxTreeNode.ts";
import {NonMainFunctionAbstractSyntaxTreeNode} from "../../../../../../belve/abstract-syntax-tree-node/implementations/function/implementations/non-main/NonMainFunctionAbstractSyntaxTreeNode.ts";
import {WithMainFunctionFunctionsAbstractSyntaxTreeNode} from "../../../../../../belve/abstract-syntax-tree-node/implementations/functions/implementations/with-main-function/WithMainFunctionFunctionsAbstractSyntaxTreeNode.ts";
import {OperatedStatementAbstractSyntaxTreeNode} from "../../../../../../belve/abstract-syntax-tree-node/implementations/operated-statement/OperatedStatementAbstractSyntaxTreeNode.ts";
import {OrOperatorAbstractSyntaxTreeNode} from "../../../../../../belve/abstract-syntax-tree-node/implementations/operator/implementations/or/OrOperatorAbstractSyntaxTreeNode.ts";
import {ThenOperatorAbstractSyntaxTreeNode} from "../../../../../../belve/abstract-syntax-tree-node/implementations/operator/implementations/then/ThenOperatorAbstractSyntaxTreeNode.ts";
import {BlockStatementAbstractSyntaxTreeNode} from "../../../../../../belve/abstract-syntax-tree-node/implementations/statement/implementations/block/BlockStatementAbstractSyntaxTreeNode.ts";
import {FunctionCallStatementAbstractSyntaxTreeNode} from "../../../../../../belve/abstract-syntax-tree-node/implementations/statement/implementations/function-call/FunctionCallStatementAbstractSyntaxTreeNode.ts";
import {FinalStatementsAbstractSyntaxTreeNode} from "../../../../../../belve/abstract-syntax-tree-node/implementations/statements/implementations/final/FinalStatementsAbstractSyntaxTreeNode.ts";
import {IntermediateStatementsAbstractSyntaxTreeNode} from "../../../../../../belve/abstract-syntax-tree-node/implementations/statements/implementations/intermediate/IntermediateStatementsAbstractSyntaxTreeNode.ts";
import type {Variables} from "../../../../../../belve/variables/Variables.ts";
import {builtInFunctions} from "../../../../../../instances/built-in-functions/builtInFunctions.ts";
import {H3AtomBuilder} from "../../../../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/3/H3AtomBuilder.ts";
import {BrAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/br/BrAtomBuilder.ts";
import {TextAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/text/TextAtomBuilder.ts";
import {LiAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/li/LiAtomBuilder.ts";
import {PAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/p/PAtomBuilder.ts";
import {PreAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/pre/PreAtomBuilder.ts";
import {SpanAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/span/SpanAtomBuilder.ts";
import type {SupportedAtomBuilder} from "../../../../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
import type {SuccessParsingState} from "../../../../../../playground/parsing-state/implementations/success/SuccessParsingState.ts";
import type {WithMainFunctionSuccessAbstractifyingState} from "../../../../../../playground/parsing-state/implementations/success/abstractifying-state/implementations/success/implementations/with-main-function/WithMainFunctionSuccessAbstractifyingState.ts";
import {busyExecutingStateTypeName} from "../../../../../../playground/parsing-state/implementations/success/abstractifying-state/implementations/success/implementations/with-main-function/executing-state/implementations/busy/type-name/busyExecutingStateTypeName.ts";
import {doneExecutingStateTypeName} from "../../../../../../playground/parsing-state/implementations/success/abstractifying-state/implementations/success/implementations/with-main-function/executing-state/implementations/done/type-name/doneExecutingStateTypeName.ts";
import {idleExecutingStateTypeName} from "../../../../../../playground/parsing-state/implementations/success/abstractifying-state/implementations/success/implementations/with-main-function/executing-state/implementations/idle/type-name/idleExecutingStateTypeName.ts";
import type {SupportedExecutingState} from "../../../../../../playground/parsing-state/implementations/success/abstractifying-state/implementations/success/implementations/with-main-function/executing-state/supported/SupportedExecutingState.ts";
import {failureHighlightTypeName} from "../../../../../../playground/parsing-state/implementations/success/abstractifying-state/implementations/success/implementations/with-main-function/highlight/implementations/failure/type-name/failureHighlightTypeName.ts";
import {stepHighlightTypeName} from "../../../../../../playground/parsing-state/implementations/success/abstractifying-state/implementations/success/implementations/with-main-function/highlight/implementations/step/type-name/stepHighlightTypeName.ts";
import {successHighlightTypeName} from "../../../../../../playground/parsing-state/implementations/success/abstractifying-state/implementations/success/implementations/with-main-function/highlight/implementations/success/type-name/successHighlightTypeName.ts";
import type {SupportedHighlight} from "../../../../../../playground/parsing-state/implementations/success/abstractifying-state/implementations/success/implementations/with-main-function/highlight/supported/SupportedHighlight.ts";
import {State} from "../../../../../../playground/state/State.ts";
import {basePreAtomStyles} from "../../../../../base-pre-atom-styles/basePreAtomStyles.ts";
import {BelveCodeAtomBuilder} from "../../../../../belve-code-atom-builder/BelveCodeAtomBuilder.ts";
// TODO: make components classes
const exampleSourceCode = `my number is [n] {(3) = [n]. (6) = [n]}
check (n) {(n) = (6)}                         {my number is [n], check (n)}
`;
const state = State.create(builtInFunctions, exampleSourceCode.split(""));
const allExecutingStates = Array.from(state.generateEveryExecutingState());
function determineNodeName(node: AbstractSyntaxTreeNode<unknown>): string {
	if (node instanceof WithMainFunctionFunctionsAbstractSyntaxTreeNode) {
		return "funkcjach z funkcją główną";
	} else if (node instanceof MainFunctionAbstractSyntaxTreeNode) {
		return "funkcji głównej";
	} else if (node instanceof NonMainFunctionAbstractSyntaxTreeNode) {
		return `funkcji niegłównej "${node.children.header.id}"`;
	} else if (node instanceof BlockStatementAbstractSyntaxTreeNode) {
		return "instrukcji bloku";
	} else if (node instanceof FunctionCallStatementAbstractSyntaxTreeNode) {
		return "instrukcji wywołania funkcji";
	} else if (node instanceof FinalStatementsAbstractSyntaxTreeNode) {
		return "instrukcjach finalnych";
	} else if (node instanceof IntermediateStatementsAbstractSyntaxTreeNode) {
		return "instrukcjach pośrednich";
	} else if (node instanceof OrOperatorAbstractSyntaxTreeNode) {
		return 'operatorze "lub"';
	} else if (node instanceof ThenOperatorAbstractSyntaxTreeNode) {
		return 'operatorze "następnie"';
	} else if (node instanceof OperatedStatementAbstractSyntaxTreeNode) {
		return "operowanej instrukcji";
	} else {
		throw new Error("Unknown node type.");
	}
}
function determineStatusNameAtomBuilder(
	highlightTypeName: SupportedHighlight["typeName"],
): SpanAtomBuilder {
	switch (highlightTypeName) {
		case failureHighlightTypeName: {
			return new SpanAtomBuilder({color: "var(--failure-dark)"}, [
				new TextAtomBuilder("Niepowodzenie"),
			]);
		}
		case stepHighlightTypeName: {
			return new SpanAtomBuilder({color: "var(--step-dark)"}, [
				new TextAtomBuilder("Krok"),
			]);
		}
		case successHighlightTypeName: {
			return new SpanAtomBuilder({color: "var(--success-dark)"}, [
				new TextAtomBuilder("Powodzenie"),
			]);
		}
	}
}
function determineVariables(
	variables: Variables,
): readonly (PreAtomBuilder | TextAtomBuilder)[] {
	if (Object.keys(variables).length === 0) {
		return [new TextAtomBuilder("brak")];
	} else {
		return Object.entries(variables).flatMap(([name, value], index) => {
			// return `${varName} = ${varValue}`;
			return [
				...(index === 0 ? [] : [new TextAtomBuilder(", ")]),
				new PreAtomBuilder(
					{
						...basePreAtomStyles,
						display: "inline",
						fontSize: "1em",
						marginBlock: "0em 0em",
					},
					[
						new TextAtomBuilder(name),
						new TextAtomBuilder(" = "),
						new TextAtomBuilder(JSON.stringify(value)),
					],
				),
			];
		});
	}
	// .join(", ");
}
function determineDescription(highlight: SupportedHighlight): PAtomBuilder {
	const statusNameAtomBuilder = determineStatusNameAtomBuilder(
		highlight.typeName,
	);
	const nodeName = determineNodeName(highlight.node);
	// return `${statusName} w ${nodeName} z dostępnymi zmiennymi: ${determineVariables(
	// 	highlight.availables,
	// )}${highlight.typeName === successHighlightTypeName ? ` i poznanymi nieznanymi: ${determineVariables(highlight.unknowns)}` : ""}.`;
	return new PAtomBuilder({marginBlock: "1em 0em"}, [
		statusNameAtomBuilder,
		new TextAtomBuilder(` w ${nodeName}.`),
		new BrAtomBuilder(),
		new TextAtomBuilder(`Dostępne zmienne: `),
		...determineVariables(highlight.availables),
		...(highlight.typeName === successHighlightTypeName ?
			[
				new BrAtomBuilder(),
				new TextAtomBuilder(`Poznane nieznane: `),
				...determineVariables(highlight.unknowns),
			]
		:	[]),
	]);
}
function createDescriptionOfExecutingState(
	executingState: SupportedExecutingState,
): PAtomBuilder {
	switch (executingState.typeName) {
		case busyExecutingStateTypeName: {
			if (executingState.highlight === null) {
				return new PAtomBuilder({marginBlock: "1em 0em"}, [
					new TextAtomBuilder("Powodzenie programu."),
				]);
			} else {
				return determineDescription(executingState.highlight);
			}
		}
		case doneExecutingStateTypeName: {
			return new PAtomBuilder({marginBlock: "1em 0em"}, [
				new TextAtomBuilder("Zakończono działanie programu."),
			]);
		}
		case idleExecutingStateTypeName: {
			return new PAtomBuilder({marginBlock: "1em 0em"}, [
				new TextAtomBuilder("Gotowość do uruchomienia."),
			]);
		}
	}
}
// TODO: SPLIT PLEASE
const mirrors = allExecutingStates.map(
	(
		executingState: State<
			SuccessParsingState<WithMainFunctionSuccessAbstractifyingState>
		>,
	): LiAtomBuilder => {
		return new LiAtomBuilder({marginBlock: "1em 1em"}, [
			new PreAtomBuilder(
				{
					...basePreAtomStyles,
					display: "block",
					fontSize: "1em",
					marginBlock: "0em 0em",
				},
				[new BelveCodeAtomBuilder(executingState)],
			),
			createDescriptionOfExecutingState(
				executingState.parsingState.abstractifyingState.executingState,
			),
		]);
	},
);
export const uruchomieniePrzykladowegoProgramuChapter = [
	new H3AtomBuilder("Uruchomienie przykładowego programu"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Poniżej przedstawiono pełny przykład krok po kroku działania interpretera dla programu sprawdzającego czy zapis danej liczby w systemie dziesiętnym zawiera daną cyfrę.",
		),
	]),
	...mirrors,
] as const satisfies readonly SupportedAtomBuilder[];
