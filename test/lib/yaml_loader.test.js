import assert from 'node:assert';
import {
  describe,
  it,
} from 'node:test';
import { YAMLLoader } from '#src/index';

describe('YAMLLoader', () => {
  it('load a single yaml file', () => {
    const loadTest1 = YAMLLoader('./test/lib/fixture/test1.yaml');
    const shouldBe = [
      '/tmp/prop1/test1.log',
      '/tmp/prop2/test1.log',
      '/tmp/prop3/test1.log',
    ];
    assert.deepStrictEqual(loadTest1.test1, shouldBe, 'Arrays are not deeply equal');
  });

  it('load a yaml file with a single fallBack file', () => {
    const loadTest1 = YAMLLoader('./tmp/qsjdk', { fallBack: ['./test/lib/fixture/test1.yaml'] });
    const shouldBe = [
      '/tmp/prop1/test1.log',
      '/tmp/prop2/test1.log',
      '/tmp/prop3/test1.log',
    ];
    assert.deepStrictEqual(loadTest1.test1, shouldBe, 'Arrays are not deeply equal');
  });

  it('load a yaml file with multiple fallBack files', () => {
    const loadTest2 = YAMLLoader('./tmp/qsjdk', { fallBack: ['./tmp/djsk', './tmp/qsdkla', './test/lib/fixture/test2.yaml'] });
    const shouldBe = [
      '/tmp/prop1/test2.log',
      '/tmp/prop2/test2.log',
      '/tmp/prop3/test2.log',
    ];
    assert.deepStrictEqual(loadTest2.test2, shouldBe, 'Arrays are not deeply equal');
  });
});
