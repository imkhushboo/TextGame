import React from 'react'

const About = (props) => {
  return (
    <div className='container my-3'>
      <div className="card" style={{width: "18rem",backgroundColor:props.mode.backgroundColor==='black'?'#9BABB8':'white'}}>
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
  )
}

export default About
