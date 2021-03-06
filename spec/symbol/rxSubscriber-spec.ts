import {expect} from 'chai';
import {root} from '../../dist/package/util/root';
import {$$rxSubscriber} from '../../dist/package/symbol/rxSubscriber';

describe('rxSubscriber symbol', () => {
  it('should exist in the proper form', () => {
    if (root.Symbol && root.Symbol.for) {
      expect($$rxSubscriber).to.equal(root.Symbol.for('rxSubscriber'));
    } else {
      expect($$rxSubscriber).to.equal('@@rxSubscriber');
    }
  });
});