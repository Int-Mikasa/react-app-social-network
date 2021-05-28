import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        statusText: this.props.status
    }

    activeEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deActiveEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.statusText)
    }

    setStatusText = (e) => {
        this.setState({
            statusText: e.target.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                statusText: this.props.status
            })
        }

    }

    render() {
        console.log("render")
        return <div>
            {!this.state.editMode &&
            <div>
                <span onDoubleClick={this.activeEditMode}>{this.props.status || "Установите статус"}</span>
            </div>
            }
            {this.state.editMode &&
            <div>
                <input autoFocus={true} onChange={this.setStatusText} onBlur={this.deActiveEditMode} value={this.state.statusText} type="text"/>
            </div>
            }
        </div>
    }
}

export default ProfileStatus