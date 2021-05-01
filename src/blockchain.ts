import { Block } from './block'
import { config } from './config'

export class Blockchain {
  private readonly chain: Block[]
  private readonly genesisBlock: Block

  constructor() {
    this.genesisBlock = new Block(new Date('1970-01-01'), 'genesis block', '0')

    this.genesisBlock.mineBlock(config.miningDifficulty)

    this.chain = [this.genesisBlock]
  }

  getChain = () => this.chain

  getLastBlock = () => this.chain[this.chain.length - 1]

  addBlock = (newBlock: Block) => {
    newBlock.previousHash = this.getLastBlock().hash

    newBlock.mineBlock(config.miningDifficulty)

    this.chain.push(newBlock)
  }

  isChainValid = () =>
    this.chain.every((currentBlock, index) => {
      const previousBlock = this.chain[index - 1]

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false
      }

      return previousBlock ? currentBlock.previousHash === previousBlock.hash : true
    })
}
