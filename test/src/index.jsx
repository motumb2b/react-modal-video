import React from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from '../../lib/index.js'

class App extends React.Component {

  constructor () {
    super()
    this.state = {
      isOpen: false,
      isOpenYouku: false
    }
    this.openModal = this.openModal.bind(this)
  }

  componentDidMount() {
    console.log('mounted');
    console.log(window.location.href)
  }

  openModal () {
    this.setState({isOpen: true}, () => {
    })
  }

  render () {
    return (
      <div>
        <ModalVideo channel='youtube' nocookies isOpen={this.state.isOpen} videoId='L61p2uyiMSo' origin={window.location.href} onClose={() => this.setState({isOpen: false})} />
        <button onClick={this.openModal}>Open youtube</button>

        <ModalVideo
            channel='youku'
            isOpen={this.state.isOpenYouku}
            videoId='XMTczNjgzMDYwNA='
            onClose={() => this.setState({isOpenYouku: false})}
        />
        <button onClick={() => this.setState({isOpenYouku: true})}>Open youku</button>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
    document.getElementById('root')
)
