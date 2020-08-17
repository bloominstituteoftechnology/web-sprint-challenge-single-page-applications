import React, {useState} from 'react'
import {Card, CardImg, Form, FormGroup, Input, Dropdown, DropdownToggle, DropdownMenu, Label, InputGroup, Button} from 'reactstrap'
import axios from 'axios';
import * as yup from 'yup';

const OrderForm = () => {
    const [dropdownOpen, setDropdownOpen] =useState(false);
    const [formData, setFormData] = useState({
        name:"",
        number: 0,
        sauce:"",
        protein:"",
        cilantro: false,
        sausage: false,
        onions: false,
        pineapple:false,
        special:''
    })

    const schema = yup.object().shape({
        name: yup.string().required().min(2)
        
    })

    const submit = () => {
      schema.validate(formData).then( () => {
          axios.post('https://reqres.in/api/users', formData).then((res) => {
              console.log('This is your posted data', res.data)
          })
      })
    }
     const handleChange = (e) => {
         setFormData({...formData, [e.target.name]: e.target.value})
     }

     const handleToppings = (e) => {
         setFormData({...formData, [e.target.name]: e.target.checked})
     }

    const toggle = () => setDropdownOpen((prevState) => !prevState)
    return(
     <>
    <Card color="info">
     <h2 style={{color : 'white', margin: '0 auto'}}>
     Build Your Own Pizza!
   </h2>
   <CardImg style={{width: '50%', margin: '0 auto',}} src={require('./Assets/Pizza.jpg')}/>
    </Card>
 <Form data-cy='submit' onSubmit={(e) => {
     e.preventDefault()
     submit()
 }} style={{margin: '5%'}}>


<FormGroup>
    <legend>Name</legend>
    <Input type='name' name='name' data-cy="name" value={formData.name} onChange={handleChange}/>
</FormGroup>
<FormGroup>

<Dropdown isOpen={dropdownOpen} toggle={toggle}>
    <DropdownToggle caret>{formData.number=== 0 ? 'number of pizza' : formData.number}</DropdownToggle>
    <DropdownMenu>

        <div onClick ={() => {
            toggle();
            setFormData({...formData, number:0})
        }}>0</div>
        <div onClick ={() => {
            toggle();
            setFormData({...formData, number:1})
        }}>1</div>
        <div onClick ={() => {
            toggle();
            setFormData({...formData, number:2})
        }}>2</div>
        <div onClick ={() => {
            toggle();
            setFormData({...formData, number:3})
        }}>3</div>
        <div onClick ={() => {
            toggle();
            setFormData({...formData, number:4})
        }}>4</div>
    </DropdownMenu>


</Dropdown>

</FormGroup>

    <FormGroup tag='fieldset'>
       <legend>Sauce</legend>
        <FormGroup check>
         
        <Label check>
           <Input type='radio' name='sauce' value='original red' onChange={handleChange}/>
           Original Red
        </Label>
        </FormGroup>
        <FormGroup check>
         
         <Label check>
            <Input type='radio' name='sauce' value='garlic ranch' onChange={handleChange}/>
            Garlic Ranch
         </Label>
         </FormGroup>

         <FormGroup check>
         
         <Label check>
            <Input type='radio' name='sauce' value='bbq sauce' onChange={handleChange}/>
            BBQ Sauce
         </Label>
         </FormGroup>

         <FormGroup check>
         
         <Label check>
            <Input type='radio' name='sauce' value='spinach alfredo' onChange={handleChange}/>
            Spinach Alfredo
         </Label>
         </FormGroup>

         {/* //Toppings */}

         <legend>Toppings</legend>

    <FormGroup check>
     <Label check>
       <Input type='checkbox' name='cilantro' data-cy='checkbox1' checked={formData.cilantro} onChange={handleToppings}/>
         Cilantro

     </Label>


    </FormGroup>
    
    <FormGroup check>
     <Label check>
       <Input type='checkbox' name='sausage' data-cy='checkbox2' checked={formData.sausage} onChange={handleToppings}/>
         Sausage

     </Label>


    </FormGroup>

    </FormGroup>  
    
    <FormGroup check>
     <Label check>
       <Input type='checkbox' name=' onions' data-cy='checkbox3' checked={formData.Onions} onChange={handleToppings}/>
         Onions

     </Label>


    </FormGroup>  
    
     <FormGroup check>
     <Label check>
       <Input type='checkbox' name='pineapple' data-cy='checkbox4' checked={formData.pineapple} onChange={handleToppings}/>
         Pineapple

     </Label>


    </FormGroup>

  


<FormGroup>
    <legend>Special Instructions</legend>
    <input type='textarea' name='special' value={formData.special} onChange={handleChange}/>
</FormGroup>
<Button>Submit</Button>
 </Form>
     </>

    )
}

export default OrderForm