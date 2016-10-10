import precondition from 'dummy/utils/precondition';
import { module, test } from 'qunit';
import ErrorCode from 'dummy/constants/error-code';

module('Unit | Utility | precondition');

test("checkString should return true if it's string", function(assert) {
  let result = precondition.checkString("STRING");
  assert.equal(result, "STRING", `"STRING" is string`);
});

test('checkString should throw exception if not string', function(assert) {
  try {
      precondition.checkString(123);
      assert.fail("123 is number, should throw exception");
  } catch (e) {
      assert.equal(e.code, ErrorCode.ERROR_EXPECT_STRING, `123 is not string, ERROR_EXPECT_STRING should be thrown.`);
  }
});

test("checkArray should return true if it's array", function(assert) {
  let target = [1, 2, 4];
  let result = precondition.checkArray(target);
  assert.equal(result, target, `${target} is string`);
});

test('checkArray should throw exception if not string', function(assert) {
  try {
      precondition.checkArray(123);
      assert.fail("123 is number, should throw exception");
  } catch (e) {
      assert.equal(e.code, ErrorCode.ERROR_EXPECT_ARRAY, `123 is not array, ERROR_EXPECT_ARRAY should be thrown.`);
  }
});

test("checkFunction should return true if target is function", function(assert) {
  let target = function() {};
  let result = precondition.checkFunction(target);
  assert.equal(result, target, `${target} is function`);
});

test('checkFunction should throw exception if not function', function(assert) {
  try {
      precondition.checkFunction(123);
      assert.fail("123 is number, should throw exception");
  } catch (e) {
      assert.equal(e.code, ErrorCode.ERROR_EXPECT_FUNCTION, `123 is not function, ERROR_EXPECT_FUNCTION should be thrown.`);
  }
});

test("checkNull should return true if target is null", function(assert) {
  let target = null;
  let result = precondition.checkNull(target);
  assert.equal(result, target, `${target} is null`);
});

test('checkNull should throw exception if target is undefined', function(assert) {
  try {
      precondition.checkFunction(undefined);
      assert.fail("undefined should throw exception");
  } catch (e) {
      assert.equal(e.code, ErrorCode.ERROR_EXPECT_NULL, `undefined is not null, ERROR_EXPECT_NULL should be thrown.`);
  }
});
