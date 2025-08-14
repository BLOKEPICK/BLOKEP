
export default async function handler(req, res) {
  const code = req.query.code;
  const redirect_uri = process.env.DISCORD_REDIRECT_URI;

  const data = new URLSearchParams({
    client_id: process.env.DISCORD_CLIENT_ID,
    client_secret: process.env.DISCORD_CLIENT_SECRET,
    grant_type: 'authorization_code',
    code,
    redirect_uri,
    scope: 'identify',
  });

  try {
    const tokenRes = await fetch('https://discord.com/api/oauth2/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: data,
    });

    const tokenData = await tokenRes.json();
    const access_token = tokenData.access_token;

    const userRes = await fetch('https://discord.com/api/users/@me', {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    const userData = await userRes.json();

    console.log("Usuario conectado desde Discord:", userData);

    res.redirect('/thanks');
  } catch (error) {
    console.error("Error al autenticar con Discord:", error);
    res.status(500).send("Error autenticando con Discord");
  }
}
