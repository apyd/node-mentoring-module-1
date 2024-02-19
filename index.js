const getRandomNumber = () => {
  const randomNumber = Math.round((Math.random() * 999) + 1)
  console.log(randomNumber)
  return randomNumber
}

getRandomNumber()

export default getRandomNumber