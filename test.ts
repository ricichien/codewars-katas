// func(1, 4, “+”) or func(3, 2, “-“)

function returnPositiveOrNegative(
  number: number,
  numberTwo: number,
  k: string,
): number {
  if (k === "+") {
    return number + numberTwo;
  } else return number - numberTwo;
}
