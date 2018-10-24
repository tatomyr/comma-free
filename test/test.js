const expect  = require('chai').expect
const f = require('../index')

const objects = `
  const obj = {
    a : 1  
    bar:  "foo" 
    c: null
'a key': 'a value'
    final: Infinity}
`

const pairsParsed = `
  const obj = {
    a : 1,  
    bar:  "foo", 
    c: null,
'a key': 'a value',
    final: Infinity,}
`

const trailingParsed = `
  const obj = {
    a : 1,  
    bar:  "foo", 
    c: null,
'a key': 'a value',
    final: Infinity}
`

describe('objects', () => {
    it('should parse pairs', () => {
        expect(f.parsePairs(objects))
            .equal(pairsParsed)
    })

    it('should parse trailing', () => {
        expect(f.parseTrailing(f.parsePairs(objects)))
            .equal(trailingParsed)
    })
})
