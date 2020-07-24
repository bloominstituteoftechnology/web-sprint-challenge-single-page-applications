import React from 'react'; 


const OrderForm = () => {
    return (
        <div>
            <h2>Build Your Pizza</h2>
            {/* text */}
        <form className='form-wrapper'>

            {/* Order Form Starts Here */}

            <label>What's the name for the order?
                    <input 
                    placeholder='Name required'
                    name='name'
                    maxLength='35'
                    />
                </label>

                {/* dropdown */}

                <label>Size
                    <select name='size'>
                        <option value='Personal'>Personal - 8"</option>
                        <option value='Family'>Family - 16"</option>
                        <option value='Party'>Party - 21"</option>
                    </select>
                </label>

                {/* checkboxes */}

                <label>Anchovies 
                    <input 
                    name='anchovies'
                    type='checkbox'
                    />
                </label>
                <label>Pepperoni
                    <input 
                    name='pepperoni'
                    type='checkbox'
                    />
                </label>
                <label>Pineapple
                    <input 
                    name='pineapple'
                    type='checkbox'
                    />
                </label>
                <label>Basil
                    <input 
                    name='basil'
                    type='checkbox'
                    />

                    {/* textarea */}
                <div className="special">
                    <label>Special:
                        <textarea placeholder="Any special instruction for us? Tip: We can do cartwheels" />
                    </label>
                </div>
                
                <button>Place Order</button>
                </label>
            </form>
        </div>
    )
}

export default OrderForm; 