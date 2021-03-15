import { expect } from 'chai';
import hello from '../src/index';

describe('World', () => {
  it('says hello', () => {
    expect(hello()).to.equal('Hello world!');
  });
});
