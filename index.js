export default [
  {
    languageOptions: {
      globals: {
        MyGlobal: true,
      },
      rules: {
        quotes: [2, "single"],
        semi: [2, "always"],
        "import/order": [
          "error",
          {
            groups: [
              ["builtin", "external"], // 내장 모듈과 외부 모듈을 먼저
              ["internal"], // 내부 모듈
              ["parent", "sibling", "index"], // 상위/형제/인덱스 모듈 순서로
            ],
            "newlines-between": "always", // 그룹 간 줄바꿈을 강제
            alphabetize: { order: "asc", caseInsensitive: true }, // 알파벳 순으로 정렬
          },
        ],
      },
    },
  },
];
