import React, { Component } from 'react'
import {connect} from 'react-redux'

class PostForm extends Component {

    handleSubmit = (e) =>{

        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const data = {

            id:new Date(),
            title,
            message,
            isEditing:false

        }
        this.props.dispatch({
            type:"ADD_POST",
            data
        })

        this.getTitle.value = ""
        this.getMessage.value = ""

    }
    render() {
        return (
            <div>
                <h1> Create Post</h1>
                <form onSubmit={this.handleSubmit}>

                    <input type="text" ref={(input) => this.getTitle = input} placeholder="Enter post title here" required/>
                    <br/><br/>
                    <textarea ref={(input)=> this.getMessage = input} cols="30" rows="5" placeholder="Enter post here"/>
                    <br/><br/>
                    <button>Post</button>

                </form>                
            </div>
        )
    }
}

export default connect()(PostForm)
