import {SourceFileContentParser} from "./parser/types/source-file-content/SourceFileContentParser.ts";
import {feed} from "./feeding/feed.ts";
import type {Parser} from "./parser/Parser.ts";
import type {SupportedParseResult} from "./SupportedParseResult.ts";
export function parse(
	characters: readonly string[],
): SupportedParseResult | null {
	const reversedCharacters: readonly string[] = characters.slice().reverse();
	const reversedCharactersEntries = reversedCharacters.entries();
	let parser: Parser = new SourceFileContentParser();
	for (const [index, character] of reversedCharactersEntries) {
		const feedResult = feed(
			character,
			parser,
			reversedCharacters.length - index - 1,
		);
		switch (feedResult.status) {
			case "error": {
				return {status: "error", data: {message: feedResult.data.message}};
			}
			case "success": {
				parser = feedResult.data.newParser;
				break;
			}
		}
	}
	const finalizeResult = parser.finalize();
	if (finalizeResult === null) {
		return null;
	} else {
		switch (finalizeResult.status) {
			case "error": {
				return {status: "error", data: {message: finalizeResult.data.message}};
			}
			case "success": {
				return {status: "success", data: {tree: finalizeResult.data.tree}};
			}
		}
	}
}
