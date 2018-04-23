export {}
// const describe = require('mocha').describe
// import * as mocha from 'mocha'
// import * as chai from 'chai'
// const expect = require('chai').expect
// import {describe} from 'mocha'

// const describe = require('mocha').describe
import {describe} from 'mocha'
// const it = require('mocha').it
// const expect = chai.expect

// import {describe, it} from 'mocha'
// import {expect} from 'chai'

describe('The Truth', () => {
  // it('sets the user agent', () => {
  //   expect(true === true)
  // })
})

// const PercyAgentClient = require('../../dist/public/percy-agent.js')

// mocha.describe('PercyAgentClient', () => {
//   let subject = new PercyAgentClient({userAgent: 'test-user-agent'})

//   mocha.describe('#constructor', () => {
//     mocha.it('sets the user agent', () => {
//       chai.expect(subject.userAgent).to.equal('test-user-agent')
//       chai.expect(true).to.equal(true)
//     })
//   })
// })

let runner = new Mocha()
runner.setup('bdd')
runner.checkLeaks()
runner.run()
alert('dsfsd')
