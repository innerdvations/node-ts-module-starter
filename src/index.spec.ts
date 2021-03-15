import { expect } from 'chai';
import hello from './index';

describe('World', () => {
  it('says hello', () => {
    expect(hello()).to.equal('Hello world!');
  });
});
