
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function VIPFormPage() {
  const router = useRouter();
  const { token } = router.query;
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    if (!token) return;

    const checkToken = async () => {
      try {
        const res = await fetch(`https://eog9g8jnhm3sjxr.m.pipedream.net?token=${token}`);
        const data = await res.json();

        if (data.valid) {
          setStatus('valid');
        } else {
          setStatus('invalid');
        }
      } catch (err) {
        setStatus('error');
      }
    };

    checkToken();
  }, [token]);

  if (status === 'loading') return <p>Validando acceso...</p>;
  if (status === 'invalid') return <p>❌ Token inválido o expirado.</p>;
  if (status === 'error') return <p>⚠️ Error al validar el token. Intenta más tarde.</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Acceso VIP</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Email usado en Stripe:
          <input type="email" required />
        </label>
        <br /><br />
        <label>
          Discord ID:
          <input type="text" required />
        </label>
        <br /><br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
