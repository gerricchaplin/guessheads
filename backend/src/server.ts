import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Backend is live!' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
