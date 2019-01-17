import EmberObject from "@ember/object";
import {
  isArray,
  isString,
  isFunction,
  isNull,
  isUndefined,
  isEmpty,
  isNumber
} from "lodash/lang";
import Assert from "../internal/assert";
import errorBuilder from "../internal/error-builder";
import ErrorCode from '../constants/error-code';

function _buildError(errorCode, message) {
  errorCode = errorCode || ErrorCode.UNKNOWN_ERROR;
  return errorBuilder(errorCode, message || "");
}

function _assertCondition(condition, errorCode, message, ifTrue = true) {
  let assert = ifTrue ? Assert.isTrue : Assert.isFalse;
  let error = _buildError(errorCode, message);
  assert(condition, error);
}

function _checkIt(target, condition, errorCode, message, ifTrue = true) {
  _assertCondition(condition, errorCode, message, ifTrue);
  return target;
}

const Precondition = EmberObject.create({
  checkArray(target, message) {
    return _checkIt(target, isArray(target), ErrorCode.ERROR_EXPECT_ARRAY, message);
  },

  checkString(target, message) {
    return _checkIt(target, isString(target), ErrorCode.ERROR_EXPECT_STRING, message);
  },

  checkFunction(target, message) {
    return _checkIt(target, isFunction(target), ErrorCode.ERROR_EXPECT_FUNCTION, message);
  },

  /**
   * Check whether the target is null (undefined treat as null, and return null)
   * @return null
   */
  checkNull(target, message) {
    return _checkIt(null, isNull(target) || isUndefined(target), ErrorCode.ERROR_EXPECT_NULL, message);
  },

  checkNotNull(target, message) {
    return _checkIt(target, !isNull(target) && !isUndefined(target), ErrorCode.ERROR_EXPECT_NOT_NULL, message);
  },

  checkEmpty(target, message) {
    return _checkIt(target, isEmpty(target) && !isNumber(target) && !isFunction(target),
      ErrorCode.ERROR_EXPECT_EMPTY, message);
  },

  /**
   * Check whether the target is empty,
   * @return target
   */
  checkNotEmpty(target, message) {
    return _checkIt(target, !isEmpty(target) || isNumber(target) || isFunction(target),
      ErrorCode.ERROR_EXPECT_NOT_EMPTY, message);
  },
});

export default Precondition;
