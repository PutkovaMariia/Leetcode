/**
 * CamelCase
 *
 * @return {String}
 */

Object.assign(String.prototype, {
  camelCase() {
    return this.split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('');
  }
});
