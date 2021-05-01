import { Block } from './block'
import { Blockchain } from './blockchain'

describe('blockchain', () => {
  it('starts a new blockchain with a genesis block', () => {
    const newBlockchain = new Blockchain()

    const genesisBlock = newBlockchain.getChain()[0]

    expect(genesisBlock).toBeDefined()
  })

  describe('considering an existing blockchain', () => {
    let myTestBlockchain: Blockchain

    beforeEach(() => {
      myTestBlockchain = new Blockchain()
    })

    it('adds a new block to the chain considering the latest block hash', () => {
      myTestBlockchain.addBlock(new Block(new Date('2021-01-07'), 'random data'))

      const firstBlock = myTestBlockchain.getChain()[0]
      const lastBlock = myTestBlockchain.getChain()[1]

      expect(myTestBlockchain.getChain()).toHaveLength(2)
      expect(lastBlock.previousHash).toEqual(firstBlock.hash)
    })

    it('invalidates the blockchain if a hash was changed', () => {
      myTestBlockchain.addBlock(new Block(new Date('2021-01-07'), 'random data'))

      expect(myTestBlockchain.isChainValid()).toBeTruthy()

      myTestBlockchain.getChain()[0].hash = 'fake hash'

      expect(myTestBlockchain.isChainValid()).toBeFalsy()
    })

    it('invalidates the blockchain if a previous hash was changed manually', () => {
      myTestBlockchain.addBlock(new Block(new Date('2021-01-07'), 'random data'))

      expect(myTestBlockchain.isChainValid()).toBeTruthy()

      myTestBlockchain.getChain()[1].previousHash = 'fake previous hash'

      expect(myTestBlockchain.isChainValid()).toBeFalsy()
    })
  })
})
