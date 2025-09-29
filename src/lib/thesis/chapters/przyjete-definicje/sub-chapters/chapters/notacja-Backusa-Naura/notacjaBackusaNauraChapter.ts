import {H3AtomBuilder} from "../../../../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/3/H3AtomBuilder.ts";
import {TextAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/text/TextAtomBuilder.ts";
import {CodeAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/code/CodeAtomBuilder.ts";
import {PAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/p/PAtomBuilder.ts";
import {PreAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/pre/PreAtomBuilder.ts";
import type {SupportedAtomBuilder} from "../../../../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
import {basePreAtomStyles} from "../../../../../base-pre-atom-styles/basePreAtomStyles.ts";
export const notacjaBackusaNauraChapter = [
	new H3AtomBuilder("Notacja Backusa-Naura (Backus-Naur form)"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			`Formalny sposób zapisu gramatyk bezkontekstowych, składający się z nieterminali i terminali. Nieterminale mogą być rozwijane w inne symbole, a terminale stanowią atomowe elementy języka (np. słowa kluczowe, literały, znaki). Reguły produkcji mają postać:`,
		),
	]),
	new PreAtomBuilder(
		{
			...basePreAtomStyles,
			display: "block",
			fontSize: "1em",
			marginBlock: "1em 1em",
		},
		[new TextAtomBuilder(`<nieterminal> ::= symbol₁ | symbol₂ | ...`)],
	),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(`gdzie `),
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "inline",
				fontSize: "1em",
				marginBlock: "0em 0em",
			},
			[new TextAtomBuilder("::=")],
		),
		new TextAtomBuilder(', oznacza "może być rozwinięte w”, a '),
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "inline",
				fontSize: "1em",
				marginBlock: "0em 0em",
			},
			[new TextAtomBuilder("|")],
		),
		new TextAtomBuilder(
			" wprowadza alternatywę wyboru. Symbol może być terminalem zapisywanym jako ",
		),
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "inline",
				fontSize: "1em",
				marginBlock: "0em 0em",
			},
			[new TextAtomBuilder('"terminal"')],
		),
		new TextAtomBuilder(" lub nieterminalem zapisywanym jako "),
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "inline",
				fontSize: "1em",
				marginBlock: "0em 0em",
			},
			[new TextAtomBuilder("<nieterminal>")],
		),
		new TextAtomBuilder("."),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(`Przykład:`),
	]),
	new PreAtomBuilder(
		{
			...basePreAtomStyles,
			display: "block",
			fontSize: "1em",
			marginBlock: "1em 1em",
		},
		[
			new CodeAtomBuilder([
				new TextAtomBuilder(`<cyfra> ::= "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
<liczba> ::= <cyfra> | <cyfra> <liczba>
<wyrażenie> ::= <liczba> "+" <liczba>
`),
			]),
		],
	),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			`Reguły te definiują proste wyrażenia arytmetyczne składające się z dwóch liczb i znaku dodawania.`,
		),
	]),
] as const satisfies readonly SupportedAtomBuilder[];
