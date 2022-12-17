export const validatePhoneNumber = (value: string) => {
  const regex1 = /^[0-9]{2}[0-9]{9}$/;
  const regex2 = /^[0-9]{9}$/;

  let isSuccess = false;

  if (regex1.test(value) || regex2.test(value)) {
    isSuccess = true;
  }

  return isSuccess;
};
