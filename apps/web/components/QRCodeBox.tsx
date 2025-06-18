import { useEffect, useRef } from 'react';
import QRCode from 'qrcode';

export function QRCodeBox({ value }: { value: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, value, { width: 128 });
    }
  }, [value]);

  return <canvas ref={canvasRef} />;
}
