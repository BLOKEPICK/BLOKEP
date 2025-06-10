
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  const state = uuidv4();
  const redirect_uri = encodeURIComponent(process.env.DISCORD_REDIRECT_URI);

  const url = `https://discord.com/api/oauth2/authorize?client_id=${process.env.DISCORD_CLIENT_ID}` +
    `&redirect_uri=${redirect_uri}&response_type=code&scope=identify&state=${state}`;

  res.redirect(url);
}
