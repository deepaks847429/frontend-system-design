import {describe, expect, test} from '@jest/globals'

import {sum} from '../src/index'

describe ('sum module', ()=>{
  test('adds 1+2 is equal to 3', ()=>{
    expect(sum(1,2)).toBe(3)
  });

  test("add 2+5 is equal to 7", ()=>{
    expect(sum(2,5)).toBe(7)
  });

  test("sum 5+5 is equal to 10", ()=>{
    expect(sum(5,5)).toBe(10)
  })
})