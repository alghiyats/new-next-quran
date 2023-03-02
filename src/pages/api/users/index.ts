import { NextApiRequest, NextApiResponse } from 'next';
import { listSurah } from '../../../utils/listSurah';

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(listSurah)) {
      throw new Error('Cannot find user data');
    }

    res.status(200).json(listSurah);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
