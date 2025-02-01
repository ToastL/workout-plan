/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    colors: {
      'primary': {
        light: '#fff',
        DEFAULT: '#fff',
        dark: '#1a1a1a'
      },
      'secondary': {
        light: '#f9f9f9',
        DEFAULT: '#f0f0f0',
        dark: '#242424'
      },
      'green': {
        DEFAULT: '#0b0'
      },
      'red': {
        DEFAULT: '#f44'
      }
    },
    textColor: {
      'primary': {
        light: '#000',
        DEFAULT: '#000',
        dark: '#fff'
      },
      'secondary': {
        light: '#fff',
        DEFAULT: '#fff',
        dark: '#000'
      },
      'grey': {
        light: '#888',
        DEFAULT: '#888',
        dark: '#888'
      },
      'red': {
        DEFAULT: '#f44'
      }
    },
    borderColor: {
      'primary': {
        light: '#ddd',
        DEFAULT: '#ddd',
        dark: '#333'
      },
      'green': {
        light: '#00a000',
        DEFAULT: '#00a000',
        dark: '#40d040'
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}

