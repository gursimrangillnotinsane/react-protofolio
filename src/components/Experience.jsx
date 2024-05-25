import Inputs from "./Input";
import { useState } from "react";
import Protofolio from "./Protofolio"
import "../styles/main.css"
import { v4 as uuid } from "uuid"
function Experience() {
    // Initializing with an empty array
    var [items, setItems] = useState([]);

    function Save({ formData }) {
        setItems(items => [
            ...items,
            [formData.jobTitle, formData.CompanyName, formData.Responsibilities, formData.date]
        ],
            setNewFields([...newFields, { id: newFields.length }]))
        const realtime = document.getElementById("newData2")
        realtime.style.display = "none"
        console.log(realtime)
    }

    function DeleteItem({ index }) {
        const newArray = [...items.slice(0, index), ...items.slice(index + 1)];
        const newArrayButton = [...newFields.slice(0, index), ...newFields.slice(index + 1)];
        setItems(newArray);
        setNewFields(newArrayButton)
    }

    const [formData, setFormData] = useState({
        jobTitle: "GSA",
        CompanyName: "Petro Canada",
        Responsibilities: "This, ksjdf ,sdf s df sdfsdf",
        date: "2023-"
    });

    const [newFields, setNewFields] = useState([]);

    const handleInputChange = (key, value) => {
        setFormData({
            ...formData,
            [key['types']]: value,
        });
    };

    const edit = ({ index }) => {
        const inputs = document.getElementsByTagName("input");
        inputs[6].value = items[index][0]
        inputs[7].value = items[index][1]
        inputs[8].value = items[index][2]
        inputs[9].value = items[index][3]

        DeleteItem({ index })
        setFormData({
            ...formData,
            jobTitle: items[index][0],
            CompanyName: items[index][1],
            Responsibilities: items[index][2],
            date: items[index][3]
        })

    }
    const NewData = () => {
        const realtime = document.getElementById("newData2")
        realtime.style.display = "flex"
    }
    return <>
        <div className="Protofolio experience ">
            <h2>Experience</h2>
            {newFields.map((field, index) => {
                return <div key={index + 90}>
                    <button key={index + 500} onClick={() => { DeleteItem(index = { index }) }}>Delete</button>
                    <button key={index + 100} onClick={() => { edit(index = { index }) }}>Edit</button>
                    <div className="innerEdu" key={field.id}>

                        {items[index].map((i) => {
                            return <p key={uuid()}>{i}</p>
                        })}
                    </div>
                </div>

            })}
            <div id="newData2" className="innerEdu">
                <p>{formData.jobTitle}</p>
                <p>{formData.CompanyName}</p>
                <p>{formData.Responsibilities}</p>
                <p>{formData.date}</p>
            </div>

        </div>
        <div className="inputDiv">
            <h2>EXPERIENCE</h2>
            <table>
                <tbody>
                    <tr>
                        <td><p>Job Title:</p></td>
                        <td><Inputs setInput={handleInputChange} types="jobTitle" keyValue="jobTitle" /></td>
                    </tr>
                    <tr>
                        <td><p>Company Name:</p></td>
                        <td> <Inputs setInput={handleInputChange} types='CompanyName' keyValue="CompanyName" /></td>
                    </tr>
                    <tr>
                        <td><p>Responsibilities</p></td>
                        <td><Inputs setInput={handleInputChange} types='Responsibilities' keyValue="Responsibilities" /></td>
                    </tr>
                    <tr>
                        <td><p>Date:</p></td>
                        <td><Inputs setInput={handleInputChange} types='date' keyValue="date" /></td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => Save({ formData })}>Save</button>
            <button onClick={() => NewData()}>New Entry</button>

        </div>


    </>
}

export default Experience;