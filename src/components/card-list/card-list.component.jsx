import { Component } from "react";
import {App} from "../../App";
import './card-list.style.css';
class CardList extends Component
{

    render(){
        const{monsters} = this.props;
        
        return (
        <div className="card-list">
            {monsters.map(monster =>(
                <div className="card-container">
                    <img alt={`monster ${monster.name}`} src={`https://robohash.org/${monster.id}aniket`}/>
                    <h2>{monster.name}</h2>
                    <p>{monster.email}</p>
                    </div>
            ))}
            </div>
        )
       
        
        
    }
}

export default CardList;