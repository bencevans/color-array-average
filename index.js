const averageColor = colors => {
  const [totalR, totalG, totalB] = colors.reduce((prev, curr) => {
    curr = curr.substring(1);

    for (let index = 0; index < 3; index++) {
      let col = curr.substr(index * (curr.length / 3), (curr.length / 3));
      col = col.length === 1 ? col + col : col;
      col = parseInt(col, 16);
      prev[index] += (col / colors.length);
    }

    return prev;
  }, [0, 0, 0]);

  return '#' +
    Math.round(totalR).toString(16).padEnd(2, '0') +
    Math.round(totalG).toString(16).padEnd(2, '0') +
    Math.round(totalB).toString(16).padEnd(2, '0');
};

module.exports = averageColor;
