import React, { Component } from 'react';

// The react router bits and the routes.js file that cintains all the routes (and wraps the withRouter)
import { BrowserRouter, Route, Switch } from "react-router-dom";

// For the bits that make scrolling work as expected.
import { ScrollContext } from 'react-router-scroll-4';

// This contains the SVG spritesheet
import SVGSpritesheet from './resources/_svg-spritesheet.js';

// Look at all the components
import HeaderBar    from './components/header-bar'
import Footer       from './components/footer'
import Home         from './components/home'
import Details      from './components/details' 
import About        from './components/about' 
import NaughtyList  from './components/naughty-list'

class App extends Component {
    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL+'/'}>
                <ScrollContext>
                    <div className="App">
                        <HeaderBar />

                        <Switch>
                            <Route exact path='/' component={Home} key={'Home'}/>
                            <Route exact path='/search/:page' component={Home} key={'Home'}/>
                            <Route path='/details/:license/:prettyname' component={Details} key={'Details'}/>
                            <Route exact path='/about/' component={About} key={'About'}/>
                            <Route exact path='/naughty/' component={NaughtyList} key={'NaughtyList'}/>
                            <Route exact path='/naughty/:page' component={NaughtyList} key={'NaughtyList'}/>
                        </Switch>

                        <Footer />
                        <SVGSpritesheet />
                    </div>
                </ScrollContext>
            </BrowserRouter>
        );
    }
}

export default App;

