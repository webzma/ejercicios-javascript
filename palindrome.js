const palindrome = (string) => {
  const reg = /[^a-z\d]/g;
  const lowerString = string.toLowerCase().replace(reg, '')
  const reversed = lowerString.split('').reverse().join('')

  return reversed == lowerString
}

console.log(palindrome('A man, a plan, a canal. Panama'));