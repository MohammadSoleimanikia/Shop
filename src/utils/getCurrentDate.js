function getCurrentYearMonth() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); // add 1 because getMonth() returns 0-11
  return `${year}${month}`;
}
export default getCurrentYearMonth