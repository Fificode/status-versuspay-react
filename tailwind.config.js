module.exports = {
    mode: 'jit',
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
'bground-blue' : '#3f00ff',
'white' : '#ffffff',
'green': '#32CD32',
'black': '#000000',
'grey' : 'rgba(238, 241, 246, 0.3)',
'gray' : '#808080',
'golden-yellow' : '#ffc000',
    },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
