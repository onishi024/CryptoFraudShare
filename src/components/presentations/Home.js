import React from 'react'
import '../../App.css'

import Header from './Header'
import FraudRegister from './FraudRegister'
import FraudHistory from './FraudHistory'

class Home extends React.Component {

  render() {
    return(
      <div>
        <Header />
        <FraudRegister />
        <FraudHistory />
      </div>
    )
  }
}

export default Home
