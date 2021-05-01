import sha256 from 'crypto-js/sha256'

export class Block {
  private readonly timestamp: Date
  private readonly data: string
  public hash: string
  public previousHash: string
  private nonce: number

  constructor(timestamp: Date, data: string, previousHash = '') {
    this.timestamp = timestamp
    this.data = data
    this.previousHash = previousHash
    this.hash = this.calculateHash()
    this.nonce = 0
  }

  calculateHash = () => sha256(`${this.timestamp}${this.data}${this.previousHash}${this.nonce}`).toString()

  mineBlock = (difficulty: number) => {
    while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
      this.nonce++
      this.hash = this.calculateHash()
    }
  }
}
