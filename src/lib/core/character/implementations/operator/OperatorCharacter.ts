import type {orOperatorCharacter} from "./implementations/or/orOperatorCharacter.ts";
import type {thenOperatorCharacter} from "./implementations/then/thenOperatorCharacter.ts";
export type OperatorCharacter =
	| typeof orOperatorCharacter
	| typeof thenOperatorCharacter;
