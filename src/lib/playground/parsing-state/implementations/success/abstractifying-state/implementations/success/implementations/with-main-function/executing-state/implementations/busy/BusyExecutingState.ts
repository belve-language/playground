import {busyExecutingStateTypeName} from "./type-name/busyExecutingStateTypeName.ts";
import {failureLogFunctionCallingResultActionTypeName} from "../../../../../../../../../../../../belve/function-calling-result/implementations/log/implementations/failure/action-type-name/failureLogFunctionCallingResultActionTypeName.ts";
import {stepLogFunctionCallingResultActionTypeName} from "../../../../../../../../../../../../belve/function-calling-result/implementations/log/implementations/step/action-type-name/stepLogFunctionCallingResultActionTypeName.ts";
import {successLogFunctionCallingResultActionTypeName} from "../../../../../../../../../../../../belve/function-calling-result/implementations/log/implementations/success/action-type-name/successLogFunctionCallingResultActionTypeName.ts";
import {logFunctionCallingResultTypeName} from "../../../../../../../../../../../../belve/function-calling-result/implementations/log/type-name/logFunctionCallingResultTypeName.ts";
import {returnFunctionCallingResultTypeName} from "../../../../../../../../../../../../belve/function-calling-result/implementations/return/type-name/returnFunctionCallingResultTypeName.ts";
import type {SupportedFunctionCallingResult} from "../../../../../../../../../../../../belve/function-calling-result/supported/SupportedFunctionCallingResult.ts";
import {FailureHighlight} from "../../../highlight/implementations/failure/FailureHighlight.ts";
import {StepHighlight} from "../../../highlight/implementations/step/StepHighlight.ts";
import {SuccessHighlight} from "../../../highlight/implementations/success/SuccessHighlight.ts";
import type {SupportedHighlight} from "../../../highlight/supported/SupportedHighlight.ts";
import {ExecutingState} from "../../ExecutingState.ts";
import {IdleExecutingState} from "../idle/IdleExecutingState.ts";
export class BusyExecutingState extends ExecutingState<
	typeof busyExecutingStateTypeName
> {
	public constructor(
		generator: Generator<SupportedFunctionCallingResult, void, void>,
		highlight: null | SupportedHighlight,
	) {
		super(busyExecutingStateTypeName);
		this.generator = generator;
		this.highlight = highlight;
	}
	public readonly generator: Generator<
		SupportedFunctionCallingResult,
		void,
		void
	>;
	public readonly highlight: null | SupportedHighlight;
	public step(): BusyExecutingState | IdleExecutingState {
		const result = this.generator.next();
		if (result.done) {
			const newState = new IdleExecutingState();
			return newState;
		} else {
			switch (result.value.typeName) {
				case logFunctionCallingResultTypeName: {
					switch (result.value.actionTypeName) {
						case failureLogFunctionCallingResultActionTypeName: {
							const newState = new BusyExecutingState(
								this.generator,
								new FailureHighlight(
									result.value.node.spanIndexes,
									result.value.variables,
								),
							);
							return newState;
						}
						case stepLogFunctionCallingResultActionTypeName: {
							const newState = new BusyExecutingState(
								this.generator,
								new StepHighlight(
									result.value.node.spanIndexes,
									result.value.variables,
								),
							);
							return newState;
						}
						case successLogFunctionCallingResultActionTypeName: {
							const newState = new BusyExecutingState(
								this.generator,
								new SuccessHighlight(
									result.value.node.spanIndexes,
									result.value.unknowns,
									result.value.variables,
								),
							);
							return newState;
						}
					}
				}
				case returnFunctionCallingResultTypeName: {
					const newState = new BusyExecutingState(this.generator, null);
					return newState;
				}
			}
		}
	}
}
