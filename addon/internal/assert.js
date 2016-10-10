import Ember from "ember";

const Assert = Ember.Object.create({
  isTrue(condition, error) {
    if (condition === false) {
      throw error;
    }
  },

  isFalse(condition, error) {
    if (condition === true) {
      throw error;
    }
  }
});

export default Assert;
