import React, {useState} from "react";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { FormControl, FormLabel, Radio, RadioGroup, FormControlLabel} from '@mui/material';
import { Grid, Checkbox } from '@mui/material';
import { IconButton } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import { Button, Box } from '@mui/material';


const formSpacing = {mt: 3, mb:3, width: '100%'}
const options = ['Small', 'Medium', 'Large'];

export default function OrderPizza() {

    const [value, setValue] = useState(0);
    const handleIncrement = () => {
        setValue(prevValue => prevValue + 1);
    };
    const handleDecrement = () => {
        if (value > 0) {
        setValue(prevValue => prevValue - 1);
        }
    }

    return (
        <Container 
            maxWidth='sm'
            style={{ backgroundColor: '#eceff1' }}
        >
            <Typography 
                variant="h4"
                sx={formSpacing}
            >
                Build Your Own Pizza
            </Typography>
       
            <Autocomplete
                options={options} sx={formSpacing}
                align='center'
                renderInput={(params) => (
                    <TextField {...params} label="Choice of Size" variant="outlined" />)}
            />
            <FormControl style={{display: 'flex'}} sx={formSpacing}>
                <FormLabel style={{display: 'flex'}}>Choice of Sauce</FormLabel>
                <RadioGroup sx={{ml: 1}}>
                    <FormControlLabel value='orignalRed' control={<Radio />} label='Orignal Red'/>
                    <FormControlLabel value='garlicRench' control={<Radio />} label='Garlic Rench'/>
                    <FormControlLabel value='bbqSauce' control={<Radio />} label='BBQ Sauce'/>
                    <FormControlLabel value='spinechAlfredo' control={<Radio />} label='Spinech Alfredo'/>
                </RadioGroup>
            </FormControl>
            <FormControl>
                <FormLabel style={{display: 'flex'}}>Add Toppings</FormLabel>        
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Pepperoni"
                            style={{ width: '200px' }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Sausage"
                            style={{ width: '200px' }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Canadian Bacon"
                            style={{ width: '200px' }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Spicy Italian Sausage"
                            style={{ width: '200px' }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Grilled Chiken"
                            style={{ width: '200px' }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Onions"
                            style={{ width: '200px' }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Green Pepper"
                            style={{ width: '200px' }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Diced Tomatos"
                            style={{ width: '200px' }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Black Olives"
                            style={{ width: '200px' }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Roasted Garlic"
                            style={{ width: '200px' }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={<Checkbox />} 
                            label="Artichoke Hearts"
                            style={{ width: '200px' }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Three Cheese"
                            style={{ width: '200px' }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Pinepple"
                            style={{ width: '200px' }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Extra Cheese"
                            style={{ width: '200px' }}
                        />
                    </Grid>
                </Grid>
            </FormControl>    
            <TextField
                id="outlined-multiline-flexible"
                label="Anything else you would like to add?"
                multiline
                maxRows={4}
                sx={formSpacing}
            />
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <TextField
                    label="Number"
                    variant="outlined"
                    type="number"
                    value={value}
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
                />
                <Button variant="contained" color="primary" sx={{mt: 3, mb:3, width: '50%'}} style={{padding: '15px'}}>
                    Submit Order
                </Button>
            </Box>
        </Container>
    )
}