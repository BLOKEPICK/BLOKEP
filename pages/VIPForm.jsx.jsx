import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function VIPFormPage() {
  const router = useRouter();
  const { token } = router.query;
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    if (!token) return;

    const checkToken = async () => {
      const res = await fetch('https://eog9g8jnhm3sjxr.m.pipedream.net?token=' + token);

      const data = await res.json();
      setStatus(data.valid ? 'valid' : 'invalid');
    };
    checkToken();
  }, [token]);

  if (status === 'loading') return <p>Validando acceso...</p>;
  if (status === 'invalid') return <p>❌ Token inválido o expirado.</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Formulario VIP</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Email usado en Stripe:<br /><input type="email" required /></label><br /><br />
        <label>Discord ID:<br /><input type="text" required /></label><br /><br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
