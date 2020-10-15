import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  text: string;
};
export default (_: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ text: "Hello" });
};
