module.exports = {
    plugins: [
        require('@csstools/postcss-global-data')({
            files: ['src/assets/css/media.css', 'src/assets/css/variables.css'],
        }),
        require('autoprefixer')(),
        require('postcss-nested')(),
        require('postcss-each')(),
        require('postcss-custom-media')({
            preserve: false,
        }),
    ],
};
