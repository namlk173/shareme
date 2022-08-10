export const fetchUser = () => {
  const fetchUser =
    localStorage.getItem("user") !== "underfined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();
  return fetchUser;
};
