import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import "./styles/Museums.css"
import { Container, Header, Image }  from '@sberdevices/plasma-ui';
import { useHistory } from "react-router-dom";
import CardContainer from "./Card.jsx";
import CardVertContainer from "./CardVert";
import {showFavorites} from "../server/API_helper"
import { updateFavorites } from "../server/favoritesManager";

const DivStyled = styled.div`padding: 30px;`;

function favUpdate(cards, editProps) {
    const ind = editProps.id-1;
    if(cards.length !== 0 && ind >= 0) {
        const id = cards[ind].id;
        updateFavorites(true, id);
        console.log(true);
        return true;
    }
    return false;
}

export const Favorites = (props) => {
    const openMuseum = (id) => {props.openMuseumById(id)}
    const load = () => {
        showFavorites()
        .then(res => {
            setCards(res.data); 
            props.fillArrayInd_Id(res.data, 'fav');
        })
    }
    const [isLoaded, setIsLoaded] = useState(false);
    const [cards, setCards] = useState([]);
    useEffect(() => setIsLoaded(true), [cards]);
    useEffect(() => {if(!isLoaded) load()});
    useEffect(() => {
        if(props.openId !== -1 && isLoaded) {
            history.push({pathname: `${props.prefix}/museums/first`});
        }
    }, [props.openId]);
    const history = useHistory();
    useEffect(() => {
        if(props.editFav.action === 'del') {
            if(favUpdate(cards, props.editFav))
                load();
        }
    }, [props.editFav]);
    window.currentURL = history.location.pathname;
    
    return(
    <div className="list-scroll">
        <div>
        <DivStyled>
            <Container>
                <Header
                    back={true}
                    title="Избранное"
                    subtitle="Список избранных музеев"
                    style={{color: "#FDEBD0"}}
                    onClick={() => {
                        history.goBack();
                    }}
                >
                </Header>
            </Container>
        </DivStyled>
        </div>
        {cards.length === 0 && isLoaded ?
            <h1>Нет избранных музеев</h1>
        :
        <div className="card-style">
            {cards===[]?<div></div> : cards.map((e, ind) => {
                if(document.documentElement.clientWidth <= 400) {
                console.log("vert");
                return <CardVertContainer
                            key={e.id} 
                            ind={ind+1} 
                            info={e} 
                            openMuseum={openMuseum}
                            prefix={props.prefix}
                        />;
            }
            else 
                return <CardContainer 
                            key={e.id} 
                            ind={ind+1} 
                            info={e} 
                            openMuseum={openMuseum}
                            prefix={props.prefix}
                        />
            })}
        </div>
        }
    </div>
    );
};
export default Favorites;