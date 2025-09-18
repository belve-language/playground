import {failureLogFunctionCallingResultActionTypeName} from "../../../../../../../../../../../../belve/function-calling-result/implementations/log/implementations/failure/action-type-name/failureLogFunctionCallingResultActionTypeName.ts";
import {stepLogFunctionCallingResultActionTypeName} from "../../../../../../../../../../../../belve/function-calling-result/implementations/log/implementations/step/action-type-name/stepLogFunctionCallingResultActionTypeName.ts";
import {successLogFunctionCallingResultActionTypeName} from "../../../../../../../../../../../../belve/function-calling-result/implementations/log/implementations/success/action-type-name/successLogFunctionCallingResultActionTypeName.ts";
import {logFunctionCallingResultTypeName} from "../../../../../../../../../../../../belve/function-calling-result/implementations/log/type-name/logFunctionCallingResultTypeName.ts";
import {returnFunctionCallingResultTypeName} from "../../../../../../../../../../../../belve/function-calling-result/implementations/return/type-name/returnFunctionCallingResultTypeName.ts";
import type {SupportedFunctionCallingResult} from "../../../../../../../../../../../../belve/function-calling-result/supported/SupportedFunctionCallingResult.ts";
import {FailureHighlight} from "../../../highlight/implementations/failure/FailureHighlight.ts";
import {StepHighlight} from "../../../highlight/implementations/step/StepHighlight.ts";
import {SuccessHighlight} from "../../../highlight/implementations/success/SuccessHighlight.ts";
import {ExecutingState} from "../../ExecutingState.ts";
import {BusyExecutingState} from "../busy/BusyExecutingState.ts";
import {idleExecutingStateTypeName} from "./type-name/idleExecutingStateTypeName.ts";
export class IdleExecutingState extends ExecutingState<
	typeof idleExecutingStateTypeName
> {
	public constructor() {
		super(idleExecutingStateTypeName);
	}
	public run(
		generator: Generator<SupportedFunctionCallingResult, void, void>,
	): BusyExecutingState | IdleExecutingState {
		const result = generator.next();
		if (result.done) {
			const newState = new IdleExecutingState();
			return newState;
		} else {
			switch (result.value.typeName) {
				case logFunctionCallingResultTypeName: {
					switch (result.value.actionTypeName) {
						case failureLogFunctionCallingResultActionTypeName: {
							const newState = new BusyExecutingState(
								generator,
								new FailureHighlight(
									result.value.node.spanIndexes,
									result.value.variables,
								),
							);
							return newState;
						}
						case stepLogFunctionCallingResultActionTypeName: {
							const newState = new BusyExecutingState(
								generator,
								new StepHighlight(
									result.value.node.spanIndexes,
									result.value.variables,
								),
							);
							return newState;
						}
						case successLogFunctionCallingResultActionTypeName: {
							const newState = new BusyExecutingState(
								generator,
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
					const newState = new BusyExecutingState(generator, null);
					return newState;
				}
			}
		}
	}
}
