const path = require("path");
const glob = require("glob");
var webpack = require("webpack");

module.exports = {
    mode: "development",
    optimization: {
        // We no not want to minimize our code.
        minimize: false
    },
    entry: glob.sync("./src/js/main.js"),
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js"
    },
    module: {
        // loaders: [
        //     {
        //         test: /[\/\\]node_modules[\/\\]some-module[\/\\]index\.js$/,
        //         loader: "imports-loader?this=>window"
        //     }
        // ],
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
            },
            {
                test: /\.(css|scss)$/,
                loaders: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    resolve: {
        alias: {
            jquery: "jquery/src/jquery"
        }
    }

};