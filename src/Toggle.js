import React from 'react';


//lorsque j'appuis sur le bouton Toggle il y a un like du commentaire sinon c'est un dislike
class Toggle extends React.Component{
    //premiere fonction qui s'execute pour creer le composant -> c'est celle qui le construit
    //Constructor = contructeur
    constructor(props){
        super(props);
        this.state={like:false};
        // Nous allons lié la fonction handleclick avec le this pour ne pas avoir a le repeter sans cesse...
        // Technique bonne a savoir
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(state => ({like: !state.like}));
    }

    // la fonction qui affiche html sr l'écran To render = afficher en anglais
    render(){
        return(
            <button onClick={this.handleClick}>
                {this.state.like ? 'like' : 'Dislike'}
            </button>
        );
    }
}

export default Toggle;