export const validatePassword = (password) => {
  return password.test(
    /^(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*\d+)(?!.*\s+)(?=.*[-+@]+).{3,}$/
  );
};
