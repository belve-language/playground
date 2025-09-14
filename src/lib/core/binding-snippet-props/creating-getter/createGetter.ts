import type {Getter} from "../getter/Getter.ts";
export function createGetter<Prop>(prop: Prop): Getter<Prop> {
	return (): Prop => {
		return prop;
	};
}
