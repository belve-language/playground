import type {Parser} from "prettier";
import type {Index} from "../../index/Index.ts";
import type {SupportedFeedResult} from "../SupportedFeedResult.ts";
export function feed(
	character: string,
	parser: Parser,
	index: Index,
): SupportedFeedResult {
	switch (character) {
		case "}": {
			return parser.feedWithClosingCurlyBracketCharacter(character, index);
		}
		case ")": {
			return parser.feedWithClosingRoundBracketCharacter(character, index);
		}
		case "]": {
			return parser.feedWithClosingSquareBracketCharacter(character, index);
		}
		case "{": {
			return parser.feedWithOpeningCurlyBracketCharacter(character, index);
		}
		case "(": {
			return parser.feedWithOpeningRoundBracketCharacter(character, index);
		}
		case "[": {
			return parser.feedWithOpeningSquareBracketCharacter(character, index);
		}
		case ",":
		case ".": {
			return parser.feedWithOperatorCharacter(character, index);
		}
		case " ":
		case "\t":
		case "\n": {
			return parser.feedWithWhitespaceCharacter(character, index);
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
			return parser.feedWithIdentifierCharacter(character, index);
		}
		default: {
			throw new Error(`Unexpected character: ${character}`);
		}
	}
}
