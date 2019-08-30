import React, {Component} from 'react'

export default class NewTask extends Component {
    constructor(props) {
        super(props)

        this.state = {
            textInput: ''
        }
    }

    handleChange = (event) => {
        this.setState({textInput: event.target.value})
    }

    render() {
        return(
            <div>
                <input onChange={this.handleChange} type="text"/>
                <button onClick={() => this.props.updateTasks(this.state.textInput)}>Add</button>
            </div>
        )
    }
}