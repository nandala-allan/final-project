import { FileInput, Input, TextInput, Box } from "@mantine/core";
import { useState } from "react";
import { DateInput } from "@mantine/dates";
import { Select } from "@mantine/core";
import { Textarea } from "@mantine/core";
import { NumberInput } from "@mantine/core";
// import { useRef } from 'react';
import { Button } from "@mantine/core";
import { Radio, Group } from "@mantine/core";
function Form() {
  const [formData, setFormData] = useState({
    // referenceNumber: "",
    // complainerName: "",
    // regestredData: "",
    // complainerAge: "",
    // complainerTelephone: "",
    // others: "",
    // complainerPlaceOfBirth: "",
    // complainerResidence: "",
    // complainerId: "",
    // complainerEmail: "",
    // offence: "",
    // victimName: "",
    // victimTelephone: "",
    // victimResidence: "",
    // caseDetailes: "",
    // gender: "",
    // happenedDate: "",
    // crimeScene: "",
    // witnessName: "",
    // witnessTel: "",
    // injuries: "",
    // medicalAssistance: "",
    // rank: "",
    officerName: "",
    policeStation: "",
  });
  const handleChanges = (e) => {
    // console.log(e.target.value)
    const { name, value } = e.target;
    if (!e.target) {
      return null;
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      data: {
        ...formData,
      },
    };

    axios
      .post(
        "https://finalproject-strapi-back-end.onrender.com/api/final-projects",
        userData
      )
      .then((response) => {
        console.log(response.data);
      });
  };
  return (
    <Box
      maw={1440}
      mx="auto"
      style={{ width: "", padding: 50, margin: "auto" }}
    >
      <form onSubmit={handleSubmit}>
        <h1 style={{ textAlign: "center", padding: 20, fontWeight: 600 }}>
          COMPLAINER
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <FileInput
            placeholder="Pick file"
            // name="complainerPhoto"
            value={formData.complainerPhoto}
            onChange={(phote) =>
              handleChanges({
                target: { name: "complainerPhoto", value: phote },
              })
            }
            size="xl"
            withAsterisk
            style={{ width: "10%" }}
          />
          <Input
            style={{ width: "30%" }}
            placeholder="Reference Number"
            name="referenceNumber"
            value={formData.referenceNumber}
            onChange={handleChanges}
          />
        </div>
        <div>
          <TextInput
            name="complainerName"
            value={formData.complainerName}
            onChange={handleChanges}
            placeholder="FullName"
            label="Name"
            size="md"
            mt="md"
            withAsterisk
            className="py-8 ..."
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "1px solid black",
            padding: 20,
          }}
        >
          <DateInput
            value={formData.regestredData}
            onChange={(data) =>
              handleChanges({ target: { name: "regestredData", value: data } })
            }
            label="Date Birth"
            placeholder="Date input"
            size="md"
            mt="md"
          />
          <NumberInput
            value={formData.complainerAge}
            onChange={(age) =>
              handleChanges({ target: { name: "complainerAge", value: age } })
            }
            placeholder="Your age"
            label="Input Your age"
            withAsterisk
            mt="md"
          />
          <TextInput
            name="complainerTelephone"
            value={formData.complainerTelephone}
            onChange={handleChanges}
            placeholder="Telephone Number"
            label="Telephone"
            size="md"
            mt="md"
            withAsterisk
          />
          <Radio.Group
            mt="md"
            name="gender"
            value={formData.gender}
            label="sex"
            description="select complainer's gender "
            withAsterisk
            onChange={(value) =>
              handleChanges({ target: { name: "gender", value } })
            }
          >
            <Group mt="xs">
              <Radio value="male" label="Male" />
              <Radio value="female" label="Female" />
            </Group>
          </Radio.Group>
          <TextInput
            name="others"
            value={formData.others}
            onChange={handleChanges}
            placeholder="Pick file"
            label="Other"
            size="xs"
            mt="md"
            withAsterisk
          />
        </div>
        <div>
          <TextInput
            name="complainerPlaceOfBirth"
            value={formData.complainerPlaceOfBirth}
            onChange={handleChanges}
            placeholder="Enter place birth"
            label="Place Of Birth"
            size="md"
            mt="md"
            withAsterisk
          />
          <TextInput
            name="complainerResidence"
            value={formData.complainerResidence}
            onChange={handleChanges}
            placeholder="Where do you stay?"
            label="Place Of Residence"
            size="md"
            mt="md"
            withAsterisk
          />
          <TextInput
            name="complainerId"
            value={formData.complainerId}
            onChange={handleChanges}
            placeholder="Your national id number (NIN)"
            label="National ID Number (NIN)"
            size="md"
            mt="md"
            withAsterisk
          />
          <TextInput
            name="complainerEmail"
            value={formData.complainerEmail}
            onChange={handleChanges}
            placeholder="Your email Address"
            label="Email Address"
            size="md"
            mt="md"
            withAsterisk
          />
        </div>
        <h1
          style={{
            textAlign: "center",
            padding: 20,
            fontWeight: 600,
            margin: 10,
          }}
        >
          VICTIM DETAILS
        </h1>
        <div>
          <Select
            value={formData.offence}
            onChange={(value) =>
              handleChanges({ target: { name: "offence", value: value } })
            }
            label="Offence Type:"
            placeholder="Choose type of offence commited"
            data={[
              { value: "accident", label: "Accident" },
              { value: "steal", label: "Stealing" },
              { value: "murder", label: "Murder" },
            ]}
            size="md"
          />

          <TextInput
            name="victimName"
            value={formData.victimName}
            onChange={handleChanges}
            placeholder="Pick file"
            label="Name Of Person Reported"
            size="md"
            withAsterisk
            className="py-8 ..."
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* //////// */}
            {/* Gender:
          <Checkbox label="Male" />
          <Checkbox label="female" />

          
          /////// */}
            <TextInput
              name="victimTelephone"
              value={formData.victimTelephone}
              onChange={handleChanges}
              placeholder="Pick file"
              label="Telephone"
              size="md"
              withAsterisk
              className="py-8 ..."
            />
          </div>
          <TextInput
            name="victimResidence"
            value={formData.victimResidence}
            onChange={handleChanges}
            placeholder="Pick file"
            label="Place Of Residence"
            size="md"
            withAsterisk
            className="py-8 ..."
          />
          <Textarea
            name="caseDetailes"
            value={formData.caseDetailes}
            onChange={handleChanges}
            placeholder="Tell Us What Happened"
            label="Case Detail"
            size="xl"
            withAsterisk
          />
        </div>
        <h5>When Did This Happen</h5>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <DateInput
            name="happenedDate"
            value={formData.happenedDate}
            onChange={(happened) =>
              handleChanges({
                target: { name: "happenedDate", value: happened },
              })
            }
            label="Date Birth"
            placeholder="Date input"
            size="md"
          />
        </div>
        <TextInput
          name="crimeScene"
          value={formData.crimeScene}
          onChange={handleChanges}
          placeholder="Pick file"
          label="Place Of Residence"
          size="md"
          withAsterisk
          className="py-8 ..."
        />
        <h5>Any Witness</h5>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <TextInput
            name="witnessName"
            value={formData.witnessName}
            onChange={handleChanges}
            placeholder="Pick file"
            label="Name"
            size="md"
            withAsterisk
            className="py-8 ..."
          />

          <TextInput
            name="witnessTel"
            value={formData.witnessTel}
            onChange={handleChanges}
            placeholder="phone number"
            label="Tel"
            size="md"
            withAsterisk
            className="py-8 ..."
          />
        </div>
        <TextInput
          name="injuries"
          value={formData.injuries}
          onChange={handleChanges}
          placeholder="Pick file"
          label="Injuries?(If Any Specify)"
          size="md"
          withAsterisk
          className="py-8 ..."
        />
        <div
          style={{
            padding: 20,
          }}
        >
          {/* //////////////////////////// */}
          {/* Did You Get Any Medical Assistance */}
          {/* <Checkbox label="No" onChange={(No)=>handleChanges({target:{name:"medicalAssistance",value:No}})}/>
        <Checkbox label="Yes" onChange={(Yes)=>handleChanges({target:{name:"medicalAssistance",value:Yes}})} /> */}
          <Radio.Group
            name="medicalAssistance"
            value={formData.medicalAssistance}
            label="Did you receive medical assistance ?"
            description="medicalAssistance"
            withAsterisk
            onChange={(value) =>
              handleChanges({ target: { name: "medicalAssistance", value } })
            }
          >
            <Group mt="xs">
              <Radio value="no" label="No" />
              <Radio value="yes" label="Yes" />
            </Group>
          </Radio.Group>
        </div>
        <h1 style={{ textAlign: "center", padding: 20, fontWeight: 600 }}>
          OFFICER IN-CHARGE OF CASE
        </h1>
        <div>
          <Select
            value={formData.rank}
            onChange={(value) =>
              handleChanges({ target: { name: "rank", value: value } })
            }
            label="Rank"
            placeholder="Select Officer In Charge Rank"
            data={[
              { value: "Officer", label: "Officer" },
              { value: "Corporal", label: "Corporal" },
              { value: "Sergeant", label: "Sergeant" },
              { value: "Lieutenant", label: "Lieutenant" },
            ]}
            size="md"
          />

          {/* <TextInput
            name="rank"
            value={formData.rank}
            onChange={handleChanges}
            placeholder="Pick file"
            label="Rank"
            size="md"
            withAsterisk
            className="py-8 ..."
          /> */}

          <Select
            value={formData.officerName}
            onChange={(value) =>
              handleChanges({ target: { name: "officerName", value: value } })
            }
            label="Officer In Charge"
            placeholder="Officer In Charge"
            data={[
              { value: "Akiki", label: "Julian" },
              { value: "Kirondo", label: "Abdul" },
              { value: "Odongo", label: "Simon" },
              { value: "Kasule", label: "Moses" },
            ]}
            size="md"
          />

          {/* <TextInput
            name="officerName"
            value={formData.officerName}
            onChange={handleChanges}
            placeholder="Pick file"
            label="Name"
            size="md"
            withAsterisk
            className="py-8 ..."
          /> */}
          <TextInput
            name="policeStation"
            value={formData.policeStation}
            onChange={handleChanges}
            placeholder="Pick file"
            label="Police Station"
            size="md"
            withAsterisk
            className="py-8 ..."
          />
        </div>

        <div>
          <Button type="submit" className=" bg-blue-500">
            SUBMIT FORM
          </Button>
        </div>
      </form>
    </Box>
  );
}

export default Form;
