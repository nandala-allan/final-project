
import { FileInput, Input, TextInput } from "@mantine/core";
import { useState } from "react";
import { DateInput } from "@mantine/dates";
import { Select } from "@mantine/core";
import { Textarea } from "@mantine/core";
import { NumberInput } from "@mantine/core";
import { Button } from "@mantine/core";
import { Radio, Group } from "@mantine/core";
// import axios from "axios";

function Form() {
  const [formData, setFormData] = useState({
    // referenceNumber: "",
    // complainerName: "",
    // regestredData: "",
    // complainerAge: "",
    // complainerTelephone: "",
    // complainersGender: "",
    // complainerResidence: "",
    // complainerId: "",
    // complainerEmail: "",
    // offence: "",
    // victimName: "",
    // victimTelephone: "",
    // victimsgender: "",
    // victimResidence: "",
    // caseDetailes: "",
    // gender: "",
    // happenedDate: "",
    // crimeScene: "",
    // witnessName: "",
    // witnessTel: "",
    // injuries: "",
    // medicalAssistance1: "",
    rank: "",
    officerName: "",
    policeStation: "",
  });
  const handleChanges = (e) => {
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
    <div style={{ width: "1440px", padding: 50, margin: "auto" }}>
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
            name="complainersGender"
            value={formData.complainersGender}
            label="sex"
            description="select complainer's complainersGender "
            withAsterisk
            onChange={(value) =>
              handleChanges({ target: { name: "complainersGender", value } })
            }
          >
            <Group mt="xs">
              <Radio value="male" label="Male" />
              <Radio value="female" label="Female" />
            </Group>
          </Radio.Group>
        </div>
        <div>
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
            <TextInput
              name="victimTelephone"
              value={formData.victimTelephone}
              onChange={handleChanges}
              placeholder="Pick file"
              label="Telephone "
              size="md"
              withAsterisk
              className="py-8 ..."
            />

            <Radio.Group
              mt="md"
              name="victimsgender"
              value={formData.victimsgender}
              label="sex"
              description="select complainer's victimsgender "
              withAsterisk
              onChange={(value) =>
                handleChanges({ target: { name: "victimsgender", value } })
              }
            >
              <Group mt="xs">
                <Radio value="male" label="Male" />
                <Radio value="female" label="Female" />
              </Group>
            </Radio.Group>
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
            label="Date"
            placeholder="Date input"
            size="md"
          />
        </div>
        <TextInput
          name="crimeScene"
          value={formData.crimeScene}
          onChange={handleChanges}
          placeholder="crimeScene"
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
          <Radio.Group
            name="medicalAssistance1"
            value={formData.medicalAssistance1}
            label="Did you receive medical assistance ?"
            description="medicalAssistance1"
            withAsterisk
            onChange={(value) =>
              handleChanges({ target: { name: "medicalAssistance1", value } })
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
          <Button type="submit" className="mx-8 ...">
            SUBMIT FORM
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Form;
