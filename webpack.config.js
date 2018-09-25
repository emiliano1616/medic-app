const path = require("path");

module.exports = {
    mode: "development" ,
    optimization: {
        // We no not want to minimize our code.
        minimize: false
    },
    entry: "./src/js/index.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    }
};