/** @type {import('tailwindcss').Config} */

module.exports = {
    mode: 'jit',
    purge: ['./public/**/*.html', './public/**/*.js'],
    darkMode: false,
    theme: {
        extend: {
            height: {
                custom: '620px',
            },
            spacing: {
                '40-c': '40rem',
            },
        },
    },
    plugins: [],
};
