import React, {useState, useEffect} from "react";
import { Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import Home from './Homepage';
import Form from './Form';
import schema from './validation/formSchema'
import * as yup from 'yup';

const initialFormValues = {
  //Text Inputs
  username:'',
  specialInstructions:'',
  //Dropdown
  size:'',
  //Checkboxes
  pepperoni:false,
  greenPepper:false,
  blackOlives:false,
  pineapple:false,
}

const initialFormErrors = {
  username:'',
  specialInstructions:'',
  size:'',
}

const initialOrder = [];
const initialDisabled = true; 

const App = () => {

  const [ formValues, setFormValues ] = useState(initialFormValues);//Object
  const [ order, setOrder ] = useState(initialOrder);//array
  const [ disabled, setDisabled ] = useState(initialDisabled);//boolean true 
  const [ formErrors, setFormErrors ] = useState(initialFormErrors);

  //Helpers 

  const postNewOrder = testOrder => {
    // Post request to pass data collected from a form to a database 
    axios.post('https://reqres.in/api/orders', testOrder)
      .then(res => {
        setOrder([res.data,...order])
        setFormValues(initialFormValues)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: '' }))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  // Event Handlers 
  const inputChange = (name, value) => {
    validate(name,value) 
    setFormValues({
      ...formValues, // spread operator : take all key/values pairs inside formValues and copy them inside a brand new object.
      [name]:value// computed properties. 
    })
  }

  const formSubmit = () => {
    const testOrder = {
      name: formValues.username.trim(),//removes whitespace from both ends of a string
      special:formValues.specialInstructions.trim(),
      size:formValues.size.trim(),
      topping:['pepperoni', 'greenPepper', 'blackOlives', 'pineapple'].filter(top => !!formValues[top])// ask this to Sam
    }   

    postNewOrder(testOrder)  
    console.log(testOrder)

  }

  //side effects
    useEffect(() => {
      schema.isValid(formValues).then(valid => setDisabled(!valid))
    }, [formValues])

  return (

    <div className="App">
      <nav> 
        <h1 className="store-main-header">BloomTech Eats</h1>

        <div id="nav-link">
          <Link to='/'>Home</Link>
          <Link to='/pizza'>Start your Order</Link>
        </div>
      </nav>

      <Switch>

        <Route path='/pizza'>
          <Form
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
            />
        </Route>

        <Route path='/'>
          <Home/>
        </Route>

      </Switch>

      {
        order.map(order => {
          return(
              <div className='order container'>
                <p>Name: {order.name}</p>
                <p>Size: {order.size}</p>
                <p>Special Request: {order.special}</p>
          
                {
                  !!order.topping && !!order.topping.length &&
                  <div>
                    Toppings:
                    <ul>
                      {order.topping.map((like, idx) => <li key={idx}>{like}</li>)}
                    </ul>
                  </div>
                }
              </div>
            )
          
        })
      }
    </div>
  );
};
export default App;
