module.exports = {
    module: {
        rules: [
            { test: /\.(js|jsx)$/, use:'babel_loader', exclude: /node_modules/}
        ]
    }
}