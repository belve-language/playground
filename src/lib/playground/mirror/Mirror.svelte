<script lang="ts">
	import {busyExecutingStateTypeName} from "../parsing-state/implementations/success/abstractifying-state/implementations/success/implementations/with-main-function/executing-state/implementations/busy/type-name/busyExecutingStateTypeName.ts";
	import {failureHighlightTypeName} from "../parsing-state/implementations/success/abstractifying-state/implementations/success/implementations/with-main-function/highlight/implementations/failure/type-name/failureHighlightTypeName.ts";
	import {stepHighlightTypeName} from "../parsing-state/implementations/success/abstractifying-state/implementations/success/implementations/with-main-function/highlight/implementations/step/type-name/stepHighlightTypeName.ts";
	import {successHighlightTypeName} from "../parsing-state/implementations/success/abstractifying-state/implementations/success/implementations/with-main-function/highlight/implementations/success/type-name/successHighlightTypeName.ts";
	import {withMainFunctionSuccessAbstractifyingStateSubTypeName} from "../parsing-state/implementations/success/abstractifying-state/implementations/success/implementations/with-main-function/sub-type-name/withMainFunctionSuccessAbstractifyingStateSubTypeName.ts";
	import {successAbstractifyingStateTypeName} from "../parsing-state/implementations/success/abstractifying-state/implementations/success/type-name/successAbstractifyingStateTypeName.ts";
	import {successParsingStateTypeName} from "../parsing-state/implementations/success/type-name/successParsingStateTypeName.ts";
	import {unexpectedCharacterParsingStateTypeName} from "../parsing-state/implementations/unexpected-character/type-name/unexpectedCharacterParsingStateTypeName.ts";
	import type {State} from "../state/State.ts";
	const {state_}: {readonly state_: State} = $props();
</script>

<pre
	class:step-highlight={state_.parsingState.typeName
		=== successParsingStateTypeName
		&& state_.parsingState.abstractifyingState.typeName
			=== successAbstractifyingStateTypeName
		&& state_.parsingState.abstractifyingState.subTypeName
			=== withMainFunctionSuccessAbstractifyingStateSubTypeName
		&& state_.parsingState.abstractifyingState.executingState.typeName
			=== busyExecutingStateTypeName
		&& state_.parsingState.abstractifyingState.executingState.highlight !== null
		&& state_.parsingState.abstractifyingState.executingState.highlight.typeName
			=== stepHighlightTypeName}
	class:success-highlight={state_.parsingState.typeName
		=== successParsingStateTypeName
		&& state_.parsingState.abstractifyingState.typeName
			=== successAbstractifyingStateTypeName
		&& state_.parsingState.abstractifyingState.subTypeName
			=== withMainFunctionSuccessAbstractifyingStateSubTypeName
		&& state_.parsingState.abstractifyingState.executingState.typeName
			=== busyExecutingStateTypeName
		&& state_.parsingState.abstractifyingState.executingState.highlight !== null
		&& state_.parsingState.abstractifyingState.executingState.highlight.typeName
			=== successHighlightTypeName}
	class:failure-highlight={state_.parsingState.typeName
		=== successParsingStateTypeName
		&& state_.parsingState.abstractifyingState.typeName
			=== successAbstractifyingStateTypeName
		&& state_.parsingState.abstractifyingState.subTypeName
			=== withMainFunctionSuccessAbstractifyingStateSubTypeName
		&& state_.parsingState.abstractifyingState.executingState.typeName
			=== busyExecutingStateTypeName
		&& state_.parsingState.abstractifyingState.executingState.highlight !== null
		&& state_.parsingState.abstractifyingState.executingState.highlight.typeName
			=== failureHighlightTypeName}>{#each state_.sourceCode.split("") as character, index}<span
			class:unexpected={state_.parsingState.typeName
				=== unexpectedCharacterParsingStateTypeName
				&& state_.parsingState.index === index}
			class:highlight={state_.parsingState.typeName
				=== successParsingStateTypeName
				&& state_.parsingState.abstractifyingState.typeName
					=== successAbstractifyingStateTypeName
				&& state_.parsingState.abstractifyingState.subTypeName
					=== withMainFunctionSuccessAbstractifyingStateSubTypeName
				&& state_.parsingState.abstractifyingState.executingState.typeName
					=== busyExecutingStateTypeName
				&& state_.parsingState.abstractifyingState.executingState.highlight
					!== null
				&& state_.parsingState.abstractifyingState.executingState.highlight
					.spanIndexes.from <= index
				&& state_.parsingState.abstractifyingState.executingState.highlight
					.spanIndexes.until > index}>{character}</span
		>{/each}</pre>

<style lang="scss">
	pre {
		&.step-highlight {
			> span.highlight {
				background-color: hsl(240, 100%, 50%);
			}
		}
		&.success-highlight {
			> span.highlight {
				background-color: hsl(120, 100%, 25%);
			}
		}
		&.failure-highlight {
			> span.highlight {
				background-color: hsl(0, 100%, 50%);
			}
		}
		> .unexpected {
			outline: 5px solid hsl(0, 100%, 50%);
		}
		margin-block: 0;
		font-size: inherit;
	}
</style>
