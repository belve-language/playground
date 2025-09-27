import type {BusyExecutingState} from "../implementations/busy/BusyExecutingState.ts";
import type {DoneExecutingState} from "../implementations/done/DoneExecutingState.ts";
import type {IdleExecutingState} from "../implementations/idle/IdleExecutingState.ts";
export type SupportedExecutingState =
	| BusyExecutingState
	| DoneExecutingState
	| IdleExecutingState;
