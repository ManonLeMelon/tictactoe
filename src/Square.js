import React from 'react';

class Square extends React.Component{
    constructor(props){
        super(props);
        this.state={
            valeur:null, 
        }
    }
    render(){
        return (
            <button className="square" onClick={() => this.props.onClick()}>
            {/* </button> <button className="square" onClick={function(){this.setState({valeur:'X'});}}> */}
                {this.props.valeur}
            </button>
        );
    }

}
export default Square;