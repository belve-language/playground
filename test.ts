import {FunctionHeaderAbstractSyntaxTreeNode} from "./src/lib/core/abstract-syntax-tree-node/implementations/function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
import {KnownFunctionHeaderSegmentAbstractSyntaxTreeNode} from "./src/lib/core/abstract-syntax-tree-node/implementations/function-header-segment/implementations/known/KnownFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import {UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode} from "./src/lib/core/abstract-syntax-tree-node/implementations/function-header-segment/implementations/unknown/UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import {WordFunctionHeaderSegmentAbstractSyntaxTreeNode} from "./src/lib/core/abstract-syntax-tree-node/implementations/function-header-segment/implementations/word/WordFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import type {SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode} from "./src/lib/core/abstract-syntax-tree-node/implementations/function-header-segment/supported/SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import {builtInFunctions} from "./src/lib/core/built-in-functions/builtInFunctions.ts";
import {successAbstractifyingResultTypeName} from "./src/lib/core/concrete-syntax-tree-node/abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {successParsingResultTypeName} from "./src/lib/core/parsing-result/implementations/success/type-name/successParsingResultTypeName.ts";
import {SpanIndexes} from "./src/lib/core/span-indexes/SpanIndexes.ts";
import {parser} from "./src/lib/instances/parser/parser.ts";

const sourceCode = `fact (n) (a) {
	(n) + (1) = [next-n],
	(a) * (n) = [next-a],
	fact (next-n) (next-a)
}

{
	fact (1) (1)
}
`;
const sourceCodeCharacters = sourceCode.split("");
const parsingResult = parser.parse(sourceCodeCharacters);
try {
	switch (parsingResult.typeName) {
		case successParsingResultTypeName: {
			const parsedSourceCode = parsingResult.node;
			const abstractifyingResult = parsedSourceCode.abstractify();
			switch (abstractifyingResult.typeName) {
				case successAbstractifyingResultTypeName: {
					const abstractifiedParsedSourceCode = abstractifyingResult.data;
					if (abstractifiedParsedSourceCode === null) {
						throw new Error("abstractifiedParsedSourceCode is null");
					} else {
						console.log(abstractifiedParsedSourceCode.stringify());
						// console.log("-----------------------------------");
						for (const mutatedFunctions of abstractifiedParsedSourceCode.mutate(
							Object.keys(builtInFunctions).map((id) => {
								const segmentsIds = id.split(" ");
								const segments = segmentsIds.map((segmentId) => {
									switch (segmentId) {
										case "[]": {
											return UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode.create(
												{name: ""},
												new SpanIndexes(0, 0),
											);
										}
										case "()": {
											return KnownFunctionHeaderSegmentAbstractSyntaxTreeNode.create(
												{name: ""},
												new SpanIndexes(0, 0),
											);
										}
										default: {
											return WordFunctionHeaderSegmentAbstractSyntaxTreeNode.create(
												{word: segmentId},
												new SpanIndexes(0, 0),
											);
										}
									}
								}) as unknown as readonly [
									SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode,
									...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
								];
								const functionHeader =
									FunctionHeaderAbstractSyntaxTreeNode.create(
										{segments: segments},
										new SpanIndexes(0, 0),
									);
								return functionHeader;
							}),
							2,
						)) {
							console.log("-----------------------------------");
							// await new Promise((resolve) => setTimeout(resolve, 100));
							console.log(mutatedFunctions.stringify());
						}
					}
				}
			}
		}
	}
} catch (error) {
	console.error(error);
}
