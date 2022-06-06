import sinon from 'sinon'
import warn from '../utils/warn'

describe('warn()', function () {
  it('should append [react-gtm] to warning messages', () => {
    sinon.stub(console, 'warn')
    warn('foo')
    jest.spyOn(global.console, 'warn')
  })
})