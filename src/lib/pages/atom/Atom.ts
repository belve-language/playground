import type {Component} from "svelte";
export type Atom = Component<{readonly [name: string]: never}>;
