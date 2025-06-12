import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function VIPForm() {
  const router = useRouter();
  const { token } = router.query;
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    if (!token) return;
    
    const verifyToken = async () => {
      const res = await fetch(`https://node-type-checker-blokepick.replit.app/verify?token=${token}`);
      const data = await res.json();
      setIsValid(data.valid);
    };

    verifyToken();
  }, [token]);

  if (isValid === null) return <p>Verificando...</p>;
  if (!isValid) return <p>Token inválido o expirado.</p>;

  return (
    <form method="POST" action="/api/submit-form">
      <h1>VIP Access Form</h1>
      <input name="discord" placeholder="Tu usuario de Discord" required />
      <input name="email" type="email" placeholder="Correo electrónico" required />
      <button type="submit">Enviar</button>
    </form>
  );
}
