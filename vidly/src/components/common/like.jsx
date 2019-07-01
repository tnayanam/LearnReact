import React, { Component } from 'react';

// 
class Like extends Component {
    render() {  

        let classes = "fa fa-heart";
        if(!this.props.liked) classes +="-o";
         return <i className={classes} style={{cursor: "pointer"}} aria-hidden ="true" onClick = {this.props.onClick}></i>;
    }
}
 
export default Like;

// let classes = "fa fa-heart";
// if(!this.props.liked) classes +="+o";
// return  <i className={this.props.classes} aria-hiddem ="true"></i> ;