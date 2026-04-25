/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 1. Static Primitive Scales
        teal: {
          50: '#E1F5EE', 100: '#9FE1CB', 200: '#5DCAA5',
          600: '#0F6E56', 700: '#0D6050', 800: '#085041',
        },
        gray: {
          50: '#F5F5F3', 100: '#F1EFE8', 200: '#D3D1C7',
          400: '#888780', 600: '#5F5E5A', 900: '#1A1A1A',
        },
        purple: { 50: '#EEEDFE', 200: '#AFA9EC', 800: '#3C3489' },
        green: { 50: '#EAF3DE', 800: '#27500A' },
        red: { 50: '#FCEBEB', 200: '#F09595', 600: '#A32D2D' },
        amber: { 50: '#FAEEDA', 800: '#633806' },

        // 2. Semantic Tokens (Mapped to your globals.css)
        brand: {
          primary: 'var(--bh-primary)',
          'primary-hover': 'var(--bh-primary-hover)',
          'primary-press': 'var(--bh-primary-press)',
          'primary-bg': 'var(--bh-primary-bg)',
          'primary-border': 'var(--bh-primary-border)',
          success: {
            bg: 'var(--bh-success-bg)',
            text: 'var(--bh-success-text)',
          },
          error: {
            bg: 'var(--bh-error-bg)',
            text: 'var(--bh-error-text)',
          },
        },
        // Direct surface/border mapping
        surface: {
          page: 'var(--bh-bg-page)',
          card: 'var(--bh-bg-card)',
          subtle: 'var(--bh-bg-subtle)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        // Mapping your custom pixel-based scales
        '10': ['10px', { lineHeight: '1.4' }],
        '11': ['11px', { lineHeight: '1.5' }],
        '12': ['12px', { lineHeight: '1.5' }],
        '13': ['13px', { lineHeight: '1.6' }],
        '14': ['14px', { lineHeight: '1.6' }],
        '15': ['15px', { lineHeight: '1.5' }],
        '17': ['17px', { lineHeight: '1.4' }],
        '22': ['22px', { lineHeight: '1.3' }],
        '26': ['26px', { lineHeight: '1.2' }],
        '28': ['28px', { lineHeight: '1.2' }],
      },
      borderRadius: {
        'bh-sm': 'var(--bh-radius-sm)',
        'bh-md': 'var(--bh-radius-md)',
        'bh-lg': 'var(--bh-radius-lg)',
        'bh-pill': 'var(--bh-radius-pill)',
      }
    },
  },
  plugins: [],
}