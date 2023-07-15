import GameSavingLoader from '../app';
import read, { read as originRead } from '../reader';

jest.mock('../reader');

test('testing reject promise', async (done) => {
  const expectedError = new Error('Rejected promise in "read"');
  read.mockRejectedValue(expectedError);
  try {
    const data = await GameSavingLoader.load();
  } catch {
    expect(err.message).toBe(expectedError.message);
  }
  done();
});
