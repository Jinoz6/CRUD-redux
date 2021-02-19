import React, { Component } from 'react'
import {connect} from 'react-redux'
import Post from './Post'
import EditComponent from './EditComponent'

class AllPost extends Component {
    render() {
        return (
            <div>

                <h1>All Post</h1>
                {this.props.posts.map((post)=>{

                    return(

                        <div key={post.id}>

                            {post.editing ? <EditComponent key={post.id} post={post} />:<Post key={post.id} post={post}/>}

                        </div>
                    )
                })}
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts : state
    }
}
export default connect(mapStateToProps)(AllPost)