import React from 'react';
import Voiture from './Voiture';

class Garage extends React.Component{

    //attributs


    //methodes
render(){
    //on ouvre les parentheses pour injecter de l'html via l'annotation JSK - Javascript XML et on execute la logique du code dans les {}
    const def="grise";
    const voit ={ color:"grise", brand:"Peugeot", owner:"None", id:"WWWWW"};
    //On ouvre les parenthèse pour injecter de l'HTML via l'annontation JSK - Javascript XML
    //C'est ici que l'on défini le contenu HTML affichable à l'appel de la balise <Garage /> dans l'index.js
    return(
        <div>
            <h1>Quelles sont les voitures que j'ai dans mon garage ?</h1>
            <Voiture color='vert' brand="Mustang" owner="Sylvain" id="NZ78W2" /><br/>
            <Voiture color='jaune' brand="Mercedes" owner="Jean" id="A788W2" /><br/>
            <Voiture color='bleu' brand="Ford" owner="Dalida" id="QZ88W2"/><br/>
            <Voiture color={def} brand="Citroen" owner="Lucile" id="RG5124" /><br/>
            <Voiture color={voit.color} brand={voit.brand} owner={voit.owner} id={voit.id} />

        </div>
    );
}


}

export default Garage;