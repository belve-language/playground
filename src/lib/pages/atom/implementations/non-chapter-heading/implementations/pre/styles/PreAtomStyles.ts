import type {EmValue} from "../../../../../../em-value/EmValue.ts";
export type PreAtomStyles = {
	readonly backgroundColor: string;
	readonly display: "block" | "inline";
	readonly fontSize: EmValue;
	readonly marginBlock: `${EmValue} ${EmValue}`;
	readonly tabSize: number;
};
