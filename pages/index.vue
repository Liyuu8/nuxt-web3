<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">nuxt-web3-contract</h1>
      <div class="links">
        <input v-model="inputNumber" type="text" placeholder="input number" />
        <button @click="setNumber()">Set Number to contract</button>
      </div>
      <div class="links">
        <button @click="getNumber()">Get Number from contract</button>
      </div>
      <div>Number:{{ number }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
      inputNumber: 0,
    }
  },
  mounted() {
    console.log('Current Block Number')
    this.$web3.eth.getBlockNumber().then(console.log)
  },
  methods: {
    async getNumber() {
      this.number = await this.$contract.methods.get().call()
    },
    async setNumber() {
      const accounts = await this.$web3.eth.getAccounts()
      return await this.$contract.methods
        .set(this.inputNumber)
        .send({ from: accounts[0] })
    },
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
