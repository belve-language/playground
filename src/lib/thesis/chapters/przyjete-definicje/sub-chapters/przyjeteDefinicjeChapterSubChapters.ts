import {abstraktyfikacjaChapter} from "./chapters/abstraktyfikacja/abstraktyfikacjaChapter.ts";
import {codebaseChapter} from "./chapters/codebase/codebaseChapter.ts";
import {drzewoSkladniAbstrakcyjnejChapter} from "./chapters/drzewo-skladni-abstrakcyjnej/drzewoSkladniAbstrakcyjnejChapter.ts";
import {drzewoSkladniKonkretnejChapter} from "./chapters/drzewo-skladni-konkretnej/drzewoSkladniKonkretnejChapter.ts";
import {efektUbocznyChapter} from "./chapters/efekt-uboczny/efektUbocznyChapter.ts";
import {formaterChapter} from "./chapters/formater/formaterChapter.ts";
import {formatowanieChapter} from "./chapters/formatowanie/formatowanieChapter.ts";
import {interpreterChapter} from "./chapters/interpreter/interpreterChapter.ts";
import {kodZrodlowyChapter} from "./chapters/kod-zrodlowy/kodZrodlowyChapter.ts";
import {kompilatorChapter} from "./chapters/kompilator/kompilatorChapter.ts";
import {linterChapter} from "./chapters/linter/linterChapter.ts";
import {lintowanieChapter} from "./chapters/lintowanie/lintowanieChapter.ts";
import {nawracanieChapter} from "./chapters/nawracanie/nawracanieChapter.ts";
import {notacjaBackusaNauraChapter} from "./chapters/notacja-Backusa-Naura/notacjaBackusaNauraChapter.ts";
import {parsowanieChapter} from "./chapters/parsowanie/parsowanieChapter.ts";
import {parsowanieWybaczajaceChapter} from "./chapters/parsowanie-wybaczajace/parsowanieWybaczajaceChapter.ts";
import {playgroundChapter} from "./chapters/playground/playgroundChapter.ts";
import {programowanieLogiczneChapter} from "./chapters/programowanie-logiczne/programowanieLogiczneChapter.ts";
import {serwerJezykowyChapter} from "./chapters/serwer-jezykowy/serwerJezykowyChapter.ts";
import {wykonanieKoduChapter} from "./chapters/wykonanie-kodu/wykonanieKoduChapter.ts";
import {zlozonoscPoznawczaKoduZrodlowegoChapter} from "./chapters/zlozonosc-poznawcza-kodu-zrodlowego/zlozonoscPoznawczaKoduZrodlowegoChapter.ts";
import {zmiennaChapter} from "./chapters/zmienna/zmiennaChapter.ts";
import type {SupportedAtomBuilder} from "../../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
export const przyjeteDefinicjeChapterSubChapters = [
	...abstraktyfikacjaChapter,
	...codebaseChapter,
	...drzewoSkladniAbstrakcyjnejChapter,
	...drzewoSkladniKonkretnejChapter,
	...efektUbocznyChapter,
	...formaterChapter,
	...formatowanieChapter,
	...interpreterChapter,
	...kodZrodlowyChapter,
	...kompilatorChapter,
	...linterChapter,
	...lintowanieChapter,
	...nawracanieChapter,
	...notacjaBackusaNauraChapter,
	...parsowanieChapter,
	...parsowanieWybaczajaceChapter,
	...playgroundChapter,
	...programowanieLogiczneChapter,
	...serwerJezykowyChapter,
	...wykonanieKoduChapter,
	...zlozonoscPoznawczaKoduZrodlowegoChapter,
	...zmiennaChapter,
] as const satisfies readonly SupportedAtomBuilder[];
