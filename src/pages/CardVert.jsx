import React, {useState} from "react";
import "./styles/Museums.css"
import { IconHeartStroke, IconHeart } from '@sberdevices/plasma-icons';
import { Link} from "react-router-dom";
import {
    Card,
    CardBody,
    CardContent,
    CardMedia, 
    Image,
    TextBoxSubTitle, 
    TextBox, 
    TextBoxTitle,
    ActionButton,
 } from '@sberdevices/plasma-ui';
 import {updateFavorites} from "../server/favoritesManager"
import { useEffect } from "react";
const CardVertContainer = (props) => {
    const [inFavorite, setFavorite] = useState(props.info.in_favourites); //TODO получать в избранном или нет из пропсов 
    useEffect(() => setFavorite(props.info.in_favourites), [props.info.in_favourites]);
    return(
        <div className="card-vert-style">
                <Card style={{
                    width: '20rem', backgroundColor: "rgba(0, 44, 66, 0.7)" }}>
                    <CardBody className="img-style">
                            <Image className="img-m" src={props.info.pictures} />
                        <CardContent>
                            <TextBox style={{ fontSize: "16px", position: "absolute", top: "10px", color: "#d8f4ef"}} title={props.ind}>
                                <TextBoxTitle className="text-style">
                                    <Link to={{pathname: `${props.prefix}/museums/first`}} onClick={() => props.openMuseum(props.info.id)}>{props.info.name}</Link>
                                </TextBoxTitle>
                                <TextBoxSubTitle className="text-style">{props.info.address}</TextBoxSubTitle>
                            </TextBox>
                            <ActionButton
                                onClick = {() => {updateFavorites(inFavorite, props.info.id); setFavorite(!inFavorite);}}
                                size='m'
                                view='primary'
                                pin='square-square'
                                contentLeft={inFavorite ? <IconHeart/> : <IconHeartStroke/>}
                            >  
                            </ActionButton>
                        </CardContent>
                    </CardBody>
                </Card>
        </div>
    );
};

export default CardVertContainer;