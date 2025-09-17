Składnię języka opisać można idąć od szczegółu do ogółu:

- znak biały:
  `"\t"` (tabulator),
  `"\n"` (nowa linia),
  `" "` (spacja),
- znak operatora:
  `","`, `"."`
- znak słowa:
  litera (mała lub wielka), cyfra i znaki pomocnicze takie jak @ # ^ + -
- znak nazwy zmiennej: znak operatora lub znak słowa
- znaki białe - łańcuch znaków białych
- słowo - łańcuch znaków słowa
- operator - znak operatora. wyróżnam 2 rodzaje w zależności od użytego znaku
  - "." -> operator "następnie" (ang. "then")
  - "," -> operator "lub" (ang. "or")
- nazwa zmiennej - łańcuch znaków nazwy zmiennej
- segment słowa wywołania funkcji - słowo
- segment znanej wywołania funkcji - "(" nazwa zmiennej ")"
- segment nieznanej wywołania funkcji - "[" nazwa zmiennej "]"
- segment wywołania funkcji - jeden z:
  - segment słowa wywołania funkcji. przykładowo `prime` `=`
  - segment znanej wywołania funkcji. przykładowo `(dividend)`
  - segment nieznanej wywołania funkcji. przykładowo `[remainder]`
- segmenty wywołania funkcji - łańcuch segmentów wywołania funkcji. przykładowo `(dividend) % (divisor)`
- wywołanie funkcji: segmenty wywołania funkcji. przykładowo `(dividend) % (divisor) = [remainder]`
- instrukcja - jeden z:
  - wywołanie funkcji
  - blok
- instrukcje - łańcuch co najmniej jednej instrukcji, instrukcje przedzielone są operatorami. przykładowo: `	(number) > (1),
(number) ^ (0.5) = [maximaldivisortocheck],
none of the integers between (2) and (maximaldivisortocheck) divide (number)`
- blok - "{" instrukcje "}". przykładowo `{
	(number) > (1),
	(number) ^ (0.5) = [maximaldivisortocheck],
	none of the integers between (2) and (maximaldivisortocheck) divide (number)
}`
- ciało funkcji - blok
- segment słowa nagłówka funkcji - słowo
- segment znanej nagłówka funkcji - "(" nazwa zmiennej ")"
- segment nieznanej nagłówka funkcji - "[" nazwa zmiennej "]"
- segment nagłówka funkcji - jeden z:
  - segment słowa nagłówka funkcji. przykładowo `prime` `=`
  - segment znanej nagłówka funkcji. przykładowo `(dividend)`
  - segment nieznanej nagłówka funkcji. przykładowo `[remainder]`
- segmenty nagłówka funkcji - łańcuch segmentów nagłówka funkcji. przykładowo `(dividend) % (divisor)`
- nagłówek funkcji - segmenty nagłówka funkcji. przykładowo `(dividend)
% (divisor) = [remainder]`
- funkcja - opcjonalny nagłówek funkcji, wymagane ciało funkcji. przykładowo:
  `(dividend) % (divisor) = [remainder] {
	(number) > (1),
	(number) ^ (0.5) = [maximaldivisortocheck],
	none of the integers between (2) and (maximaldivisortocheck) divide (number)
}`
- zawartość (kodu) - łańcuch funkcji. może być pusty

DOPISAĆ DO UŻYWANYCH POJĘĆ, ŻE ZE ZMIENNĄ CHODZI O TO, ŻE PRZY URUCHOMIENIACH PROGRAMU MOŻE TO BYĆ COŚ INNEGO, A NIE OTO, ZE JEST NIEMUTOWALNA
