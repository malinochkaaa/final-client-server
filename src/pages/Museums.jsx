import React, {useState, useEffect} from "react";
import "./styles/Museums.css"
import CardContainer from "./Card.jsx";
import CardVertContainer from "./CardVert";
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import {
    Container,
    Header,
    Spinner,
 } from '@sberdevices/plasma-ui';

import {showAllMuseums} from "../server/API_helper";
import { updateFavorites } from "../server/favoritesManager";

const DivStyled = styled.div`padding: 30px;`;

function favUpdate(cards, editProps) {
    const ind = editProps.id-1;
    if(cards.length !== 0 && ind >= 0) {
        const id = cards[ind].id;
        const inFav = cards[ind].in_favourites;
        console.log('inFave = ', inFav);
        const action = editProps.action;
        if((inFav && action === 'del') || (!inFav && action === 'add')) {
            updateFavorites(inFav, id);
        }
    }
}

export const Museums = (props) => {
    const openMuseum = (id) => {props.openMuseumById(id)}
    const load = () => {if(window.user_id !== "") showAllMuseums().then(res => {setCards(res.data); props.fillArrayInd_Id(res.data, 'all'); console.log("loaded")})}
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
        favUpdate(cards, props.editFav);
        setTimeout(load(), 1000);
    }, [props.editFav]);
    window.currentURL = history.location.pathname;
    console.log(document.documentElement.clientWidth);

    return(
    <div className="list-scroll">
        <div>
           <DivStyled>
                <Container>
                    <Header
                        back={true}
                        title="Музеи"
                        style={{color: "#FDEBD0"}}
                        subtitle="Список музеев Москвы"
                        onClick={() => {
                            setIsLoaded(false);
                            history.goBack();
                        }}
                    >
                    </Header>
                </Container>
            </DivStyled>
        </div>
        <div>
        {
        cards.length === 0 ?
        <Spinner size={100} style={{margin: "auto"}}/>
        :
        <div>
            {cards===[]?<div></div> : cards.map((e, ind) => {
                if(document.documentElement.clientWidth <= 400) {
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
    </div>
    );
};

export default Museums;