export async function charge(amount: number) {
  return { provider: 'fortis', amount };
}
