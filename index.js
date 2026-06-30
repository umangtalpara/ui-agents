const path = require('path');
const fs = require('fs-extra');

/**
 * Programmatic API for @umangtalpara/ui-agent
 */
module.exports = {
  version: '1.0.1',
  templatePath: path.join(__dirname, 'lib/templates'),

  /**
   * Programmatic initialization helper
   * @param {string} targetDir Destination folder path (defaults to process.cwd())
   * @returns {boolean} Success status
   */
  init: function (targetDir = process.cwd()) {
    const sourceDir = path.join(__dirname, 'lib/templates');
    if (!fs.existsSync(sourceDir)) {
      throw new Error(`Template path not found: ${sourceDir}`);
    }
    fs.copySync(sourceDir, targetDir, {
      overwrite: true,
      errorOnExist: false,
    });
    return true;
  }
};
