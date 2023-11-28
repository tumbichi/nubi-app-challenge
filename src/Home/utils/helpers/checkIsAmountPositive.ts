export default function checkIsAmountPositive(amount: string): boolean {
  const amountNumber = parseInt(amount.replace(' $', ''), 10);
  return amountNumber > 0;
}
