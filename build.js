// Runs at build time on Vercel.
// Reads env vars and writes config.js so index.html can use them.
const fs = require('fs');

const API = process.env.API_URL || '';

if (!API) {
  console.warn('⚠️  API_URL env var is missing — config.js will be empty.');
}

fs.writeFileSync('config.js', `const CONFIG = { API: '${API}' };`);
console.log('✅ config.js written.');
