import {modelObliczeniowyChapter} from "./chapters/model-obliczeniowy/modelObliczeniowyChapter.ts";
import {semantykaChapter} from "./chapters/semantyka/semantykaChapter.ts";
import {skladniaChapter} from "./chapters/skladnia/skladniaChapter.ts";
import {uruchomieniePrzykladowegoProgramuChapter} from "./chapters/uruchomienie-przykladowego-programu/uruchomieniePrzykladowegoProgramuChapter.ts";
import type {SupportedAtomBuilder} from "../../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
export const opracowanieChapterSubChapters = [
	...skladniaChapter,
	...semantykaChapter,
	...modelObliczeniowyChapter,
	...uruchomieniePrzykladowegoProgramuChapter,
] as const satisfies readonly SupportedAtomBuilder[];
