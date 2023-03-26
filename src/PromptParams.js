import React, {Component, useState, setState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { createTheme, Slider, ThemeProvider } from '@mui/material';
import { Stack } from '@mui/system';

const STATES = ['Kansas', 'Pennsylvania', 'Michigan', 'Alaska',
'Alabama', 'New Jersey', 'New Mexico', 'Iowa', 'Vermont', 'Connecticut',
'South Dakota', 'Mississippi', 'Wyoming', 'New Hampshire', 'California',
'Hawaii', 'Arizona', 'Utah', 'West Virginia', 'Georgia', 'Maryland',
'Arkansas', 'Nebraska', 'Louisiana', 'Maine', 'Oklahoma', 'Virginia',
'New York', 'North Carolina', 'Wisconsin', 'Missouri', 'Massachusetts',
'South Carolina', 'Indiana', 'Illinois', 'Texas', 'Tennessee',
'Florida'];
const GENDERS = [   'Female', 
                    'Male', 
                    "I'd rather not answer", 
                    'Other', 
                    'Non-Conforming', 
                    ];

const ETHNICITIES = [
 "I'd rather not answer",
 'Arab',
 'African',
 'Asian',
 'Native American or Alaska Native',
 'Other',
 'East Indian',
 'Latino or Hispanic',
 'African American',
 'Slavic',
 'Hispanic or Latino',
 'Not Hispanic or Latino',
 'Caucasian',
 'Native Hawaiian / Pacific Islander'
];

const CATEGORIES = ['Individual Rights', 'Family and Children', 'Other',
'Housing and Homelessness', 'Health and Disability',
'Work, Employment and Unemployment',
'Consumer Financial Questions', 'Income Maintenance', 'Juvenile',
'Education'];

class PromptParams extends Component {
    
    constructor(props) {
        super(props);
        this.options = props.optionsSubject;
        this.state = {
            states: [],
            genders: [],
            age: [18, 100],
            ethnicities: [],
            categories: []
        }

        this.agetmp = [18, 100];

        this.setStates = this.setStates.bind(this);
        this.setGenders = this.setGenders.bind(this);
        this.setEthnicities = this.setEthnicities.bind(this);
        this.setAge = this.setAge.bind(this);
        this.setCategories = this.setCategories.bind(this);
    }

    setStates(states) {
        this.state.states = states;
        this.options.next(this.state);
        this.setState({
            states: states,
            ...this.state
        });
    }

    setGenders(genders) {
        this.state.genders = genders;
        this.options.next(this.state);
        this.setState({
            genders: genders,
            ...this.state
        });
    }

    setEthnicities(eths) {
        this.state.ethnicities = eths;
        this.options.next(this.state);
        this.setState({
            ethnicities: eths,
            ...this.state
        });
    }

    setAge(ages) {
        this.agetmp = ages.slice();
        this.state.age = ages;
        this.options.next(this.state);
        this.setState({
            age: ages.slice(),
            ...this.state
        });
    }

    setCategories(cats) {
        this.state.categories = cats;
        this.options.next(this.state);
        this.setState({
            categories: cats,
            ...this.state
        });
    }
    
    render() {
        // Age
        const minAge = 18;
        const maxAge = 100;
        const stepAge = 1;
        const theme = createTheme({
            palette: {
              mode: 'dark',
            },
          });

        return (
            <ThemeProvider theme={theme}>
            <Stack spacing={3} alignItems="left">

                <Autocomplete
                    multiple
                    id="tags-standard"
                    options={GENDERS}
                    getOptionLabel={(option) => option}
                    defaultValue={[]}
                    onChange={(a, b) => this.setGenders(b)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="standard"
                            label="gender"
                            placeholder="gender?"
                        />)}
                    />
                <Autocomplete
                    multiple
                    options={STATES}
                    getOptionLabel={(option) => option}
                    defaultValue={[]}
                    onChange={(a, b) => this.setStates(b)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="standard"
                            label="state"
                            placeholder="states?"
                        />)}
                    />
                
                <Autocomplete
                    multiple
                    options={ETHNICITIES}
                    getOptionLabel={(option) => option}
                    defaultValue={[]}
                    onChange={(a, b) => this.setEthnicities(b)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="standard"
                            label="ethnicity"
                            placeholder="ethnicities?"
                        />)}
                    />

                <Autocomplete
                    multiple
                    options={CATEGORIES}
                    getOptionLabel={(option) => option}
                    defaultValue={[]}
                    onChange={(a, b) => this.setCategories(b)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="standard"
                            label="category"
                            placeholder="categories?"
                        />)}
                    />
            
            
            <Stack>
                <label>range: {this.agetmp[0]} to {this.agetmp[1]}</label>
                <input
                    type="range"
                    min={minAge}
                    max={maxAge}
                    step={stepAge}
                    onChange={(event) => this.setAge([Number(event.target.value), this.agetmp[1]])}
                />
                <input
                    type="range"
                    min={minAge}
                    max={maxAge}
                    step={stepAge}
                    onChange={(event) => this.setAge([this.agetmp[0], Number(event.target.value)])}
                />
                </Stack>
            </Stack>
            </ThemeProvider>
        )
    }
}

export default PromptParams;