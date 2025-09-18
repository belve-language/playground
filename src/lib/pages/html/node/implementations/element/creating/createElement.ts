import type {Atom} from "../../../../../atom/Atom.ts";
import {bindComponentProps} from "../../../../../binding-component-props/bindComponentProps.ts";
import type {Component} from "svelte";
export function createElement<
	Children extends readonly Atom[],
	OtherProps extends {readonly [name: string]: unknown},
>(
	component: Component<OtherProps & {readonly children: Children}>,
	otherProps: OtherProps,
	children: Children,
): Component<
	Omit<
		OtherProps & {readonly children: Children},
		"children" | keyof OtherProps
	>
> {
	const element: Component<
		Omit<
			OtherProps & {readonly children: Children},
			"children" | keyof OtherProps
		>
	> = bindComponentProps<
		OtherProps & {readonly children: Children},
		OtherProps & {readonly children: Children}
	>(component, {...otherProps, children: children});
	return element;
}
