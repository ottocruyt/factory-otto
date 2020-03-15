import React from 'react';
import './AppDetails.css';

/*  Voor het werken met data:
import moment from 'moment';
date object:
moment(new Date(this.props.app.laatstUitgevoerdeActie.datum)) => easily usable date formatter
laatstUitgevoerdeActie.format('YYYY-MM-DD') => convert to html format
*/

class AppDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      naam: this.props.app.naam,
      omschrijving: this.props.app.omschrijving,
      datumLaatsteActie: this.props.app.laatstUitgevoerdeActie.datum,
      typeLaatsteActie: '',
      omschrijvingLaatsteActie: this.props.app.laatstUitgevoerdeActie
        .omschrijving,
      datumVolgendeActie: this.props.app.volgendeActie.datum,
      typeVolgendeActie: '',
      omschrijvingVolgendeActie: this.props.app.volgendeActie.omschrijving
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /*async componentDidMount() {
    const hal = this.props.match.params.naam;
    console.log(hal);
    const res = await axios.get(`../../../${hal}.json`);
    let app = res.data.apparaten;
    console.log(app);
  }*/

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value // name moet gelijk zijn aan de state name en input moet een name attribute hebben!
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    let { app } = this.props;
    //console.log(app);
    return (
      <div>
        <h1>Apparaat met ID {app.id} wijzigen</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group row'>
            <label htmlFor='ID' className='col-sm-2 col-form-label'>
              ID
            </label>
            <input
              type='text'
              className='form-control col-sm-8'
              placeholder={app.ID}
              id='ID'
              readOnly
            />
          </div>
          <div className='form-group row'>
            <label htmlFor='categorie' className='col-sm-2 col-form-label'>
              Categorie
            </label>
            <input
              type='text'
              className='form-control col-sm-8'
              id='categorie'
              placeholder={app.categorie}
              readOnly
            />
          </div>
          <div className='form-group row'>
            <label htmlFor='naam' className='col-sm-2 col-form-label'>
              Naam
            </label>
            <textarea
              className='form-control col-sm-8'
              id='naam'
              maxLength='100'
              name='naam'
              value={this.state.naam}
              required
              onChange={this.handleChange}
            />
          </div>
          <div className='form-group row'>
            <label htmlFor='omschrijving' className='col-sm-2 col-form-label'>
              Omschrijving
            </label>
            <textarea
              className='form-control col-sm-8'
              id='omschrijving'
              name='omschrijving'
              value={this.state.omschrijving}
              onChange={this.handleChange}
            />
          </div>
          <section>
            <h4>Laatst uitgevoerde actie</h4>
            <div className='form-group row'>
              <label
                htmlFor='datumLaatsteActie'
                className='col-sm-2 col-form-label'
              >
                Datum
              </label>
              <input
                type='date'
                className='form-control col-sm-8'
                id='datumLaatsteActie'
                name='datumLaatsteActie'
                value={this.state.datumLaatsteActie}
                onChange={this.handleChange}
              />
            </div>
            <fieldset className='form-group'>
              <div className='row'>
                <legend className='col-form-label col-sm-2 pt-0 '>Type</legend>

                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='radio'
                    id='typeLaatsteActie'
                    name='typeLaatsteActie'
                    value='typeLaatsteActieVervanging'
                    onChange={this.handleChange}
                    checked={
                      this.state.typeLaatsteActie ===
                      'typeLaatsteActieVervanging'
                    }
                  />
                  <label
                    htmlFor='typeLaatsteActie'
                    className='form-check-label'
                  >
                    vervanging
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='radio'
                    id='typeLaatsteActie'
                    name='typeLaatsteActie'
                    value='typeLaatsteActieNazicht'
                    checked={
                      this.state.typeLaatsteActie === 'typeLaatsteActieNazicht'
                    }
                    onChange={this.handleChange}
                  />
                  <label
                    htmlFor='typeLaatsteActie'
                    className='form-check-label'
                  >
                    nazicht
                  </label>
                </div>
              </div>
            </fieldset>
            <div className='form-group row'>
              <label htmlFor='omschrijving' className='col-sm-2 col-form-label'>
                Omschrijving
              </label>
              <textarea
                className='form-control col-sm-8'
                id='omschrijving'
                name='omschrijvingLaatsteActie'
                value={this.state.omschrijvingLaatsteActie}
                onChange={this.handleChange}
              />
            </div>
          </section>
          <section>
            <h4>Eerstvolgende actie</h4>
            <div className='form-group row'>
              <label
                htmlFor='datumVolgendeActie'
                className='col-sm-2 col-form-label'
              >
                Datum
              </label>
              <input
                type='date'
                className='form-control col-sm-8'
                id='datumVolgendeActie'
                name='datumVolgendeActie'
                value={this.state.datumVolgendeActie}
                onChange={this.handleChange}
              />
            </div>
            <fieldset className='form-group'>
              <div className='row'>
                <legend className='col-form-label col-sm-2 pt-0 '>Type</legend>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='radio'
                    id='typeVolgendeActie'
                    name='typeVolgendeActie'
                    value='typeVolgendeActieVervanging'
                    onChange={this.handleChange}
                    checked={
                      this.state.typeVolgendeActie ===
                      'typeVolgendeActieVervanging'
                    }
                  />
                  <label
                    htmlFor='typeVolgendeActie'
                    className='form-check-label'
                  >
                    vervanging
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='radio'
                    id='typeVolgendeActie'
                    name='typeVolgendeActie'
                    value='typeVolgendeActieNazicht'
                    onChange={this.handleChange}
                    checked={
                      this.state.typeVolgendeActie ===
                      'typeVolgendeActieNazicht'
                    }
                  />
                  <label
                    htmlFor='typeVolgendeActie'
                    className='form-check-label'
                  >
                    nazicht
                  </label>
                </div>
              </div>
            </fieldset>
            <div className='form-group row'>
              <label htmlFor='omschrijving' className='col-sm-2 col-form-label'>
                Omschrijving
              </label>
              <textarea
                className='form-control col-sm-8'
                id='omschrijving'
                name='omschrijvingVolgendeActie'
                value={this.state.omschrijvingVolgendeActie}
                onChange={this.handleChange}
              />
            </div>
          </section>

          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AppDetails;
