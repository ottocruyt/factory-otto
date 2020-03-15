import React from 'react';
import './styles.css';
import Routes from './components/Routes/Routes';
import Header from './components/Header/Header';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lijstView: true,
      isLoading: true,
      help: false,
      hallen: []
    };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  async componentDidMount() {
    const res = await axios.get('http://localhost:3000/hallen.json');
    let data = res.data.hallen;
    this.setState({
      isLoading: false,
      hallen: data
    });
  }

  handleToggleClick = () => {
    this.setState({
      lijstView: !this.state.lijstView
    });
  };

  handleHelp = () => {
    this.setState({
      help: !this.state.help
    });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <div className='spinner'>
          <i className='fas fa-7x fa-spinner fa-spin' />
          <h1>Loading...</h1>
        </div>
      );
    }
    return (
      <div>
        <Header />
        <Routes
          hallen={this.state.hallen}
          lijst={this.state.lijstView}
          help={this.state.help}
          onClick={this.handleToggleClick}
          onHelp={this.handleHelp}
        />
      </div>
    );
  }
}

export default App;
/*

 <Navbar onClick={this.handleToggleClick} lijst={this.state.lijstView} />

const hallen = [
  {
    naam: "Hal1",
    oppervlakte: "150",
    aantalApparaten: "2",
    aantalActies: "2",
    height: 350,
    width: 300,
    top: 0,
    left: 0,
    apparaten: [
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
      }
    ]
  },
  {
    naam: "Hal2",
    oppervlakte: "100",
    aantalApparaten: "3",
    aantalActies: "5",
    height: 150,
    width: 500,
    top: 0,
    left: 300,
    apparaten: [
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
    ]
  },
  {
    naam: "Hal3",
    oppervlakte: "200",
    aantalApparaten: "1",
    aantalActies: "3",
    height: 200,
    width: 500,
    top: 150,
    left: 300,
    apparaten: [
      {
        ID: "301",
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
    ]
  }
];*/

/** <HalList hallen={hallen} lijst={this.state.lijstView} /> */

/**        <button onClick={this.handleClick}>
          Huidige view: {this.state.view}
        </button> */

/**
 *     <HashRouter>
      <div className="App">
        <h1>Mijn fabriek</h1>
        <ul>
          <li>
            <NavLink to="/">Mijn fabriek</NavLink>
          </li>
          <li>
            <NavLink to="/Hal1">Hal 1</NavLink>
          </li>
          <li>
            <NavLink to="/Hal2">Hal 2</NavLink>
          </li>
        </ul>
        <Route exact path="/" component={Hal} />
        <Route path="/hal1" component={Hal1} />
        <Route path="/hal2" component={Hal} />
      </div>
    </HashRouter>
 */
