import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function VIPForm() {
  const router = useRouter();
  const { token } = router.query;
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    // Esperar a que router esté listo
    if (!router.isReady) return;

    // Si no hay token, redirigir al home
    if (!token) {
      router.push('/');
      return;
    }

    // Verificar token
    const verifyToken = async () => {
      try {
        const res = await fetch(`https://node-type-checker-blokepick.replit.app/verify?token=${token}`);
        const data = await res.json();
        setIsValid(data.valid);
      } catch (err) {
        console.error('Error al verificar el token:', err);
        setIsValid(false);
      }
    };

    verifyToken();
  }, [router.isReady, token]);

  if (!router.isReady || isValid === null) return <p>Verificando acceso VIP...</p>;

  if (!isValid) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>❌ Acceso denegado</h2>
        <p>Este enlace ya ha sido usado o es inválido.</p>
        <button onClick={() => router.push('/')}>Volver al inicio</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🎟️ VIP Access Form</h1>
      <form method="POST" action="/api/submit-form">
        <input name="discord" placeholder="Tu usuario de Discord" required style={{ display: 'block', margin: '1rem 0', padding: '0.5rem' }} />
        <input name="email" type="email" placeholder="Correo electrónico" required style={{ display: 'block', margin: '1rem 0', padding: '0.5rem' }} />
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>Enviar</button>
      </form>
    </div>
  );
}
