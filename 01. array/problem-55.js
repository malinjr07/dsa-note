/**
 * # Jump Game
 * ## Recursion (Brute Force Approach)
 * We will Traverse the whole array and from each array, we will traverse the maximum index that we can reach
 */

const canJumpRecursion = (nums) => {
  const create = (nums, idx) => {
    if (idx === nums.length - 1) {
      return true; // Reached the last index
    }
    if (nums[idx] === 0) {
      return false; // Stuck at a zero jump
    }

    const reach = idx + nums[idx]; // Calculate maximum jump

    // Use a for loop to check all possible jumps
    for (let jump = idx + 1; jump <= reach; jump++) {
      if (create(nums, jump)) {
        return true;
      }
    }

    // If no valid jump leads to the end, return false

    return false;
  };

  return create(nums, 0);
};

canJumpRecursion([1, 2, 4, 1, 1, 0, 2, 5]);

function canJumpDP1d(nums) {
  function create(nums, idx, dp) {
    if (idx === nums.length - 1) return true;
    if (nums[idx] === 0) return false;

    if (dp[idx] !== undefined) {
      return dp[idx]; // Check for memoized result
    }
    let reach = idx + nums[idx];
    for (let jump = idx + 1; jump <= reach; jump++) {
      if (create(nums, jump, dp)) {
        dp[idx] = true; // Memoize result for this index
        return true;
      }
    }

    dp[idx] = false; // Memoize result for this index
    return false;
  }

  const dpInit = Array(nums.length); // Initialize memoization array

  return create(nums, 0, dpInit);
}

canJumpDP1d([1, 2, 4, 1, 1, 0, 2, 5]);

function canJumpTabulation(nums) {
  function initializeArray(size, value) {
    if (size === 0) return [];
    return [value].concat(initializeArray(size - 1, value));
  }

  function jumpRecursive(idx, dp) {
    if (idx === nums.length - 1) {
      dp[idx] = true; // Base case: last index is always reachable
      return true;
    }

    if (dp[idx] !== -1) return dp[idx]; // Return cached result if available

    if (nums[idx] === 0) {
      dp[idx] = false; // Cannot jump from this position
      return false;
    }

    let maxReach = idx + nums[idx];
    for (let jump = idx + 1; jump <= maxReach; jump++) {
      if (jumpRecursive(jump, dp)) {
        dp[idx] = true;
        return true;
      }
    }

    dp[idx] = false;
    return false;
  }

  const dp = initializeArray(nums.length, -1); // Initialize the dp array with -1
  return jumpRecursive(0, dp);
}

canJumpTabulation([1, 2, 4, 1, 1, 0, 2, 5]);

/**
 * # Jump Game
 * ## Greedy
 */

var canJumpGreedy = function (nums) {
  const n = nums.length - 1;
  let maxJump = 0;
  for (let indx = 0; indx <= n; indx++) {
    if (indx > maxJump) return false;
    maxJump = Math.max(maxJump, indx + nums[indx]);
    if (maxJump > n) return true;
  }
  return true;
};

canJumpGreedy([3, 2, 1, 0, 4]);

