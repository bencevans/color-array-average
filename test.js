const test = require('tape');
const averageColor = require('.');

test('color average', t => {
  t.equal(averageColor(['#000000']), '#000000');
  t.equal(averageColor(['#000']), '#000000');
  t.equal(averageColor(['#fff', '#f0f']), '#ff80ff');
  t.equal(averageColor(['#fff', '#fff', '#fff', '#fff']), '#ffffff');
  t.equal(averageColor(['#00f', '#0f0', '#f00']), '#555555');
  t.equal(averageColor(['#121212', '#121212']), '#121212');
  t.equal(averageColor(['#ff0000', '#ff0000']), '#ff0000');
  t.equal(averageColor(['#030303', '#050505']), '#040404');
  t.end();
});
