import React from "react";
import {
  createSmartappDebugger,
  createAssistant,
} from "@sberdevices/assistant-client";
import "./App.css";
import { createGlobalStyle } from 'styled-components';
import { darkJoy, darkEva, darkSber } from '@sberdevices/plasma-tokens/themes';
import {text, background} from '@sberdevices/plasma-tokens';
import { DeviceThemeProvider } from '@sberdevices/plasma-ui/components/Device';
import {
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Redirect,
  withRouter,
} from "react-router-dom";

import Menu from "./pages/Menu";
import NotFound from "./pages/404";
import Museums from "./pages/Museums";
import Favorites from "./pages/Favorites";
import Tretyakovka from "./pages/museums/Tretyakovka";
import packageJson from '../package.json'
const initializeAssistant = (getState) => {
  if (process.env.NODE_ENV === "development") {
    return createSmartappDebugger({
      token: process.env.REACT_APP_TOKEN ?? "",
      initPhrase: `Запусти ${process.env.REACT_APP_SMARTAPP}`,
      getState,
    });
  }
  return createAssistant({ getState });
};

const ThemeBackgroundEva = createGlobalStyle(darkEva);
const ThemeBackgroundSber = createGlobalStyle(darkSber);
const ThemeBackgroundJoy = createGlobalStyle(darkJoy);

const DocStyle = createGlobalStyle`
    html:root {
        min-height: 100vh;
        color: ${text};
        background-position: center center;
        background-attachment: fixed;
        background-image: url("https://res.cloudinary.com/museums/image/upload/e_blur:400/v1632137644/back2.jpg");
    }
`;

let ind_id = [];
let ind_id_fav = [];
const prefix = packageJson.homepage ? "/final-client-server" : "";
window.currentURL = prefix + "/";
export class App extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      character: "sber", //текущий персонаж
      openMusId: -1,
      page: -1,
      editFav: {
        id: -1,
        action: 'add',
      }
    }
    this.assistant = initializeAssistant(() => this.getStateForAssistant() );
    this.assistant.on("start", (event) => {
      setTimeout(this.assistant.sendData({action: {action_id: "getSub"}}), 300);
    });
    this.assistant.on("data", (event) => {
      if(event.type === 'character') {
        console.log("был вызван " + event.character.id);
        this.setState({
          character: event.character.id,  
        });
      }
      const { action } = event
      this.dispatchAssistantAction(action);
    });
  }
  

  componentDidMount() {
    console.log('componentDidMount');
  }

  getStateForAssistant () {
    const state = {
      item_selector: {
        items: null,
      },
    };
    return state;
  }

  dispatchAssistantAction (action) {
    console.log('action: ', action);
    if (action) {
      switch (action.type) {
        case "get_sub":
          window.user_id = action.data;
          break;
        case "open_museums_list":
          this.setState({page: 0});
          this.setState({page: -1});
          break;
        case "open_favor_museums":
          this.setState({page: 1});
          this.setState({page: -1});
          break;
        case "open_museum":
          let id = 1;
          if(window.currentURL === prefix+"/museums") {
            id = ind_id[action.data-1];
          }
          if(window.currentURL === prefix+"/fav") {
            id = ind_id_fav[action.data-1];
          }
          if(id) this.setState({openMusId: id});
          break;
        case "add_favorite":
          if(window.currentURL !== prefix+"/") {
            this.setState({editFav: {
              id: action.data,
              action: 'add',
            }});
          }
          break;
        case "delete_favorite":
          if(window.currentURL !== prefix+"/") {
            this.setState({editFav: {
              id: action.data,
              action: 'del',
            }});
          }
          break;
        case "back":
          if(window.currentURL !== prefix+"/")
            window.history.back();
          break;
      }
    }
  }
  
  openMuseumById = (id) => {
    console.log('id: ', id);
    this.setState({openMusId: id});
  }

  fillArrayInd_Id = (arr, param) => {
    for(let i = 0; i < arr.length; i++) {
      if(param === 'all')
        ind_id[i] = arr[i].id;
      else if(param === 'fav')
        ind_id_fav[i] = arr[i].id;
    }
  }

  render() {
    console.log(prefix);
    return (
      <DeviceThemeProvider>
        <DocStyle/>
        {(() => {
                  switch (this.state.character) {
                      case 'sber':
                          return <ThemeBackgroundSber />;
                      case 'eva':
                          return <ThemeBackgroundEva />;
                      case 'joy':
                          return <ThemeBackgroundJoy />;
                      default:
                          return; 
                  }
              })()}
                <Router>
                      <Switch>
                        <Route exact path = {`${prefix}/`} render={(props) => <Menu
                        assistant={this.assistant}
                          nextPage={this.state.page}
                          prefix={prefix}/>} 
                        />
                        <Route exact path = {`${prefix}/404`} component = {NotFound} />
                        <Route exact path = {`${prefix}/museums`} render={(props) => <Museums
                          openId={this.state.openMusId} 
                          fillArrayInd_Id={this.fillArrayInd_Id}
                          openMuseumById={this.openMuseumById}
                          editFav={this.state.editFav}
                          prefix={prefix}
                          />}
                        />
                        <Route exact path = {`${prefix}/museums/first`} render = {(props) => <Tretyakovka
                          id={this.state.openMusId}
                          editFav={this.state.editFav}
                          />}
                        />
                        <Route exact path = {`${prefix}/fav/first`} component = {Tretyakovka} />
                        <Route exact path = {`${prefix}/fav`} render={(props) => <Favorites 
                          openId={this.state.openMusId}
                          openMuseumById={this.openMuseumById}
                          fillArrayInd_Id={this.fillArrayInd_Id}
                          editFav={this.state.editFav}
                          prefix={prefix}
                          />}
                        />
                        <Redirect to = {`${prefix}/404`}/>
                      </Switch>
                </Router>
      </DeviceThemeProvider>
    );
  }
}

export default withRouter(App);