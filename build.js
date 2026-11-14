// Runs at build time on Vercel.
// Reads env vars and writes config.js so index.html can use them.
const fs = require('fs');

const API      = process.env.API_URL  || '';
const ADMIN_PW = process.env.ADMIN_PW || '';

if (!API || !ADMIN_PW) {
  console.warn('⚠️  API_URL or ADMIN_PW env var is missing — config.js will be empty.');
}

fs.writeFileSync('config.js', `const CONFIG = {
  API:      '${API}',
  ADMIN_PW: '${ADMIN_PW}',
};`);

console.log('✅ config.js written.');
