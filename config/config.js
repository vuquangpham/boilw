// node library
const path = require('path');

// package
const packageInfo = require('../package.json');

// declare paths
const productionDirectoryScript = path.join(__dirname, '..', 'src', '_index.js');
const productionDirectoryStyle = path.join(__dirname, '..', 'src', '_index.scss');

// dev mode
const devDirectoryScript = path.join(__dirname, '..', 'dev', 'index.js');
const devDirectionStyle = path.join(__dirname, '..', 'dev', 'index.scss');

// package info
const packageName = packageInfo.name;
const packageVersion = packageInfo.version;
const packageAuthor = packageInfo.author.name;
const packageHomepage = packageInfo.homepage;
const packageLicense = packageInfo.license;

// webpack banner
const packageBannerConfig = {
    banner: `
/**!
 * ${packageName} v${packageVersion}
 * @author ${packageAuthor}
 * @homepage ${packageHomepage}
 * @license ${packageLicense} ${new Date().getFullYear()}
 */`,
    raw: true
};


// export
module.exports = {
    // path
    paths: {
        productionDirectoryScript,
        productionDirectoryStyle,
        devDirectoryScript,
        devDirectionStyle
    },

    // package
    packageInfo: {
        packageName,
        packageVersion,
        packageAuthor,
        packageHomepage,
        packageLicense,
        packageBannerConfig,
    }
};
