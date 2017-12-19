import React from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'
 
class App extends React.Component {
 
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }
 
  openModal () {
    this.setState({isOpen: true})
  }
 
  render () {
    return (
      <div>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' />
        <button className='btn btn-orange' onClick={this.openModal}>Open Video</button>
      </div>
    )
  }
}
 
ReactDOM.render(
  <App />,
    document.getElementById('root')
)