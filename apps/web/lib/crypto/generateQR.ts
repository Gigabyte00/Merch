import QRCode from 'qrcode';

export async function generateQR(data: string) {
  return QRCode.toDataURL(data);
}
