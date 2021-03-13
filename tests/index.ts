import { expect } from 'chai';
import { hello } from '../src';

describe('World', () => {

    it('says hello', () => {
        expect(hello()).to.equal("Hello world!");
    });

});