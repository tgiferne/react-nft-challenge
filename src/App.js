import logo from './logo.svg';
import './App.css';
import CollectionCard from './components/CollectionCard'
import Header from './components/Header'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Punklist from './components/Punklist';


function App() {

const [punkListData, setPunkListData] = useEffect([])

useEffect(() => {
  const getMyNfts = async () => {
    const openseaData = await axios.get('https://testnets-api.opensea.io/assets?assets_contract_address=0x93e19f97744bD1eeA86E70706F1BC510f19e6679&order_direction=asc'
    )
    console.log(openseaData.data.assets)
    setPunkListData(openseaData.data.assets)
  }

  return getMyNfts()
}, [])

  return (
    <div className='app'>
      <Header />
      <CollectionCard 
      id={0} 
      name={'Bandana Punk'} 
      traits={[{'value': 7}]} 
      image='https://ipfs.thirdweb.com/ipfs/QmZ5fD3UTRh8ALZCpMdypHkhMQSXyi4yyCz3Ea19kPmtXg/0.jpg' />


      <Punklist punkListData={punkListData} />
    </div>
  );
}

export default App;
