import Ember from "ember";
import _lang from "lodash/lang";
import Assert from "../internal/assert";
import errorBuilder from "../internal/error-builder";
import ErrorCode from 'dummy/constants/error-code';

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

const Precondition = Ember.Object.create({
  checkArray(target, message) {
    return _checkIt(target, _lang.isArray(target), ErrorCode.ERROR_EXPECT_ARRAY, message);
  },

  checkString(target, message) {
    return _checkIt(target, _lang.isString(target), ErrorCode.ERROR_EXPECT_STRING, message);
  },

  checkFunction(target, message) {
    return _checkIt(target, _lang.isFunction(target), ErrorCode.ERROR_EXPECT_FUNCTION, message);
  },

  checkNull(target, message) {
    return _checkIt(target, _lang.isNull(target) || _lang.isUndefined(target), ErrorCode.ERROR_EXPECT_NULL, message);
  },

  checkNotNull(target, message) {
    return _checkIt(target, !_lang.isNull(target) && !_lang.isUndefined(target), ErrorCode.ERROR_EXPECT_NOT_NULL, message);
  },

  checkNotEmpty(target, message) {
    return _checkIt(target, !_lang.isEmpty(target), ErrorCode.ERROR_EXPECT_NOT_EMPTY, message);
  },

  checkEmpty(target, message) {
    return _checkIt(target, _lang.isEmpty(target), ErrorCode.ERROR_EXPECT_EMPTY, message);
  },
});

export default Precondition;
