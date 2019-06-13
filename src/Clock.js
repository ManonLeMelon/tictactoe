import React from 'react';

class Clock extends React.Component{
    //premiere fonction qui s'execute pour creer le composant -> c'est celle qui le construit
    //Constructor = contructeur
    constructor(props){
        super(props);
        this.state={
            date: new Date()
        };
    }

    // la fonction qui affiche html sr l'écran To render = afficher en anglais
    render(){
        return(
            <div>
            <h1>Heure locale</h1>
            <h2>Il est actuellement {this.state.date.toLocaleTimeString()}</h2>
        </div>
        )
    }

    //une fois que l'affichage render a lieu , la fonction suivante s'execute directement
    // componentdidmount = le composant vient de se mettre en place 
    componentDidMount(){
        this.timerID = setInterval(()=>this.tictac() ,1000)
    }

    // Voici une fonction qui permet de mettre a jour la date dans l'état (this.state.date)
    // ATT : qui dit mise a jour de l'état dit : setState
    tictac(){
        this.setState({
            date: new Date()
        });
    }

    //juste avant de finir un lifecycle et de quitter le composant, nous effaçon le contenu de l'intervalle de temps 
    componentWillMount(){
        clearInterval(this.timerID);
    }
}


export default Clock;