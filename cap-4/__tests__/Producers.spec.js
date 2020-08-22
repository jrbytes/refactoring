import Province from '../Province'
import { expect } from 'chai'

describe('no producers', function () {
  let noProducers
  beforeEach(function () {
    const data = {
      name: 'No Producers',
      producers: [],
      demand: 30,
      price: 20,
    }
    noProducers = new Province(data)
  })

  it('shortfall', function () {
    expect(noProducers.shortfall).equal(30)
  })

  it('profit', function () {
    expect(noProducers.profit).equal(0)
  })
})

describe('string for producers', function () {
  it('', function () {
    const data = {
      name: 'String producers',
      producers: '',
      demand: 30,
      price: 20,
    }
    const prov = new Province(data)
    expect(prov.shortfall).equal(0)
  })
})
