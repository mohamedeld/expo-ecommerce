import type { Request, Response } from "express";

const createProduct = (req: Request, res: Response) => {
  return res.status(200).json({
    message: "Weclome ",
  });
};

export { createProduct };
