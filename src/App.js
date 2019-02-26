import './App.css';

import React, { Component } from 'react';

class App extends Component {
  getCurrencyWallet = () => {
    window.edgeProvider.chooseCurrencyWallet(['BTC', 'ETH'])
    .then(result => {
      console.log('I have a chooseCurrencyWallet result', result)
    })
  }
  getCurrencyWalletAllCurrencies = () => {
    window.edgeProvider.chooseCurrencyWallet()
    .then(result => {
      console.log('I have a chooseCurrencyWallet ALL result', result)
    })
  }
  getReceiveAddress = () => {
    const edgeMetadata = {
      name: 'Test Drive ',
      category: 'Plugin Stuff ',
      notes: 'No Notes really',
    }
    const options = {
      metadata: edgeMetadata
    }
    window.edgeProvider.getReceiveAddress(options)
    .then(result => {
      console.log('I have a getReceiveAddress result', result)
    })
  }
  writeData = () => {
    const data = {
      myProp: 'Here is what I am thinking'
    }
    window.edgeProvider.writeData(data)
    .then(result => {
      console.log('I have a writeData result', result)
    })
  }
  readData = () => {
    const keys = ['myProp', 'yourProp']
    window.edgeProvider.readData(keys)
    .then(result => {
      console.log('I have a readData result', result)
    })
  }
  requestSpend = () => {
    const spendTargets = [
      {
        nativeAmount: '0.000877',
        publicAddress: '1DfgUAznhjjRNiFCRxTD2Tdzr9psdZ1oAD'
      }
    ]
    window.edgeProvider.requestSpend(spendTargets)
    .then(result => {
      console.log('I have a requestSpend result', result)
    })
  }
  requestSpendWithOptions = () => {
    const spendTargets = [
      {
        nativeAmount: '0.000877',
        publicAddress: '1DfgUAznhjjRNiFCRxTD2Tdzr9psdZ1oAD'
      }
    ]
    const options = {
      
    }
    window.edgeProvider.requestSpend(spendTargets, options)
    .then(result => {
      console.log('I have a requestSpend result', result)
    })
  }
  requestSpendUri = () => {
    const uri = 'bitcoin:1DfgUAznhjjRNiFCRxTD2Tdzr9psdZ1oAD?amount=0.000877'
    window.edgeProvider.requestSpendUri(uri)
    .then(result => {
      console.log('I have a requestSpendUri result', result)
    })
  }
  requestSpendUriWithOptions = () => {
    const uri = 'bitcoin:1DfgUAznhjjRNiFCRxTD2Tdzr9psdZ1oAD?amount=0.000877'
    const options = { //EdgeRequestSpendOptions

    }
    window.edgeProvider.requestSpendUri(uri, options)
    .then(result => {
      console.log('I have a requestSpendUri result', result)
    })
  }
  signMessage = () => {
    const options = { //EdgeSignMessageOptions

    }
    window.edgeProvider.signMessage(options)
    .then(result => {
      console.log('I have a signMessage result', result)
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button type="init" className="btn btn-success" onClick={this.getCurrencyWallet}>Get Limited Wallets</button>
          <div className="App-shim" />
          <button type="startTimer" className="btn btn-success" onClick={this.getCurrencyWalletAllCurrencies}>Get All Wallets</button>
          <div className="App-shim" />
          <button type="next" className="btn btn-success" onClick={this.getReceiveAddress}>Get Receive Address</button>
          <div className="App-shim" />
          <button type="next" className="btn btn-success" onClick={this.writeData}>Write Data</button>
          <div className="App-shim" />
          <button type="next" className="btn btn-success" onClick={this.readData}>Read Data</button>
          <div className="App-shim" />
          <button type="next" className="btn btn-success" onClick={this.requestSpend}>Request Spend</button>
          <div className="App-shim" />
          <button type="next" className="btn btn-success" onClick={this.requestSpendWithOptions}>Request Spend With Options</button>
          <div className="App-shim" />
          <button type="next" className="btn btn-success" onClick={this.requestSpendUri}>Request Spend URI</button>
          <div className="App-shim" />
          <button type="next" className="btn btn-success" onClick={this.requestSpendUriWithOptions}>Request Spend URI w/Options</button>
          <div className="App-shim" />
          <button type="next" className="btn btn-success" onClick={this.signMessage}>Sign Message</button>
        </header>
      </div>
    );
  }
}

export default App;
