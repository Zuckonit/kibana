import expect from 'expect.js';
import ngMock from 'ngMock';
import RegistryFieldFormatsProvider from 'ui/registry/field_formats';
describe('String Format', function () {
  var fieldFormats;

  beforeEach(ngMock.module('kibana'));
  beforeEach(ngMock.inject(function (Private) {
    fieldFormats = Private(RegistryFieldFormatsProvider);
  }));

  it('decode a base64 string', function () {
    var StringFormat = fieldFormats.getType('string');
    var string = new StringFormat({
      transform: 'base64'
    });
    expect(string.convert('Zm9vYmFy')).to.be('foobar');
  });

  it('convert a string to title case', function () {
    var StringFormat = fieldFormats.getType('string');
    var string = new StringFormat({
      transform: 'title'
    });
    expect(string.convert('PLEASE DO NOT SHOUT')).to.be('Please Do Not Shout');
    expect(string.convert('Mean, variance and standard_deviation.')).to.be('Mean, Variance And Standard_deviation.');
    expect(string.convert('Stay CALM!')).to.be('Stay Calm!');
  });

});
