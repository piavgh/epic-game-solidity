const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame')
  const gameContract = await gameContractFactory.deploy(
    ['One Punch Man', 'Tom Cat', 'DeadPool'], // Names
    [
      'https://twinfinite.net/wp-content/uploads/2021/04/one-punch-man.jpg', // Images
      'https://pics.me.me/tom-cat-reading-a-newspaper-meming-wiki-50225503.png',
      'https://www.looper.com/img/gallery/what-marvel-wants-you-to-forget-about-deadpool/intro-1518721486.jpg',
    ],
    [100000, 10, 99999999999999], // HP values
    [99999999999, 1, 200], // Attack damage values
    'Thanos', // Boss name
    'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/5/52/Empire_March_Cover_IW_6_Textless.png', // Boss image
    10000, // Boss hp
    500 // Boss attack damage
  )

  await gameContract.deployed()
  console.log('Contract deployed to:', gameContract.address)
}

const runMain = async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

runMain()
