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
import {DoneExecutingState} from "../done/DoneExecutingState.ts";
import {idleExecutingStateTypeName} from "./type-name/idleExecutingStateTypeName.ts";
export class IdleExecutingState extends ExecutingState<
	typeof idleExecutingStateTypeName
> {
	public constructor(
		generator: Generator<SupportedFunctionCallingResult, void, void>,
	) {
		super(idleExecutingStateTypeName);
		this.generator = generator;
	}
	public override *generateEveryExecutingState(): Generator<
		BusyExecutingState | DoneExecutingState | IdleExecutingState,
		void,
		void
	> {
		yield this;
		const deeperExecutingStates = this.run().generateEveryExecutingState();
		for (const deeperExecutingState of deeperExecutingStates) {
			yield deeperExecutingState;
		}
	}
	public readonly generator: Generator<
		SupportedFunctionCallingResult,
		void,
		void
	>;
	public run(): BusyExecutingState | DoneExecutingState {
		const result = this.generator.next();
		if (result.done) {
			const newState = new DoneExecutingState();
			return newState;
		} else {
			switch (result.value.typeName) {
				case logFunctionCallingResultTypeName: {
					switch (result.value.actionTypeName) {
						case failureLogFunctionCallingResultActionTypeName: {
							const newState = new BusyExecutingState(
								this.generator,
								new FailureHighlight(
									result.value.availables,
									result.value.node,
								),
							);
							return newState;
						}
						case stepLogFunctionCallingResultActionTypeName: {
							const newState = new BusyExecutingState(
								this.generator,
								new StepHighlight(result.value.availables, result.value.node),
							);
							return newState;
						}
						case successLogFunctionCallingResultActionTypeName: {
							const newState = new BusyExecutingState(
								this.generator,
								new SuccessHighlight(
									result.value.availables,
									result.value.node,
									result.value.unknowns,
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
