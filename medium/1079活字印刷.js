var numTilePossibilities = function (tiles) {
  const count = new Map();
  for (let t of tiles) {
    count.set(t, (count.get(t) || 0) + 1);
  }
  const tile = new Set(tiles);
  const n = tiles.length;

  function dfs(i) {
    if (i == n) {
      return 1;
    }
    let res = 1;
    for (let t of tile) {
      if (count.get(t) > 0) {
        count.set(t, count.get(t) - 1);
        res += dfs(i + 1);
        count.set(t, count.get(t) + 1);
      }
    }
    return res;
  }

  return dfs(0) - 1;
};
