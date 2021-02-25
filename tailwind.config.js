const sizes = {
  1: '1px',
  2: '2px',
  3: '3px',
  4: '4px',
  5: '5px',
  6: '6px',
  7: '7px',
  8: '8px',
  9: '9px',
  10: '10px',
  11: '11px',
  12: '12px',
  13: '13px',
  14: '14px',
  15: '15px',
  16: '16px',
  17: '17px',
  18: '18px',
  19: '19px',
  20: '20px',
  21: '21px',
  22: '22px',
  23: '23px',
  24: '24px',
  25: '25px',
  26: '26px',
  27: '27px',
  28: '28px',
  29: '29px',
  30: '30px',
  31: '31px',
  32: '32px',
  33: '33px',
  34: '34px',
  35: '35px',
  36: '36px',
  37: '37px',
  38: '38px',
  39: '39px',
  40: '40px',
  45: '45px',
  50: '50px',
  55: '55px',
  60: '60px',
  65: '65px',
  70: '70px',
  75: '75px',
  80: '80px',
  100: '100px',
  110: '110px',
  120: '120px',
  125: '125px',
  130: '130px',
  135: '135px',
  150: '150px',
  160: '160px',
  175: '175px',
  200: '200px',
  250: '250px',
  275: '275px',
  300: '300px',
  350: '350px',
  400: '400px',
  450: '450px',
  500: '500px',
  600: '600px',
  700: '700px',
  800: '800px',
  1000: '1000px',
  '30rem': '30rem',
};

const insets = {
  '1/1': '100%',
  '1/2': '50%',
  '1/3': '33%',
  '2/3': '66%',
  0: '0',
  '-2': '-2rem',
  '-3': '-3rem',
  3: '3rem',
  4: '4rem',
  5: '5rem',
};

const flex = {
  1: '1',
  2: '2',
  auto: 'auto',
};

const scales = {
  0: '0',
  10: '.10',
  15: '.15',
  25: '.25',
  50: '.5',
  75: '.75',
  90: '.9',
  95: '.95',
  100: '1',
  105: '1.05',
  110: '1.1',
  115: '1.15',
  120: '1.2',
  125: '1.25',
  130: '1.3',
  135: '1.35',
  150: '1.5',
  200: '2',
};

module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1980px',
    },
    scale: scales,
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
    },
    fontSize: sizes,
    fontFamily: {
      body: ['Roboto', 'sans-serif'],
    },
    extend: {
      spacing: sizes,
      opacity: scales,
    },
    maxHeight: sizes,
    maxWidth: sizes,
    minWidth: sizes,
    inset: insets,
    flex: flex,
  },
  variants: {
    textColor: ['group-hover', 'hover'],
    opacity: ['group-hover'],
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  plugins: [],
  // PurgeCSS is configured in PostCSS config - disable it here in tailwind
  purge: false,
};
