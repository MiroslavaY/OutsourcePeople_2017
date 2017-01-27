import React from 'react';
import './Form.css';
import SubmitButton from './../../Button/Button';
import Input from './../Input/Input';


const inputs = [{
  labelText: 'Name and Surname',
  name: 'name',
  type: 'text',
  pattern: '',
  placeholder: 'enter your name',
  required: true,
}, {
  labelText: 'Email',
  name: 'email',
  type: 'email',
  pattern: '',
  placeholder: 'enter your email',
  required: true,
}, {
  labelText: 'Phone',
  name: 'phone',
  type: 'text',
  pattern: '',
  placeholder: 'enter your phone',
  required: true,
}, {
  labelText: 'Company',
  name: 'company',
  type: 'text',
  pattern: '',
  placeholder: 'enter name of your company',
  required: false,
}, {
  labelText: 'Position',
  name: 'position',
  type: 'text',
  pattern: '',
  placeholder: 'enter your position',
  required: false,
}, {
  labelText: 'City',
  name: 'city',
  type: 'text',
  pattern: '',
  placeholder: 'enter your city',
  required: false,
}, {
  labelText: 'Your Promocode',
  name: 'promocode',
  type: 'text',
  pattern: '',
  placeholder: 'enter your promocode',
  required: false,
}, {
  labelText: 'Comment',
  name: 'comment',
  type: 'textarea',
  pattern: '',
  placeholder: 'left a comment for your order',
  required: false,
},];

export default class Form extends React.Component {


  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1 className="form-component-title">{this.props.title}</h1>
        {
          inputs.map(el => <Input
            key={el.name}
            handler={this.handleChange}
            className="input-component--block-display"
            settings={el}/>)
        }
        <SubmitButton text="Send!" type="submit"/>
      </form>
    );
  }
}

