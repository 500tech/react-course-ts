import getUserPermissions from '../../exercise/01-mocking-functions';

describe('mocking functions', () => {

  test('should return undefined if user does not exist', () => {
    const spy = jest.fn();

    getUserPermissions('bob', spy);

    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ error: expect.any(String) }));
  });

  test('should return edit if is admin', () => {
    const spy = jest.fn();

    getUserPermissions('joe', spy);

    expect(spy).toHaveBeenCalledWith('edit');
  });

  test('should return view if not admin', () => {
    const spy = jest.fn();

    getUserPermissions('james', spy);

    expect(spy).toHaveBeenCalledWith('read');
  });

});
