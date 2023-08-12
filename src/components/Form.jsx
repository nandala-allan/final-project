import { FileInput,Input,TextInput,Checkbox } from '@mantine/core';
import { useState } from 'react';
import { DateInput } from '@mantine/dates';
import { Select } from '@mantine/core';
import { Textarea } from '@mantine/core';
// import { useRef } from 'react';
import { Button } from '@mantine/core';
import { ActionIcon } from '@mantine/core';
import { TimeInput } from '@mantine/dates';
import { IconClock } from '@tabler/icons-react';
// import { RadioGroup, Radio } from '@mantine/core';
// import React, { useState } from 'react';
function Form(){
    // const ref = useRef<HTMLInputElement>
    const [value, setValue] = useState('');
    return(
<div style={{padding:50}}>
<h1 style={{textAlign:"center",padding:20}}>COMPLAINER</h1>
    <div style={{display:'flex',alignItems:'center',justifyContent:"space-around",}}>
   
    <FileInput
      placeholder="Pick file"
    //   label="Your resume"
      size="xl"
      withAsterisk
      style={{width:"10%"}}
      
    />
    <Input
      style={{width:"30%"}}
      placeholder="Reference Number"
    />
    
    </div>
        <div>
        <TextInput value={value}
         onChange={(event) => setValue(event.currentTarget.value)}
         placeholder="Pick file"
           label="Name"
           size="xs"
           withAsterisk
           className='py-8 ...'
         />
        </div>
        <div style={{display:"flex",alignItems:"center",border:"1px solid black",padding:20}}>
        <DateInput
      value={value}
      onChange={setValue}
      label="Date Birth"
      placeholder="Date input"
      size="xs"
    />
         <TextInput value={value}
         onChange={(event) => setValue(event.currentTarget.value)}
         placeholder="Pick file"
           label="Age"
           size="xs"
           withAsterisk
         />
         <TextInput value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
          placeholder="Pick file"
           label="Telephone"
           size="xs"
           withAsterisk
         />
         Gender:
        <Checkbox
        label="Male"
        />
        <Checkbox
        label="female"
        />
        <TextInput value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
          placeholder="Pick file"
           label="Other"
           size="xs"
           withAsterisk
         />
        </div>
        <div>
        <TextInput value={value}
         onChange={(event) => setValue(event.currentTarget.value)}
         placeholder="Pick file"
           label="Name"
           size="xs"
           withAsterisk
         />
         <TextInput value={value}
         onChange={(event) => setValue(event.currentTarget.value)}
         placeholder="Pick file"
           label="Place Of ResiDence"
           size="xs"
           withAsterisk
         />
         <TextInput value={value}
         onChange={(event) => setValue(event.currentTarget.value)}
         placeholder="Pick file"
           label="National ID Number (NIN)"
           size="xs"
           withAsterisk
         />
         <TextInput value={value}
         onChange={(event) => setValue(event.currentTarget.value)}
         placeholder="Pick file"
           label="Email Address"
           size="xs"
           withAsterisk
         />
        </div>
        <h1 style={{textAlign:"center",padding:20}}>VICTIM DETAILS</h1>
        <div>
        <Select
      label="Offence Type:"
      placeholder="Pick one"
      data={[
        { value: 'accident', label: 'Accident' },
        { value: 'steal', label: 'Stealind' },
        { value: 'murder', label: 'Murder' },
        { value: 'accident', label: 'Accident' },
        { value: 'steal', label: 'Stealind' },
        { value: 'murder', label: 'Murder' },
       
      ]}
      />
      <TextInput value={value}
         onChange={(event) => setValue(event.currentTarget.value)}
         placeholder="Pick file"
           label="Name Of Person Reported"
           size="xs"
           withAsterisk
           className='py-8 ...'
         />
         <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
         Gender:
        <Checkbox
        label="Male"
        />
        <Checkbox
        label="female"
        />
        <TextInput value={value}
         onChange={(event) => setValue(event.currentTarget.value)}
         placeholder="Pick file"
           label="Telephone"
           size="xs"
           withAsterisk
           className='py-8 ...'
         />
         </div>
         <TextInput value={value}
         onChange={(event) => setValue(event.currentTarget.value)}
         placeholder="Pick file"
           label="Place Of Residence"
           size="xs"
           withAsterisk
           className='py-8 ...'
         />
            <Textarea
      placeholder="Tell Us What Happened"
      label="Case Detail"
      size="xl"
      withAsterisk
    />
        </div>
        <p>When Did This Happen</p>
        <div style={{display:'flex',justifyContent:'space-between'}}>
        <DateInput
      value={value}
      onChange={setValue}
      label="Date Birth"
      placeholder="Date input"
      size="xs"
    />

<TimeInput
      label="Click icon to show browser picker"
    //   ref={ref}
      rightSection={
        <ActionIcon >
          <IconClock size="1rem" stroke={1.5} />
        </ActionIcon>
      }
     />
        </div>
        <TextInput value={value}
         onChange={(event) => setValue(event.currentTarget.value)}
         placeholder="Pick file"
           label="Place Of Residence"
           size="xs"
           withAsterisk
           className='py-8 ...'
         />
         <p>Any Witness</p>
          <div style={{display:'flex',justifyContent:'space-between'}}>
          <TextInput value={value}
         onChange={(event) => setValue(event.currentTarget.value)}
         placeholder="Pick file"
           label="Name"
           size="xs"
           withAsterisk
           className='py-8 ...'
         />

<TextInput value={value}
         onChange={(event) => setValue(event.currentTarget.value)}
         placeholder="phone number"
           label="Tel"
           size="xs"
           withAsterisk
           className='py-8 ...'
         />
        </div>
        <TextInput value={value}
         onChange={(event) => setValue(event.currentTarget.value)}
         placeholder="Pick file"
           label="Injuries?(If Any Specify)"
           size="xs"
           withAsterisk
           className='py-8 ...'
         />
         <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",padding:20}}>
            Did You Get Any Medical Assistance 
        <Checkbox
        label="Yes"
        />
        <Checkbox
        label="No"
        />
        </div>
        <h1 style={{textAlign:"center",padding:20}}>OFFICER IN-CHARGE OF CASE</h1>
        <div>
        
         <TextInput value={value}
         onChange={(event) => setValue(event.currentTarget.value)}
         placeholder="Pick file"
           label="Rank"
           size="xs"
           withAsterisk
           className='py-8 ...'
         />
         <TextInput value={value}
         onChange={(event) => setValue(event.currentTarget.value)}
         placeholder="Pick file"
           label="Name"
           size="xs"
           withAsterisk
           className='py-8 ...'
         />
         <TextInput value={value}
         onChange={(event) => setValue(event.currentTarget.value)}
         placeholder="Pick file"
           label="Police Station"
           size="xs"
           withAsterisk
           className='py-8 ...'
         />
        </div>
        
       
        <div >
        <Button className='mx-8 ...'>
      SUBMIT FORM
    </Button>
        </div>
       
</div>
    )
}

export default Form