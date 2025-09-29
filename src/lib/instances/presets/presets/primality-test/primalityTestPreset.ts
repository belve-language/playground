import type {Preset} from "../../../../playground/preset/Preset.ts";
export const primalityTestPreset = {
	descriptionInPolish:
		"Test pierwszości to sprawdzenie czy zadana liczba jest liczbą pierwszą, czyli taką liczbą naturalną większą od 1, która ma dokładnie dwa dzielniki: 1 oraz samą siebie. Wykorzystywana w implementacji jest rekurencja, która sprawdza podzielność zadanej liczby przez kolejne potencjalne dzielniki.",
	name: "Primality test",
	nameInPolish: "Test pierwszości",
	sourceCode: `is (dividend) not divisible by (divisor) {
	(dividend) % (divisor) = [remainder],
	(remainder) != (0)
}

is (number) prime {
	(number) > (1),
	(number) ^ (0.5) = [maximal divisor to check],
	no integer between (2) and (maximal divisor to check) divides (number)
}

no integer between (start) and (end) divides (dividend) {
	(start) > (end).
	(start) <= (end),
	is (dividend) not divisible by (start),
	(start) + (1) = [next start],
	no integer between (next start) and (end) divides (dividend)
}

{
	is (11) prime
}
`,
} as const satisfies Preset;
