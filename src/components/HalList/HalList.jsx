import React from 'react';
import './HalList.css';
import Navbar from '../Navbar/Navbar';
import HalListItem from '../Hal/HalListItem';

class HalList extends React.Component {
  render() {
    //console.log(this.props.hallen[0].apparaten[0].volgendeActie.datum);
    return (
      <div>
        <Navbar onClick={this.props.onClick} lijst={this.props.lijst} />
        {!this.props.lijst ? (
          <button onClick={this.props.onHelp} className='btn-danger'>
            NOOD
          </button>
        ) : null}
        <div
          style={{
            position: 'relative',
            height: 400
          }}
          className='Hal-container'
        >
          {this.props.hallen.map((hal, index) => (
            <HalListItem key={hal + index} hal={hal} />
          ))}
        </div>
      </div>
    );
  }
}

/** <HalDetails apparaten={apparaten} /> */
/*const apparaten = [
  {
    ID: "101",
    categorie: "machine",
    naam: "WD1",
    omschrijving: "dik",
    laatstUitgevoerdeActie: {
      datum: "01022020",
      type: "vervanging",
      omschrijving: "vervanging riem"
    },
    volgendeActie: {
      datum: "01032020",
      type: "nazicht",
      omschrijving: "nazicht"
    }
  },
  {
    ID: "102",
    categorie: "machine",
    naam: "WD2",
    omschrijving: "normaal",
    laatstUitgevoerdeActie: {
      datum: "01022020",
      type: "vervanging",
      omschrijving: "vervanging riem"
    },
    volgendeActie: {
      datum: "01032020",
      type: "nazicht",
      omschrijving: "nazicht"
    }
  },
  {
    ID: "201",
    categorie: "lamp",
    naam: "lamp1",
    omschrijving: "lamp",
    laatstUitgevoerdeActie: {
      datum: "15022020",
      type: "vervanging",
      omschrijving: "vervanging"
    },
    volgendeActie: {
      datum: "15022030",
      type: "vervanging",
      omschrijving: "vervanging LED"
    }
  }
];*/

export default HalList;

/**
 *               style={{
                position: "absolute",
                width: hal.width,
                height: hal.height,
                top: hal.top,
                left: hal.left
              }}
 */
