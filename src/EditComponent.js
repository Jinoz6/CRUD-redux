import React ,{ Component} from 'react'
import {connect} from 'react-redux'


class EditComponent extends Component {

    handleSubmit = (e) =>{

        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newMessage = this.getMessage.value;
        const data = {
          
            newTitle,
            newMessage,
            
        }
        this.props.dispatch({
            type:"UPDATE_POST",
            id:this.props.post.id,
            data:data
        })

        console.log(data)

        this.getTitle.value = ""
        this.getMessage.value = ""

    }

    render(){
        return(

            <div>
                <h1>test</h1>
                <form onSubmit={this.handleSubmit}>

                    <input type="text" ref={(input) => this.getTitle = input} defaultValue={this.props.post.title} placeholder="Enter post title here" required/>
                    <br/><br/>
                    <textarea ref={(input)=> this.getMessage = input} defaultValue={this.props.post.message} cols="30" rows="5" placeholder="Enter post here"/>
                    <br/><br/>
                    <button>Post</button>

                </form>        
            </div>
        )
    }
}

export default connect()(EditComponent)