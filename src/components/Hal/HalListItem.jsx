import React from 'react';
import { Link } from 'react-router-dom';

class HalListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      help: false
    };
  }

  render() {
    let { hal } = this.props;

    return (
      <div
        className={`Hal ${this.props.help && 'help'} ${this.state.help &&
          'help'}`}
        style={
          this.props.lijst
            ? { display: 'block', border: '0px' }
            : {
                position: 'absolute',
                width: hal.width,
                height: hal.height,
                top: hal.top,
                left: hal.left
              }
        }
      >
        <ul className={`Hal-list`}>
          <li className={`Hal-name`}>
            {!this.props.lijst && (
              <button
                onClick={() => this.setState({ help: !this.state.help })}
                className='btn-danger'
              >
                NOOD
              </button>
            )}
            <Link className='underline' to={`/${hal.naam}`}>
              {hal.naam}
            </Link>
          </li>
          <li>Oppervlakte: {hal.oppervlakte} m²</li>
          <li>Aantal apparaten: {hal.apparaten.length}</li>
          <li>Aantal acties: {calculateAantalActiesBinnen24u(hal)}</li>
        </ul>
      </div>
    );
  }
}

function calculateAantalActiesBinnen24u(hal) {
  // calculate aantal acties:
  let aantalActies = 0;
  const huidigeDatum = new Date();
  let huidigeDatumPlus24 = new Date();
  huidigeDatumPlus24.setDate(huidigeDatum.getDate() + 1);
  console.log('Huidige date: ', huidigeDatum);
  console.log('Huidige date +24u: ', huidigeDatumPlus24);

  hal.apparaten.forEach(apparaat => {
    const volgendeActieDatum = new Date(apparaat.volgendeActie.datum);
    console.log(
      `volgende actie datum van ${apparaat.naam}:`,
      volgendeActieDatum
    );
    if (volgendeActieDatum < huidigeDatumPlus24) {
      aantalActies++;
    }
  });
  return aantalActies;
}

export default HalListItem;
