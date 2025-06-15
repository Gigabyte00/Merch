export async function charge(amount: number) {
  return { provider: 'worldpay', amount };
}
