import {SourceFileContentParser} from "./parser/types/source-file-content/SourceFileContentParser.ts";
import {computeNewParser} from "./computing-new-parser/computeNewParser.ts";
import type {Parser} from "./parser/Parser.ts";
import type {ConcreteSyntaxTree} from "../concrete-syntax-tree/ConreteSyntaxTree.ts";
import type {SupportedParseResult} from "./SupportedParseResult.ts";
export function parse(
	characters: readonly string[],
): SupportedParseResult | null {
	const reversedCharacters: readonly string[] = characters.slice().reverse();
	let parser: Parser = new SourceFileContentParser();
	const reversedCharactersEntries = reversedCharacters.entries();
	try {
		for (const [index, character] of reversedCharactersEntries) {
			parser = computeNewParser(
				character,
				parser,
				reversedCharacters.length - index - 1,
			);
		}
		const rawResult: ConcreteSyntaxTree | null = parser.finalize();
		if (rawResult === null) {
			return null;
		}
		return {status: "success", data: {tree: rawResult}};
	} catch (error: unknown) {
		return {status: "error", data: {error}};
	}
}
