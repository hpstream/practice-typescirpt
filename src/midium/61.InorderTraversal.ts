const tree1 = {
  val: 1,
  left: {
    val: 22,
    left: {
      val: 44,
      left: null,
      right: null,
    },
    right: null,
  },
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
} as const;

interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

type InorderTraversal<T extends TreeNode | null> = T extends TreeNode
  ? T["left"] extends TreeNode
    ? T["right"] extends TreeNode
      ? [
          ...InorderTraversal<T["left"]>,
          T["val"],
          ...InorderTraversal<T["right"]>
        ]
      : [...InorderTraversal<T["left"]>, T["val"]]
    : T["right"] extends TreeNode
    ? [T["val"], ...InorderTraversal<T["right"]>]
    : [T["val"]]
  : [];
// 中序遍历
type A = InorderTraversal<typeof tree1>; // [1, 3, 2]

export {};
