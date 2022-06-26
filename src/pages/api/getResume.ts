import stream from 'stream';
import { promisify } from 'util';
import fetch from 'node-fetch';

const pipeline = promisify(stream.pipeline);
const url = 'https://drive.google.com/uc?id=1buEjiSIHEjc6TfZi51xD6nCKM1WPNLNz&export=download';

const handler = async (req: any, res: { setHeader: (arg0: string, arg1: string) => void; }) => {
    const response = await fetch(url); // replace this with your API call & options
    if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', "attachment; filename=himanshu.pdf");

    await pipeline(response.body, res);
};

export default handler;