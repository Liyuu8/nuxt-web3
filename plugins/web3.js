import Web3 from 'web3'
import artifacts from '~~/build/contracts/SingleNumRegister.json'

const CreateWeb3 = async (context, inject) => {
  const httpEndpoint = 'http://127.0.0.1:7545'
  const provider =
    window && window.ethereum
      ? window.ethereum
      : window && window.web3
      ? window.web3.currentProvider
      : new Web3.providers.HttpProvider(httpEndpoint)

  if (window && window.ethereum) {
    // User denied account access
    window.ethereum.enable().catch((error) => console.log(error))
  }

  const web3 = new Web3(provider)
  const chainNetworkId = await web3.eth.net.getId()
  const contract = new web3.eth.Contract(
    artifacts.abi,
    artifacts.networks[chainNetworkId].address
  )

  inject('web3', web3)
  inject('contract', contract)
}

export default CreateWeb3
