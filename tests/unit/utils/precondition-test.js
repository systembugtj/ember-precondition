import precondition from 'dummy/utils/precondition';
import { module, test } from 'qunit';
import ErrorCode from 'dummy/constants/error-code';

module('Unit | Utility | precondition');

test("checkString should return target if it's string", function (assert) {
  let result = precondition.checkString('STRING');
  assert.strictEqual(result, 'STRING', `"STRING" is string`);
});

test('checkString should throw exception if not string', function (assert) {
  let actual;
  try {
    precondition.checkString(123);
  } catch (e) {
    actual = e;
  }

  assert.strictEqual(
    actual.code,
    ErrorCode.ERROR_EXPECT_STRING,
    `123 is not string, ERROR_EXPECT_STRING should be thrown.`
  );
});

test("checkArray should return target if it's array", function (assert) {
  let target = [1, 2, 4];
  let result = precondition.checkArray(target);
  assert.strictEqual(result, target, `${target} is string`);
});

test('checkArray should throw exception if not string', function (assert) {
  let actual;
  try {
    precondition.checkArray(123);
  } catch (e) {
    actual = e;
  }

  assert.strictEqual(
    actual.code,
    ErrorCode.ERROR_EXPECT_ARRAY,
    `123 is not array, ERROR_EXPECT_ARRAY should be thrown.`
  );
});

test('checkFunction should return true if target is function', function (assert) {
  let target = function () {};
  let result = precondition.checkFunction(target);
  assert.strictEqual(result, target, `${target} is function`);
});

test('checkFunction should throw exception if not function', function (assert) {
  let actual;
  try {
    precondition.checkFunction(123);
  } catch (e) {
    actual = e;
  }

  assert.strictEqual(
    actual.code,
    ErrorCode.ERROR_EXPECT_FUNCTION,
    `123 is not function, ERROR_EXPECT_FUNCTION should be thrown.`
  );
});

test('checkNull should return null if target is null', function (assert) {
  let target = null;
  let result = precondition.checkNull(target);
  assert.strictEqual(result, null, `${target} is null`);
});

test('checkNull should return null if target is undefined', function (assert) {
  let result = precondition.checkNull(undefined);
  assert.strictEqual(result, null, `undefined is treated as null`);
});

test('checkNull should throw exception if target is undefined', function (assert) {
  let actual;
  try {
    precondition.checkNull('');
  } catch (e) {
    actual = e;
  }

  assert.strictEqual(
    actual.code,
    ErrorCode.ERROR_EXPECT_NULL,
    `undefined is not null, ERROR_EXPECT_NULL should be thrown.`
  );
});

test('checkNotNull should return target if target is not null', function (assert) {
  let target = '';
  let result = precondition.checkNotNull(target);
  assert.strictEqual(result, target, `${target} is not null`);
});

test('checkNotNull should throw exception if target is undefined', function (assert) {
  let actual;
  try {
    precondition.checkNotNull(undefined);
  } catch (e) {
    actual = e;
  }

  assert.strictEqual(
    actual.code,
    ErrorCode.ERROR_EXPECT_NOT_NULL,
    `undefined is not null, ERROR_EXPECT_NOT_NULL should be thrown.`
  );
});

test('checkNotNull should throw exception if target is null', function (assert) {
  let actual;
  try {
    precondition.checkNotNull(null);
  } catch (e) {
    actual = e;
  }

  assert.strictEqual(
    actual.code,
    ErrorCode.ERROR_EXPECT_NOT_NULL,
    `ERROR_EXPECT_NOT_NULL should be thrown.`
  );
});

test('checkEmpty should return target if target is empty string', function (assert) {
  let target = '';
  let result = precondition.checkEmpty(target);
  assert.strictEqual(result, target, `${target} is empty`);
});

test('checkEmpty should return target if target is empty array', function (assert) {
  let target = [];
  let result = precondition.checkEmpty(target);
  assert.strictEqual(result, target, `${target} is empty`);
});

test('checkEmpty should return target if target is empty object', function (assert) {
  let target = {};
  let result = precondition.checkEmpty(target);
  assert.strictEqual(result, target, `${target} is empty`);
});

test('checkEmpty should return target if target is null', function (assert) {
  let target = null;
  let result = precondition.checkEmpty(target);
  assert.strictEqual(result, target, `${target} is empty`);
});

test('checkEmpty should return target if target is undefined', function (assert) {
  let result = precondition.checkEmpty(undefined);
  assert.strictEqual(result, undefined, `undefined is empty`);
});

test('checkEmpty should throw exception if target is function', function (assert) {
  let actual;
  try {
    precondition.checkEmpty(function () {});
  } catch (e) {
    actual = e;
  }
  assert.strictEqual(
    actual.code,
    ErrorCode.ERROR_EXPECT_EMPTY,
    `function is not empty, ERROR_EXPECT_EMPTY should be thrown.`
  );
});

test('checkEmpty should throw exception if target is number', function (assert) {
  let actual = null;
  try {
    precondition.checkEmpty(123);
  } catch (e) {
    actual = e;
  }
  assert.strictEqual(
    actual.code,
    ErrorCode.ERROR_EXPECT_EMPTY,
    `function is not empty, ERROR_EXPECT_EMPTY should be thrown.`
  );
});

test('checkEmpty should throw exception if target is char', function (assert) {
  let actual = null;
  try {
    precondition.checkEmpty('123'.charAt(1));
  } catch (e) {
    actual = e;
  }

  assert.strictEqual(
    actual.code,
    ErrorCode.ERROR_EXPECT_EMPTY,
    `function is not empty, ERROR_EXPECT_EMPTY should be thrown.`
  );
});

test('checkNotEmpty should return target if target is not empty string', function (assert) {
  let target = '123';
  let result = precondition.checkNotEmpty(target);
  assert.strictEqual(result, target, `${target} is not empty`);
});

test('checkNotEmpty should return target if target is not empty array', function (assert) {
  let target = [12, 12];
  let result = precondition.checkNotEmpty(target);
  assert.strictEqual(result, target, `${target} is not empty`);
});

test('checkNotEmpty should return target if target is not empty object', function (assert) {
  let target = { asd: 1 };
  let result = precondition.checkNotEmpty(target);
  assert.strictEqual(result, target, `${target} is not empty`);
});

test('checkNotEmpty should return target if target is number', function (assert) {
  let target = 0;
  let result = precondition.checkNotEmpty(target);
  assert.strictEqual(result, target, `${target} is not empty`);
});

test('checkNotEmpty should return target if target is function', function (assert) {
  let target = function () {};
  let result = precondition.checkNotEmpty(target);
  assert.strictEqual(result, target, `${target} is not empty`);
});

test('checkNotEmpty should throw exception if target is null', function (assert) {
  let actual = null;
  try {
    precondition.checkNotEmpty(null);
  } catch (e) {
    actual = e;
  }

  assert.strictEqual(
    actual.code,
    ErrorCode.ERROR_EXPECT_NOT_EMPTY,
    `null is empty, ERROR_EXPECT_NOT_EMPTY should be thrown.`
  );
});

test('checkNotEmpty should throw exception if target is undefined', function (assert) {
  let actual = null;
  try {
    precondition.checkNotEmpty(undefined);
  } catch (e) {
    actual = e;
  }

  assert.strictEqual(
    actual.code,
    ErrorCode.ERROR_EXPECT_NOT_EMPTY,
    `undefined is empty ERROR_EXPECT_NOT_EMPTY should be thrown.`
  );
});
