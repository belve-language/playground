import type {Index} from "../../index/Index.ts";
import type {Parser} from "../parser/Parser.ts";
import type {SupportedFeedResult} from "../SupportedFeedResult.ts";
export function feed(
	character: string,
	parser: Parser,
	index: Index,
): SupportedFeedResult {
	switch (character) {
		case "}": {
			return parser.feedWithClosingCurlyBracket(character, index);
		}
		case ")": {
			return parser.feedWithClosingRoundBracket(character, index);
		}
		case "]": {
			return parser.feedWithClosingSquareBracket(character, index);
		}
		case "{": {
			return parser.feedWithOpeningCurlyBracket(character, index);
		}
		case "(": {
			return parser.feedWithOpeningRoundBracket(character, index);
		}
		case "[": {
			return parser.feedWithOpeningSquareBracket(character, index);
		}
		case ",":
		case ".": {
			return parser.feedWithOperator(character, index);
		}
		case " ":
		case "\t":
		case "\n": {
			return parser.feedWithWhitespace(character, index);
		}
		case "a":
		case "b":
		case "c":
		case "d":
		case "e":
		case "f":
		case "g":
		case "h":
		case "i":
		case "j":
		case "k":
		case "l":
		case "m":
		case "n":
		case "o":
		case "p":
		case "q":
		case "r":
		case "s":
		case "t":
		case "u":
		case "v":
		case "w":
		case "x":
		case "y":
		case "z":
		case "A":
		case "B":
		case "C":
		case "D":
		case "E":
		case "F":
		case "G":
		case "H":
		case "I":
		case "J":
		case "K":
		case "L":
		case "M":
		case "N":
		case "O":
		case "P":
		case "Q":
		case "R":
		case "S":
		case "T":
		case "U":
		case "V":
		case "W":
		case "X":
		case "Y":
		case "Z":
		case "-":
		case "+":
		case "%":
		case "0":
		case "1":
		case "2":
		case "3":
		case "4":
		case "5":
		case "6":
		case "7":
		case "8":
		case "9":
		case "=":
		case ">":
		case "<":
		case "!": {
			return parser.feedWithIdentifier(character, index);
		}
		default: {
			throw new Error(`Unexpected character: ${character}`);
		}
	}
}
