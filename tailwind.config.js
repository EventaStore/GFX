/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        CS_body: 'var(--body)',
        CS_bg_color: 'var(--bg-color)',
        CS_text_color: 'var(--text-color)',
        CS_text_active: 'var(--text-active)',
        CS_border_color: 'var(--border-color)',
        CS_Soft_border_color: 'var(--soft_border_color)',
        CS_Focus_field_color: 'var(--focus-field)',
        CS_btn_color: 'var(--btn-color)',
        CS_card: 'var(--card)',
      },
      backgroundPosition: {
        '0-66': '0% 66%',
        '100-66': '100% 66%',
      },
    },
  },
  plugins: [],
}
