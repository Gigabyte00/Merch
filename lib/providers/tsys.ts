export async function charge(amount: number) {
  return { provider: 'tsys', amount };
}
