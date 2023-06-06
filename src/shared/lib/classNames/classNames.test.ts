import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', function () {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional class', () => {
    expect(
      classNames('someClass', {}, ['anotherClass-1', 'anotherClass-2'])
    ).toBe('someClass anotherClass-1 anotherClass-2');
  });

  test('with mods', () => {
    expect(
      classNames('someClass', { disabled: true }, ['additionalClass'])
    ).toBe('someClass disabled additionalClass');
  });

  test('with mods false', () => {
    expect(
      classNames('someClass', { disabled: true, scrollable: false }, [
        'additionalClass',
      ])
    ).toBe('someClass disabled additionalClass');
  });

  test('with mods undefined', () => {
    expect(
      classNames('someClass', { disabled: true, scrollable: undefined }, [
        'additionalClass',
      ])
    ).toBe('someClass disabled additionalClass');
  });
});
