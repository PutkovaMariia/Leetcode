/**
 * Traverse Tree
 */

export const traverseTree = (root, callback) => {
  callback(root);
  root.children.forEach((child) => {
    traverseTree(child, callback);
  });
};
