import React, {useState, useEffect} from "react";
import "./Tretyakovka.css";
import CarouselContainer from "./Carousel.jsx";
import CarouselPortalContainer from "./CarouselPortal";
import { useHistory } from "react-router-dom";
import { 
    FaInstagram,
    FaFacebookF,
    FaTwitter,
    FaVk,
    FaSubway,
    FaClock,
    FaPhoneAlt,
    FaLink,
    FaMapMarkedAlt,
    FaMoneyBillAlt,
 } from "react-icons/fa";
import { Button, ActionButton} from '@sberdevices/plasma-ui';
import { IconHeartStroke, IconHeart, IconChevronLeft } from '@sberdevices/plasma-icons';
import { headline1, headline3, paragraph1 } from '@sberdevices/plasma-tokens';
import {showMuseum} from "../../server/API_helper.js";
import {updateFavorites} from "../../server/favoritesManager"

function favUpdate(id, currentFavStatus, action, setFavorite) {
    if((action === 'add' && !currentFavStatus) || (action === 'del' && currentFavStatus)) {
        console.log("update fav");
        updateFavorites(currentFavStatus, id);
        setFavorite(!currentFavStatus);
    }
}
export const Tretyakovka = (props) => {
    const load = () => {showMuseum(props.id).then(res => {setInfo(res.data); setFavorite(res.data.in_favourites)})}
    const [isLoaded, setIsLoaded] = useState(false);
    const [info, setInfo] = useState({});
    const [inFavorite, setFavorite] = useState(false);
    const history = useHistory();
    useEffect(() => setIsLoaded(true), [info]);
    useEffect(() => {if(!isLoaded) load()})
    useEffect(() => {if(isLoaded) load();}, [props.id]);
    useEffect(() => {if(isLoaded) {favUpdate(props.id, inFavorite, props.editFav.action, setFavorite);}}, [props.editFav]);
    window.currentURL = history.location.pathname;

    let worktime = info.worktime != undefined ? info.worktime : new Array(7).fill("loading...");
    let stations = info.station == undefined ? <p>loading...</p> : info.station.map((e, i) => (
        <div>
            <p style={paragraph1}>{e}</p>
            <p style={paragraph1}>{` (${info.distance[i]}.)`}</p>
        </div>
    ))
    return(
        !isLoaded ?
        <div>loading...</div>
        :
        <div className="scroll">
            <div className="name-container">
                <ActionButton
                    back={true}
                    size='m'
                    view='clear'
                    pin='square-square'
                    contentLeft={<IconChevronLeft/>}
                    onClick={() => {
                        console.log("back");
                        history.goBack();
                    }}
                >  
                </ActionButton>
                <h1 style={headline1}>{info.name}</h1>
                <p style={paragraph1} className="block-style">{info.description}</p>
                <div className="div-style"> 
                {
                    document.documentElement.clientWidth == 1280 &&
                    document.documentElement.clientHeight == 800 ?
                         <CarouselPortalContainer pictures={info.pictures}/>
                    :
                        <CarouselContainer pictures={info.pictures}/>
                }
                </div>
                <div className="align-right">
                    <Button
                        onClick = {() => {updateFavorites(inFavorite, info.id); setFavorite(!inFavorite);}}
                        text='Избранное'
                        size='l'
                        view='primary'
                        contentLeft={inFavorite ? <IconHeart/> : <IconHeartStroke/>}
                    >  
                    </Button>
                </div>
                <div className="div-style">
                    <FaMapMarkedAlt className="small-icon"/>
                    <h3 style={headline3}> Адрес: </h3>
                    <p style={paragraph1}>{info.address}</p>
                </div>
                <div className="div-style">
                    <FaPhoneAlt className="small-icon"/>
                    <h3 style={headline3}> Телефон: </h3>
                    <p style={paragraph1}>{info.phone}</p>
                </div>
                <div className="div-style">
                    <FaLink className="small-icon"/>
                    <h3 style={headline3}> Сайт: </h3>
                    <a href={info.website} className="inline-style"><p style={paragraph1}>{info.website}</p></a>
                </div>
                <div className="div-style">
                    <FaClock className="small-icon"/>
                    <h3 style={headline3}> Время работы:</h3>
                    <div>
                        <p style={paragraph1}>Понедельник: </p>
                        <p style={paragraph1}>{worktime[0]}</p>
                    </div>
                    <div>
                        <p style={paragraph1}>Вторник: </p>
                        <p style={paragraph1}>{worktime[1]}</p>
                    </div>
                    <div>
                        <p style={paragraph1}>Среда: </p>
                        <p style={paragraph1}>{worktime[2]}</p>
                    </div>
                    <div>
                        <p style={paragraph1}>Четверг: </p>
                        <p style={paragraph1}>{worktime[3]}</p>
                    </div>
                    <div>
                        <p style={paragraph1}>Пятница: </p>
                        <p style={paragraph1}>{worktime[4]}</p>
                    </div>
                    <div>
                        <p style={paragraph1}>Суббота: </p>
                        <p style={paragraph1}>{worktime[5]}</p>
                    </div>
                    <div>
                        <p style={paragraph1}>Воскресенье: </p>
                        <p style={paragraph1}>{worktime[6]}</p>
                    </div>
                </div>
                <div className="div-style">
                    <FaSubway className="small-icon"/>
                    <h3 style={headline3}> Станция метро: </h3>
                    {stations}
                </div>
                <div className="div-style">
                <FaMoneyBillAlt className="small-icon"/>
                    <h3 style={headline3}> Стоимость билетов: </h3>
                    <p style={paragraph1}>{info.payment}</p>
                </div>
                <div>
                    <a target="_blank" href={info.inst} className="inline-style"><FaInstagram className={info.inst === "null" ? "icon-no-link" : "icon-with-link"}/></a>
                    <a target="_blank" href={info.facebook} className="inline-style"><FaFacebookF className={info.facebook === "null" ? "icon-no-link" : "icon-with-link"}/></a>
                    <a target="_blank" href={info.twitter} className="inline-style"><FaTwitter className={info.twitter === "null" ? "icon-no-link" : "icon-with-link"}/></a>
                    <a target="_blank" href={info.vk} className="inline-style"><FaVk className={info.vk === "null" ? "icon-no-link" : "icon-with-link"}/></a>
                </div>
               
            </div>
        </div>
    );
};

export default Tretyakovka;