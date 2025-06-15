export function gatewayRouter(provider: string) {
  switch (provider) {
    case 'firstdata':
      return import('./providers/firstdata');
    case 'worldpay':
      return import('./providers/worldpay');
    case 'tsys':
      return import('./providers/tsys');
    case 'fortis':
      return import('./providers/fortis');
    case 'paysafe':
      return import('./providers/paysafe');
    default:
      throw new Error('Unsupported provider');
  }
}
