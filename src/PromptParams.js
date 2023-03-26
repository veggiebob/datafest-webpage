import React, {Component, useState} from 'react';
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
            age: [],
            ethnicities: []
        }
        this.setStates = this.setStates.bind(this);
        this.setGender = this.setGender.bind(this);
        this.setEthnicities = this.setEthnicities.bind(this);
        this.setAge = this.setAge.bind(this);
    }

    setStates(states) {
        this.setState({
            states: states,
            ...this.state
        });
        this.options.next(this.state);
    }

    setGender(states) {
        this.setState({
            genders: genders,
            ...this.state
        });
        this.options.next(this.state);
    }

    setEthnicities(eths) {
        this.setState({
            ethnicities: eths,
            ...this.state
        });
        this.options.next(this.state);
    }

    setAge(ages) {
        this.setState({
            age: ages,
            ...this.state
        });
        this.options.next(this.state);
    }
    
    render() {
        
        // Age, EthnicIdentity
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
                
                {/* <Slider
                    getAriaLabel={() => 'Minimum distance'}
                    value={0}
                    onChange={console.log}
                    valueLabelDisplay="auto"
                    getAriaValueText={"hello?"}
                    disableSwap
                /> */}
            </Stack>
        )
    }
}

export default PromptParams;