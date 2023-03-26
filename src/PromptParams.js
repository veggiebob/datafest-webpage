import React, {Component, useState, setState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Slider } from '@mui/material';
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
]

class PromptParams extends Component {
    
    constructor(props) {
        super(props);
        this.options = props.optionsSubject;
        this.state = {
            states: [],
            genders: [],
            age: [25, 75],
            ethnicities: []
        }

        this.agetmp = [0, 0];

        this.setStates = this.setStates.bind(this);
        this.setGender = this.setGender.bind(this);
        this.setEthnicities = this.setEthnicities.bind(this);
        this.setAge = this.setAge.bind(this);
    }

    setStates(states) {
        this.options.next(this.state);
        this.setState({
            states: states,
            ...this.state
        });
    }

    setGender(states) {
        this.options.next(this.state);
        this.setState({
            genders: genders,
            ...this.state
        });
    }

    setEthnicities(eths) {
        this.options.next(this.state);
        this.setState({
            ethnicities: eths,
            ...this.state
        });
    }

    setAge(ages) {
        this.agetmp = ages.slice();
        this.options.next(this.state);
        this.setState({
            age: ages.slice(),
            ...this.state
        });
    }
    
    render() {
        // Age
        const minAge = 18;
        const maxAge = 100;
        const stepAge = 1;

        return (
            <Stack spacing={3} alignItems="left">

                <Autocomplete
                    multiple
                    id="tags-standard"
                    options={GENDERS}
                    getOptionLabel={(option) => option}
                    defaultValue={[]}
                    onChange={this.setGenders}
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
                    onChange={this.setStates}
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
                    onChange={this.setEthnicities}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="standard"
                            label="ethnicity"
                            placeholder="ethnicities?"
                        />)}
                    />
                
            <div>
                range: {this.agetmp[0]} to {this.agetmp[1]}
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
                </div>
            </Stack>
        )
    }
}

export default PromptParams;