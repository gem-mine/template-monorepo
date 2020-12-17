import { foo, bar } from '../src'

describe('constant', () => {
  it('foo', () => {
    expect(foo).toBe('foo')
  })

  it('bar', () => {
    expect(bar).toBe('bar')
  })
})