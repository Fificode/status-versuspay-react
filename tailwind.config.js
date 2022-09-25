module.exports = {
    mode: 'jit',
    // purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
    purge: ['./src/**/*.js', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
            serif: ['"Roboto Slab"', 'serif'],
            body: ['Roboto', 'sans-serif'],
        },
        extend: {},
         colors: {
            'bground-green': '#32cd32',
'bground-blue' : '#3f00ff',

'black': "#000000",
'grey' : 'rgba(238, 241, 246, 0.3)',
'gray' : '#808080',
'bg-golden-yellow' : '#ffc000',
    },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
