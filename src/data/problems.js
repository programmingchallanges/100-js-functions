export const problems = Array.from({ length: 101 }, (_, index) => {
  const id = String(index).padStart(2, "0");

  return {
    id,
    title: {
      en: `Problem ${id}`,
      fa: `سوال ${id}`,
    },
  };
});
