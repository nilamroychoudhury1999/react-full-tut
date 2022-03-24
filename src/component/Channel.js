import React from "react"; 
class Channel extends React.Component{
    constructor(){
        super();
        this.state={
            msg:'hi baby'
        }
    }
    subscribe(){
        this.setState({
            msg:'Thanks for sub'
        })
    }
    render ()
    {
        return(<div> <h1>hi {this.state.msg}</h1>
        <button onClick={()=>{this.subscribe()}}>SubScribe</button>
        </div>)

    }
}
export default Channel;