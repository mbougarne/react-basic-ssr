import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import path from 'path';
import fs from 'fs';
import { StaticRouter } from 'react-router-dom';
import { App } from '../src/App';

const app = express();

app.use(express.static(path.join(__dirname, '../build'), {index: false}));

app.get('/*', (req, res) => {
  const reactHtml = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );
  
  const tempfile = path.join(__dirname, '../build/index.html');

  fs.readFile(tempfile, 'utf8', (err, data: any) => {
    if(err) {
      res.status(500).send(
        `<h1>Error loading index.html</h1>
        <pre>${JSON.stringify(data)}</pre>`
      );
    }

    res.status(200).send(
      data.replace('<div id="root"><div/>', `<div id="root">${reactHtml}</div>`)
    );
  });
})

app.listen(5050, () => {
  console.log('Server is listening on port 5050');
})