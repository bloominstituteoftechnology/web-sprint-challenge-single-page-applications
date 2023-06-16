import React from "react";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Checkbox  from '@mui/material/Checkbox' ;
import IconButton from '@mui/material/IconButton';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormHelperText from '@mui/material/FormHelperText';


const formSpacing = {mt: 3, mb:2, width: '100%'}
const sizeOptions = ['Small', 'Medium', 'Large', 'Extra Large'];

export default function OrderPizza(props) {
    // step 8
    const {values, change, submit, handleIncrement, handleDecrement, pizzaOrder} = props
    console.log('pizza', pizzaOrder)
    //step 9 (after adding onchange events)
    const onChange = (event) => {
        const {name, value, checked, type} = event.target;
        const valueToUse = (type === 'checkbox' ? checked : value);
        // console.log('name', name);
        // console.log('value', value);
        // console.log('checked', checked);
        // console.log('type', type)
        change(name, valueToUse);
    }

    // step 10 
    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }

    return (
        <form onSubmit={onSubmit} id="pizza-form">
            <Container 
                maxWidth='sm'
                style={{ backgroundColor: '#F29727' }}
            >
                <Typography 
                    variant="h4"
                    sx={formSpacing}
                >
                    Build Your Own Pizza
                </Typography>
        
                <Autocomplete
                    options={sizeOptions} 
                    name='size'
                    value={values.size}
                    onChange={(event, value) => onChange({ target: { name: 'size', value } })}
                    align='center'
                    sx={formSpacing}
                    id="size-dropdown"
                    renderInput={(params) => (
                        <TextField {...params} label="Choice of Size" variant="outlined" />)}
                />
                <FormControl style={{display: 'flex'}} sx={formSpacing}>
                <FormLabel style={{display: 'flex'}} sx={formSpacing}>Choice of Sauce</FormLabel>
                    <RadioGroup 
                        name='sauce' 
                        sx={{ml: 1}} 
                        value={values.sauce}
                        onChange={onChange}
                    >
                        <FormControlLabel value='orignalRed' control={<Radio />} label='Orignal Red'/>
                        <FormControlLabel value='garlicRench' control={<Radio />} label='Garlic Rench'/>
                        <FormControlLabel value='bbqSauce' control={<Radio />} label='BBQ Sauce'/>
                        <FormControlLabel value='spinechAlfredo' control={<Radio />} label='Spinech Alfredo'/>
                    </RadioGroup>
                </FormControl>
                <FormLabel style={{display: 'flex'}} sx={formSpacing}>Add Toppings</FormLabel>        
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={
                                <Checkbox 
                                    checked={values.pepperoni}
                                    onChange={onChange}
                                    name="pepperoni"
                                />}
                            label="Pepperoni"
                            style={{ width: '200px' }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={
                                <Checkbox 
                                    checked={values.sausage}
                                    onChange={onChange}
                                    name="sausage"
                                />}
                            label="Sausage"
                            style={{ width: '200px' }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={
                                <Checkbox 
                                    checked={values.canadianBacon}
                                    onChange={onChange}
                                    name="canadianBacon"
                                />}
                            label="Canadian Bacon"
                            style={{ width: '200px' }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={
                            <Checkbox 
                                checked={values.spicyItalianSausage}
                                onChange={onChange}
                                name="spicyItalianSausage"
                            />}
                            label="Spicy Italian Sausage"
                            style={{ width: '200px' }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={
                                <Checkbox 
                                    checked={values.grilledChiken}
                                    onChange={onChange}
                                    name="grilledChiken"
                                />}
                            label="Grilled Chiken"
                            style={{ width: '200px' }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={
                                <Checkbox 
                                    checked={values.onions}
                                    onChange={onChange}
                                    name="onions"
                                />}
                            label="Onions"
                            style={{ width: '200px' }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={
                                <Checkbox 
                                    checked={values.greenPepper}
                                    onChange={onChange}
                                    name="greenPepper"
                                />}
                            label="Green Pepper"
                            style={{ width: '200px' }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={
                                <Checkbox 
                                    checked={values.dicedTomatos}
                                    onChange={onChange}
                                    name="dicedTomatos"
                                />}
                            label="Diced Tomatos"
                            style={{ width: '200px' }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={
                                <Checkbox 
                                    checked={values.blackOlives}
                                    onChange={onChange}
                                    name="blackOlives"
                                />}
                                label="Black Olives"
                                style={{ width: '200px' }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={
                                <Checkbox 
                                    checked={values.roastedGarlic}
                                    onChange={onChange}
                                    name="roastedGarlic"
                                />}
                            label="Roasted Garlic"
                            style={{ width: '200px' }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={
                                <Checkbox 
                                    checked={values.artichokeHearts}
                                    onChange={onChange}
                                    name="artichokeHearts"
                                />}
                            label="Artichoke Hearts"
                            style={{ width: '200px' }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={
                                <Checkbox 
                                    checked={values.threeCheese}
                                    onChange={onChange}
                                    name="threeCheese"
                                />}
                            label="Three Cheese"
                            style={{ width: '200px' }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={
                                <Checkbox 
                                    checked={values.pinepple}
                                    onChange={onChange}
                                    name="pinepple"
                                />}
                            label="Pinepple"
                            style={{ width: '200px' }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={
                                <Checkbox 
                                    checked={values.extraCheese}
                                    onChange={onChange}
                                    name="extraCheese"
                                />}
                            label="Extra Cheese"
                            style={{ width: '200px' }}
                        />
                    </Grid>
                </Grid>
                <TextField
                    id="special-text"
                    label="Anything else you would like to add?"
                    multiline
                    maxRows={4}
                    sx={formSpacing}
                    name="specialInstc"
                    value={values.specialInstc}
                    onChange={onChange}
                />
                <FormLabel style={{display: 'flex'}} sx={formSpacing} id>Delivery Information</FormLabel>   
                    <Grid container spacing={3} >
                        <Grid item xs={12}>
                            <TextField
                                label="Name"
                                id="name-input"
                                variant="outlined"
                                fullWidth
                                name="name"
                                value={values.name}
                                onChange={onChange}
                                inputProps={{ minLength: 2 }} // Set minimum length to 2 characters
                                error={values.name.length < 2} // Check if name length is less than 2
                            />
                            {values.name.length < 2 && (
                                <FormHelperText error>
                                    name must be at least 2 characters
                                </FormHelperText>
                            )}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Street Name"
                                variant="outlined"
                                fullWidth
                                name="streetName"
                                value={values.streetName}
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="City"
                                variant="outlined"
                                fullWidth
                                name="city"
                                value={values.city}
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Zipcode"
                                variant="outlined"
                                fullWidth
                                name="zipcode"
                                value={values.zipcode}
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Email"
                                variant="outlined"
                                fullWidth
                                name="email"
                                type="email" // Added the type prop with the value "email"
                                value={values.email}
                                onChange={onChange}
                            />
                        </Grid>
                    </Grid>
                <Box display="flex" alignItems="center" justifyContent="space-between" sx={formSpacing}>
                    <TextField
                        label="Number of Pizza?"
                        variant="outlined"
                        type="number"
                        value={values.numberOfOrder}
                        InputProps={{
                            endAdornment: (
                            <React.Fragment>
                                <IconButton size="small" onClick={handleIncrement}>
                                <Add />
                                </IconButton>
                                <IconButton size="small" onClick={handleDecrement}>
                                <Remove />
                                </IconButton>
                            </React.Fragment>
                            ),
                        }}
                        name="zipcode"
                    />
                    <Button type='submit' id="order-button" variant="contained" color="primary" sx={{mt: 3, mb:3, width: '50%'}} style={{padding: '15px'}}>
                        Submit Order
                    </Button>
                </Box>

                {pizzaOrder.map((pizza) => {
                    return (
                        <Card key={pizza.id} sx={{ mt: 2, backgroundColor: '#F29727' }}>
                            <CardContent>
                                <Box sx={{ mb: 2 }}>
                                <Typography variant="h5" component="h2">
                                    {pizza.name}
                                </Typography>
                                <Typography color="text.secondary">
                                    {pizza.streetName}, {pizza.city}, {pizza.zipcode}
                                </Typography>
                                </Box>
                                <Box sx={{ mb: 2 }}>
                                <Typography variant="h6" component="h3">
                                    Order Details
                                </Typography>
                                <Typography color="text.secondary">
                                    Size: {pizza.size}
                                </Typography>
                                <Typography color="text.secondary">
                                    Sauce: {pizza.sauce}
                                </Typography>
                                <Typography color="text.secondary">
                                    Toppings: {pizza.toppings.join(', ')}
                                </Typography>
                                <Typography color="text.secondary">
                                    Special Instructions: {pizza.specialInstc}
                                </Typography>
                                </Box>
                                <Typography variant="h6" component="h3">
                                Number of Orders: {pizza.numberOfOrder}
                                </Typography>
                            </CardContent>
                        </Card>
                    );
                })}
            </Container>
        </form>
    )
}