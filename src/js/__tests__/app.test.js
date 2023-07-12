import GameSavingLoader from '../app';
import read from '../reader';

jest.mock('../reader')

test('wfwef', async (done) => {
  read.mockReturnValue(Promise.reject(new Error("провал")))
  const data = await GameSavingLoader.load();
  console.log(data)
  // expect(async()=>{
  //   await GameSavingLoader.load();
  // }).toThrow()
  expect(data).rejects.toEqual('провал');
  done();
});
