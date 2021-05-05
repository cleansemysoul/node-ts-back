import { UsernamePasswordInput } from "../resolvers/UsernamePasswordInput";

export const validateRegister = (options: UsernamePasswordInput) => {
  if (!options.email.includes("@")) {
    return [
      {
        field: "email",
        message: "invalid email",
      },
    ];
  }
  if (options.username.length < 2) {
    return [
      {
        field: "username",
        message: "username must be longer",
      },
    ];
  }
  if (options.username.includes("@")) {
    return [
      {
        field: "username",
        message: "username can't include @",
      },
    ];
  }
  if (options.password.length < 2) {
    return [
      {
        field: "password",
        message: "password must be longer",
      },
    ];
  }
  return null;
};
