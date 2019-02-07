import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const types = [
    {
        value: 'digital',
        label: 'digital',
    },
    {
        value: 'físico',
        label: 'físico',
    },
]

const state = [
    {
        value: 'Disponible',
        label: 'Disponible',
    },
    {
        value: 'Prestado',
        label: 'Prestado',
    },
    {
        value: 'Pendiente',
        label: 'Pendiente',
    },
]

class Form extends Component {
  render() {
    return (
        <div className="form__container">
        <div className="popup">
            <form action="/signup" method="post">
                <TextField id="outlined-title" label="Título" className='form__textfield' /* value={this.state.name}  onChange={this.handleChange("name")}*/ margin="normal" variant="outlined" />

                <TextField id="outlined-author" label="Autor" className='form__textfield' /* value={this.state.name}  onChange={this.handleChange("name")}*/ margin="normal" variant="outlined" />

                <TextField id="outlined-isbn" label="ISBN" className='form__textfield' /* value={this.state.name}  onChange={this.handleChange("name")}*/ margin="normal" variant="outlined" />

                <TextField id="outlined-select-types" select label="Tipo" className="form__textfield" /*value={this.state.currency} onChange={this.handleChange('currency')} */ margin="normal" variant="outlined">
                    {types.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField id="outlined-tags" label="Tags" className='form__textfield' /* value={this.state.name}  onChange={this.handleChange("name")}*/ margin="normal" variant="outlined" />

                <TextField id="outlined-select-state" select label="Estado" className="form__textfield" /*value={this.state.currency} onChange={this.handleChange('currency')} */ margin="normal" variant="outlined">
                    {state.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                </form>
                <button className="close" onClick={this.props.togglePopup}> Cerrar </button>
            </div>
            </div>
    );
  }
}

export default Form;