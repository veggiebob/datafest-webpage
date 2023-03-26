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
    }
    
    render() {
        
        // Age, EthnicIdentity
        return (
            <Stack spacing={3}alignItems="left">

                <Autocomplete
                    multiple
                    id="tags-standard"
                    options={GENDERS}
                    getOptionLabel={(option) => option}
                    defaultValue={[]}
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