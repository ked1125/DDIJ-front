/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    extend: {
      colors: {
        ye: {
          100: "#FFFCF3", //바탕색
          200: "#FFF8E7", //리스트 연한색
          300: "#FFEFC8", //리스트 진한색
          400: "#FFD360", //헤더,하단 네브바 색
          500: "#FFDC83", //이미지 추가 버튼 색
          600: "#FFBC11", //인트로 , 로그인,회원가입 버튼 색
          700: "#FFE0C9", //모임 취소,참석 모달 배경색
        },
        da: {
          100: "#D9D9D9", //라인 색
          200: "#707070", //로그인 input창, 안내문구 색
          300: "#222222", //글씨 + 취소 버튼 색
          400: "#171717", //모임 상세페이지 배경색
        },
        wh: {
          100: "#FBFBFB", //흰색 글씨
        },
      },
    },
  },
  plugins: [],
};
