import { Block } from './block'

describe('block', () => {
  it('creates a block with a hash code according to the passed data', () => {
    const newBlock = new Block(new Date('2021-01-07'), 'test data', 'random_old_hash')

    const newBlockWithSameData = new Block(new Date('2021-01-07'), 'test data', 'random_old_hash')

    expect(newBlock.hash).toEqual('9577ce2131eb67c96b3a3150cf37f06cafb3a7981efa946b96f87545f16e0420')
    expect(newBlock.hash).toEqual(newBlockWithSameData.hash)
  })
})
