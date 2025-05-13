// import type { Request, Response } from 'express';
// import express from 'express';
// const router = express.Router();

// import path from 'node:path';
// import { fileURLToPath } from 'node:url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// import apiRoutes from './api/index.js';

// router.use('/api', apiRoutes);

// // serve up react front-end in production
// router.use((_req: Request, res: Response) => {
//   res.sendFile(path.join(__dirname, '../../../client/dist/index.html'));
// });

// export default router;
import type { Request, Response } from 'express';
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import apiRoutes from './api/index.js';


router.use('/api', apiRoutes);


const clientDistPath = path.join(__dirname, '../../../client/dist');
router.use(express.static(clientDistPath));


router.get('*', (_req: Request, res: Response) => {
  res.sendFile(path.join(clientDistPath, 'index.html'));
});

export default router;

