const Form = (props) => {
    const {
        values,
        change,
        submit,
        disabled,
        errors,
    } = props 

    const onSubmit = e => {
       e.preventDefault()
       submit() 
    }    

    const onChange = e => {
        const { name, value, checked, type } = e.target 
        const valueToUse = type === 'checkbox' ? checked : value 
        change(name, valueToUse)
    }
    return (
        <div>
            <h1>Build your own pizza </h1>
            <img 
            className="form-image"
            src="https://images.unsplash.com/photo-1647756844610-972ba9ef0881?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2112&q=80" 
            alt="Red Neon Sing saying Eat Pizza Everyday"
            />
            <form 
            id="pizza-form"
            className="form-container" 
            onSubmit={onSubmit}// work with form data , event handler preventDefault, post 
            >
                <h2>Build your own pizza</h2>

                <div className='errors'>
                    <div>{errors.username}</div>
                    <div>{errors.size}</div>
                    <div>{errors.specialInstructions}</div>
                </div>
      
                <label>Name 
                    <input
                    id="name-input"
                    value={values.username}
                    onChange={onChange}// capture input values 
                    name="username"
                    type="text"
                    >
                    </input>
                </label>

                <label>Choice of size
                    <select
                    id="size-dropdown"
                    onChange={onChange}
                    value={values.size}
                    name="size"
                    >
                        <option value=''>--Select Size--</option>
                        <option value='small'>S</option>
                        <option value='medium'>M</option>
                        <option value='large'>L</option>
                        <option value='x-large'>XL</option>
                    </select>
                </label>

                <div className="form-group checkboxes">
                <h4>Add Toppings</h4>

                <label>Pepperoni
                    <input
                    type='checkbox'
                    name='pepperoni'
                    checked={values.pepperoni}
                    onChange={onChange}>
                    </input>
                </label>

                <label>Green Pepper
                    <input
                    type='checkbox'
                    name='greenPepper'
                    checked={values.greenPepper}
                    onChange={onChange}>    
                    </input>
                </label>

                <label>Black Olives
                    <input
                    type='checkbox'
                    name='blackOlives'
                    checked={values.black0lives}
                    onChange={onChange}
                    ></input>
                </label>

                <label>Pineapple
                    <input
                    type='checkbox'
                    name='pineapple'
                    checked={values.pineapple}
                    onChange={onChange}
                    ></input></label>
                </div>

                <label>Special Instructions
                    <input
                    id="special-text"
                    value={values.specialInstructions}
                    onChange={onChange}
                    name="specialInstructions"
                    type="text"
                    >
                    </input>
                </label>
            
                <button 
                id="order-button" 
                disabled={disabled}
                >Add to Order</button>

            </form>



        </div>
    )
}

export default Form; 