import {feed} from "./feeding/feed.ts";
import {SourceFileContentParser} from "./parser/types/source-file-content/SourceFileContentParser.ts";
import {createErrorParseResult} from "./parse-result/types/error/creating/createErrorParseResult.ts";
import type {Parser} from "./parser/Parser.ts";
import {createSuccessParseResult} from "./parse-result/types/success/creating/createSuccessParseResult.ts";
import {errorFinalizeResultTypeName} from "./finalize-result/types/error/type-name/errorFinalizeResultTypeName.ts";
import {successFinalizeResultTypeName} from "./finalize-result/types/success/type-name/errorFinalizeResultTypeName.ts";
import {errorFeedResultTypeName} from "./feed-result/types/error/type-name/errorFeedResultTypeName.ts";
import {successFeedResultTypeName} from "./feed-result/types/success/type-name/successFeedResultTypeName.ts";
import type {SupportedParseResult} from "./parse-result/supported/SupportedParseResult.ts";
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
		switch (feedResult.typeName) {
			case errorFeedResultTypeName: {
				return createErrorParseResult(feedResult.data.message);
			}
			case successFeedResultTypeName: {
				parser = feedResult.data.newParser;
				break;
			}
		}
	}
	const finalizeResult = parser.finalize();
	if (finalizeResult === null) {
		return null;
	} else {
		switch (finalizeResult.typeName) {
			case errorFinalizeResultTypeName: {
				return createErrorParseResult(finalizeResult.data.message);
			}
			case successFinalizeResultTypeName: {
				return createSuccessParseResult(finalizeResult.data.tree);
			}
		}
	}
}
