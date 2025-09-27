<script lang="ts">
	import {busyExecutingStateTypeName} from "../../../playground/parsing-state/implementations/success/abstractifying-state/implementations/success/implementations/with-main-function/executing-state/implementations/busy/type-name/busyExecutingStateTypeName.ts";
	import {failureHighlightTypeName} from "../../../playground/parsing-state/implementations/success/abstractifying-state/implementations/success/implementations/with-main-function/highlight/implementations/failure/type-name/failureHighlightTypeName.ts";
	import {stepHighlightTypeName} from "../../../playground/parsing-state/implementations/success/abstractifying-state/implementations/success/implementations/with-main-function/highlight/implementations/step/type-name/stepHighlightTypeName.ts";
	import {successHighlightTypeName} from "../../../playground/parsing-state/implementations/success/abstractifying-state/implementations/success/implementations/with-main-function/highlight/implementations/success/type-name/successHighlightTypeName.ts";
	import {withMainFunctionSuccessAbstractifyingStateSubTypeName} from "../../../playground/parsing-state/implementations/success/abstractifying-state/implementations/success/implementations/with-main-function/sub-type-name/withMainFunctionSuccessAbstractifyingStateSubTypeName.ts";
	import {successAbstractifyingStateTypeName} from "../../../playground/parsing-state/implementations/success/abstractifying-state/implementations/success/type-name/successAbstractifyingStateTypeName.ts";
	import {successParsingStateTypeName} from "../../../playground/parsing-state/implementations/success/type-name/successParsingStateTypeName.ts";
	import type {SupportedParsingState} from "../../../playground/parsing-state/supported/SupportedParsingState.ts";
	import type {State} from "../../../playground/state/State.ts";
	const {state: state_}: {readonly state: State<SupportedParsingState>} =
		$props();
</script>

<code
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
			=== failureHighlightTypeName}
	>{#each state_.sourceCode as character, index (index)}<span
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
				&& state_.parsingState.abstractifyingState.executingState.highlight.node
					.spanIndexes.from <= index
				&& state_.parsingState.abstractifyingState.executingState.highlight.node
					.spanIndexes.until > index}>{character}</span
		>{/each}</code
>

<style lang="scss">
	code {
		&.step-highlight {
			> span.highlight {
				background-color: var(--step-light);
			}
		}
		&.success-highlight {
			> span.highlight {
				background-color: var(--success-light);
			}
		}
		&.failure-highlight {
			> span.highlight {
				background-color: var(--failure-light);
			}
		}
	}
</style>
