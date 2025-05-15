import handler from '../pages/api/hello';
import type { NextApiRequest, NextApiResponse } from 'next';

describe('GET /api/hello', () => {
  it('returns Hello, world!', () => {
    const req = {} as NextApiRequest;
    const json = jest.fn();
    const status = jest.fn(() => ({ json }));
    const res = { status } as unknown as NextApiResponse;

    handler(req, res);
    expect(status).toHaveBeenCalledWith(200);
    expect(json).toHaveBeenCalledWith({ message: 'Hello, world!' });
  });
});
