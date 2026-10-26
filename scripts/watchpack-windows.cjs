// Next watches the project directory as a missing path to detect its deletion.
// Watchpack scans its parent (the drive root) and lstats protected Windows
// folders before applying ignore rules. Keep config/source/build watchers,
// but omit this redundant project-deletion watch on Windows drive roots.
if (process.platform === 'win32') {
  const path = require('node:path');
  const Watchpack = require('next/dist/compiled/watchpack');
  const watch = Watchpack.prototype.watch;
  const projectRoot = path.resolve(__dirname, '..');
  Watchpack.prototype.watch = function (options, ...rest) {
    if (options && !Array.isArray(options) && options.missing) {
      options = {
        ...options,
        missing: Array.from(options.missing).filter(entry => {
          const resolved = path.resolve(entry);
          return !(resolved === projectRoot && path.dirname(resolved) === path.parse(resolved).root);
        }),
      };
    }
    return watch.call(this, options, ...rest);
  };
}
