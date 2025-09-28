import {H3AtomBuilder} from "../../../../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/3/H3AtomBuilder.ts";
import {TextAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/text/TextAtomBuilder.ts";
import {PAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/p/PAtomBuilder.ts";
import type {SupportedAtomBuilder} from "../../../../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
export const parsowanieWybaczajaceChapter = [
	new H3AtomBuilder("Parsowanie wybaczające (forgiving parsing)"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Technika parsowania, która pozwala na kontynuowanie procesu parsowania pomimo napotkania błędów składniowych lub uniemożliwiających dalsze etapy przetwarzania kodu źródłowego. Parser wybaczający stara się zidentyfikować i zignorować błędy, aby wygenerować jak najbardziej kompletną strukturę drzewa składni konkretnej i poinformować programistę o napotkanych problemach.",
		),
	]),
] as const satisfies readonly SupportedAtomBuilder[];
