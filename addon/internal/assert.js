import EmberObject from "@ember/object";

const Assert = EmberObject.create({
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
