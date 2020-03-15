import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HalList from '../HalList/HalList';
import HalDetails from '../HalDetails/HalDetails';
import AppDetails from '../AppDetails/AppDetails';

class Routes extends Component {
  render() {
    const getHal = props => {
      // neemt route props van path (niet van defaultProps)
      let naam = props.match.params.naam;
      let currentHal = this.props.hallen.find(
        hal => hal.naam.toLowerCase() === naam.toLowerCase()
      );
      return (
        <HalDetails
          {...props}
          hal={currentHal}
          help={this.props.help}
          onHelp={this.props.onHelp}
        />
      ); // {...props} = match, location, history
    };

    const getApp = props => {
      let naam = props.match.params.naam;
      let id = props.match.params.id;
      let currentHal = this.props.hallen.find(
        hal => hal.naam.toLowerCase() === naam.toLowerCase()
      );
      let currentApp = currentHal.apparaten.find(
        app => app.ID.toLowerCase() === id.toLowerCase()
      );
      return <AppDetails {...props} app={currentApp} />;
    };

    return (
      <Switch>
        <Route
          exact
          path='/'
          render={() => (
            <HalList
              hallen={this.props.hallen}
              lijst={this.props.lijst}
              help={this.props.help}
              onClick={this.props.onClick}
              onHelp={this.props.onHelp}
            />
          )}
        />
        <Route exact path='/:naam' render={getHal} />
        <Route exact path='/:naam/apparaat/:id' render={getApp} />
        <Redirect to='/' />
      </Switch>
    );
  }
}

export default Routes;
