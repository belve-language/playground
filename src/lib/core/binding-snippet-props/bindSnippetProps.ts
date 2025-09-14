import {createGetter} from "./creating-getter/createGetter.ts";
import type {Getter} from "./getter/Getter.ts";
import type {Snippet} from "svelte";
export function bindSnippetProps<Props extends unknown[]>(
	snippet: Snippet<Props>,
	...props: Props
): Snippet<[]> {
	return ((node: Text): ReturnType<Snippet<[]>> => {
		return (
			snippet as unknown as (
				node: Text,
				...props: {
					readonly [IndexToUse in keyof Props]: Getter<Props[IndexToUse]>;
				}
			) => ReturnType<Snippet<[]>>
		)(
			node,
			...(props.map((prop) => {
				return createGetter(prop);
			}) as {readonly [IndexToUse in keyof Props]: Getter<Props[IndexToUse]>}),
		);
	}) as Snippet<[]>;
}
