import type {Component} from "svelte";
export function bindComponentProps<
	Props extends {readonly [name: string]: unknown},
	PropsToBind extends Props,
>(
	component: Component<Props>,
	propsToBind: PropsToBind,
): Component<Omit<Props, keyof PropsToBind>> {
	return (anchor, props: Omit<Props, keyof PropsToBind>) => {
		const calledComponent = component(anchor, {...propsToBind, ...props});
		return calledComponent;
	};
}
