import React, {Component} from 'react'

export default class Image extends Component {
    constructor(props) {
        super(props)
    
    }
    
    render() {
        return(
            <div>
                <img src={this.props.myImage} alt=''/>
                <p>Error 599</p>
            </div>
        )
    }
}