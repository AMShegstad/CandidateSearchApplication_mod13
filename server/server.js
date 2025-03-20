import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
//import { Request, Response } from 'express';
import { searchGithub, searchGithubUser } from './api/API.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files from the client dist directory
app.use(express.static(path.join(__dirname, '../client/dist')));


// app.get('/', (req, res) => {
//   console.log(req.method);
//   res.sendFile(path.join(__dirname, '../client/dist/index.html'));
// });

app.get('/api/searchGithub', async (req, res) => {
  try {
    const result = await searchGithub();
    console.log(req.method);
    if (result && result.login) {
      res.json(result.login);
    } else {
      res.status(500).json({ error: 'Unexpected response format' });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get('/api/searchGithubUser/:username', async (req, res) => {
  try {
    const { username } = req.params;
    const result = await searchGithubUser(username);
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get('*', (req, res) => {
  console.log(req.method);
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});