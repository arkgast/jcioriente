import { classnames } from './classnames';

describe('classnames', () => {
  it('should concatenate string class names', () => {
    const classes = classnames('foo', 'bar');
    expect(classes).toEqual('foo bar');
  });

  it('should not concatenate string class names with object class names with falsy values', () => {
    const classes = classnames('foo', { bar: false });
    expect(classes).toEqual('foo');
  });

  it('should concatenate string class names with object class names with truthy values', () => {
    const classes = classnames('foo', { bar: true });
    expect(classes).toEqual('foo bar');
  });

  it('should concatenate string class names with object class names with truthy values and falsy values', () => {
    const classes = classnames('foo', { bar: true, baz: false });
    expect(classes).toEqual('foo bar');
  });

  it('should concatenate string class names with object class names with truthy values and falsy values', () => {
    const classes = classnames('foo', { bar: true, baz: false });
    expect(classes).toEqual('foo bar');
  });

  it('should concatenate string class names with boolean expression', () => {
    const classes = classnames('foo', true && 'bar');
    expect(classes).toEqual('foo bar');
  });
});
