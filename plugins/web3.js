import Web3 from 'web3'

const CreateWeb3 = (context, inject) => {
  const httpEndpoint = 'http://127.0.0.1:7545'
  const web3 = new Web3(new Web3.providers.HttpProvider(httpEndpoint))
  inject('web3', web3)
}

export default CreateWeb3