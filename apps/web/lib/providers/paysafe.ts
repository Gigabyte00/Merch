export async function charge(amount: number) {
  return { provider: 'paysafe', amount };
}
