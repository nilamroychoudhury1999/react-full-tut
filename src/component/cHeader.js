import React from "react"; 
class CHeader extends React.Component{
    render ()
    {
        return <h1>hi {this.props.name}</h1>;
    }
}
export default CHeader;