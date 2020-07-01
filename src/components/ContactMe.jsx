import React, {Component} from 'react'

class ContactMe extends Component {
    render () {
        return (
            <div>
                <section style={{backgroundColor: 'white', color: 'black'}} data-section="contactme" className="colorlib-work colorlib-narrow-content">
                    <div className="text-center">
                        <div className="row">
                            <div className="col col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta" style={{fontSize:'50px'}}>Contact Me</span>
                                <h1 id="colorlib-logo" style= {{fontSize:'30px', color:'royalblue'}}>Ehimenmen Ataman</h1>
                                <p style= {{fontSize:'20px'}}>+2348163123060, +2347017047720</p>
                                <span className="email" style= {{fontSize:'20px'}}><i className="icon-mail"></i> sarahehi.sa@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default ContactMe