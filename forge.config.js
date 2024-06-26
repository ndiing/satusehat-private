const { FusesPlugin } = require("@electron-forge/plugin-fuses");
const { FuseV1Options, FuseVersion } = require("@electron/fuses");

module.exports = {
    packagerConfig: {
        asar: true,
        icon: "./src/img/icon",
        // extraResource: [
        //     //
        //     "./data/database.db",
        // ],
    },
    rebuildConfig: {},
    makers: [
        {
            name: "@electron-forge/maker-squirrel",
            config: {
                iconUrl: "https://raw.githubusercontent.com/ndiing/satusehat-private/master/src/img/icon.ico",
                setupIcon: "./src/img/icon.ico",
            },
            platforms: ["win32"], // Maker for Windows
        },
        {
            name: "@electron-forge/maker-deb",
            config: {
                icon: "./src/img/icon.png",
            },
            platforms: ["linux"], // Maker for Linux
        },
        {
            name: "@electron-forge/maker-rpm",
            config: {
                icon: "./src/img/icon.png",
            },
            platforms: ["linux"], // Maker for Linux
        },
        {
            name: "@electron-forge/maker-dmg",
            config: {
                icon: "./src/img/icon.icns",
            },
            platforms: ["darwin"], // Maker for macOS
        },
        {
            name: "@electron-forge/maker-zip",
            platforms: ["darwin", "win32"], // Additional maker for macOS and Windows
        },
    ],
    plugins: [
        {
            name: "@electron-forge/plugin-auto-unpack-natives",
            config: {},
        },
        {
            name: "@electron-forge/plugin-webpack",
            config: {
                mainConfig: "./webpack.main.config.js",
                renderer: {
                    config: "./webpack.renderer.config.js",
                    entryPoints: [
                        {
                            html: "./src/index.html",
                            js: "./src/renderer.js",
                            name: "main_window",
                            preload: {
                                js: "./src/preload.js",
                            },
                        },
                    ],
                },
            },
        },
        // Fuses are used to enable/disable various Electron functionality
        // at package time, before code signing the application
        new FusesPlugin({
            version: FuseVersion.V1,
            [FuseV1Options.RunAsNode]: false,
            [FuseV1Options.EnableCookieEncryption]: true,
            [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
            [FuseV1Options.EnableNodeCliInspectArguments]: false,
            [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
            [FuseV1Options.OnlyLoadAppFromAsar]: true,
        }),
    ],
    publishers: [
        {
            name: "@electron-forge/publisher-github",
            config: {
                repository: {
                    owner: "ndiing",
                    name: "satusehat-public",
                },
                prerelease: false,
                draft: false,
            },
        },
    ],
};
