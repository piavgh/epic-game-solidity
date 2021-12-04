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

  let txn
  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  txn = await gameContract.mintCharacterNFT(2)
  await txn.wait()

  // Get the value of the NFT's URI.
  let returnedTokenUri = await gameContract.tokenURI(1)
  console.log('Token URI:', returnedTokenUri)

  txn = await gameContract.attackBoss()
  await txn.wait()

  txn = await gameContract.attackBoss()
  await txn.wait()
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
