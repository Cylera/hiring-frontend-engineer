/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: {
          DEFAULT: '#fff',
          lightMode_gradient: 'linear-gradient(#f9fafb 74%, #f9fafb 100%)',
        },
        black: {
          DEFAULT: '#000',
          secondary: '#374151',
          3: '#3b3b3c',
          darkMode_background: '#333333',
        },
        grey: {
          DEFAULT: '#f9fafb',
          secondary: '#f3f4f6',
          3: '#9ca3af',
          4: '#c4c4c4',
          5: '#6b7280',
          6: '#999999',
          7: '#555555',
        },
        orange: {
          DEFAULT: '#f97316',
          secondary: '#ffedd5',
        },
        yellow: {
          DEFAULT: '#f59e0b',
          secondary: '#B45309',
        },
        red: {
          DEFAULT: '#b91c1c',
          secondary: '#9f1239',
          3: '#f43f5e',
          4: '#ef4444',
        },
        blue: {
          DEFAULT: '#3b82f6',
          secondary: '#0981c3',
          dark: '#111827',
        },
        purple: {
          DEFAULT: '#6d28d9',
          secondary: '#8b5cf6',
          3: '#818cf8',
          4: '#4F46E5',
        },
        teal: {
          DEFAULT: '#14b8a6',
          secondary: '#5eead4',
          3: '#0d9488',
          4: '#2dd4bf',
        },
        green: {
          dark: '#1c1f37',
        },
      },
      spacing: {
        '8px': '8px',
        '9px': '9px',
        '10px': '10px',
        '11px': '11px',
        '14px': '14px',
        '20px': '20px',
        '22px': '22px',
        '24px': '24px',
        '26px': '26px',
        '28px': '28px',
        '30px': '30px',
        '36px': '36px',
        '37px': '37px',
        '40px': '40px',
        '42px': '42px',
        '43px': '43px',
        '44px': '44px',
        '46px': '46px',
        '47px': '47px',
        '48px': '48px',
        '50px': '50px',
        '55px': '55px',
        '60px': '60px',
        '80px': '80px',
        '81px': '81px',
        '90px': '90px',
        '110px': '110px',
        '117px': '117px',
        '155px': '155px',
        '170px': '170px',
        '207px': '207px',
        sidenav_content: 'calc(100vh - 60px)',
        timeline_container: 'calc(100vh - 202px)',
        mainLayout_header: 'calc(100vw - 117px - 207px)',
        mainLayout_header_left_expanded: 'calc(100vw - 117px - 37px)',
        mainLayout_header_right_expanded: 'calc(100vw - 207px - 37px)',
        mainLayout_header_expanded: 'calc(100vw - 74px)',
        mainContent_container: 'calc(100vw - 90px)',
      },
      boxShadow: {
        button: '0 1px 2px 0 #000000',
      },
    },
  },
  plugins: [],
}
