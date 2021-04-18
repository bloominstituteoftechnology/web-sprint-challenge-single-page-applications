import React from 'react'

export default function(){
const choice = crust() {
    ['Handmade Pan', 
    'Crunchy, Thin Crust',
    'Brooklyn Style',
    'Gluten Free Crust',
    ]};

return(
    <form>
        <div className ='pizza-crust'>
            <label> crust
                <select name='pizza-crust' value= {value.crust} onChange={onChange}>
                    <option value="">select Crust!</option>
                    <option value="Handmade Pan">Handmade Pan</option>
                    <option value="Crunchy">Crunchy</option>
                    <option value="Thin Crust">Thin Crust</option>
                     <option value="Brooklyn Style">Brooklyn Style</option>
                    <option value="Gluten Free Crust">Gluten Free Crust</option>
                </select>
            </label>
        </div> 
        </form>
    )
}