import type {Index} from "../../index/Index.ts";
import type {Parser} from "../parser/Parser.ts";
export function computeNewParser(
	character: string,
	parser: Parser,
	index: Index,
): Parser {
	switch (character) {
		case "}": {
			return parser.parseClosingCurlyBracket(character, index);
		}
		case ")": {
			return parser.parseClosingRoundBracket(character, index);
		}
		case "]": {
			return parser.parseClosingSquareBracket(character, index);
		}
		case "{": {
			return parser.parseOpeningCurlyBracket(character, index);
		}
		case "(": {
			return parser.parseOpeningRoundBracket(character, index);
		}
		case "[": {
			return parser.parseOpeningSquareBracket(character, index);
		}
		case ",":
		case ".": {
			return parser.parseOperator(character, index);
		}
		case " ":
		case "\t":
		case "\n": {
			return parser.parseWhitespace(character, index);
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
			return parser.parseIdentifier(character, index);
		}
		default: {
			throw new Error(`Unexpected character: ${character}`);
		}
	}
}
