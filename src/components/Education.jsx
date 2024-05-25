import Inputs from "./Input";
import { useState } from "react";
import Protofolio from "./Protofolio"
import "../styles/main.css"
import { v4 as uuid } from "uuid"
function Education() {
    // Initializing with an empty array
    var [items, setItems] = useState([]);

    function Save({ formData }) {
        setItems(items => [
            ...items,
            [formData.typeEducation, formData.school, formData.dateStudy]
        ],
            setNewFields([...newFields, { id: newFields.length }]))
        const realtime = document.getElementById("newData")
        realtime.style.display = "none"
    }

    function DeleteItem({ index }) {
        const newArray = [...items.slice(0, index), ...items.slice(index + 1)];
        const newArrayButton = [...newFields.slice(0, index), ...newFields.slice(index + 1)];
        setItems(newArray);
        setNewFields(newArrayButton)
    }

    const [formData, setFormData] = useState({
        school: "school",
        typeEducation: "Type of education",
        dateStudy: "date"
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
        inputs[3].value = items[index][0]
        inputs[4].value = items[index][1]
        inputs[5].value = items[index][2]

        DeleteItem({ index })
        setFormData({
            ...formData,
            school: items[index][0],
            typeEducation: items[index][1],
            dateStudy: items[index][2],

        })

    }
    const NewData = () => {
        const realtime = document.getElementById("newData")
        realtime.style.display = "flex"
    }
    return <>
        {/* <Protofolio school={formData.school} typeOfStudy={formData.typeEducation} date={formData.dateStudy} />
        <div className="inputDiv"> */}
        <div className="Protofolio education">
            <h2>Education</h2>
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
            <div id="newData" className="innerEdu">
                <p>{formData.typeEducation}</p>
                <p>{formData.school}</p>
                <p>{formData.dateStudy}</p>

            </div>
        </div>
        <div className="inputDiv">
            <h2>EDUCATION</h2>
            <table>
                <tbody>
                    <tr>
                        <td><p>Type of Education:</p></td>
                        <td><Inputs setInput={handleInputChange} types='typeEducation' keyValue="school" /></td>
                    </tr>
                    <tr>
                        <td> <p>School Name:</p></td>
                        <td><Inputs setInput={handleInputChange} types='school' keyValue="education" /></td>
                    </tr>
                    <tr>
                        <td><p>Date:</p></td>
                        <td><Inputs setInput={handleInputChange} types='dateStudy' keyValue="dateSt" /></td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => Save({ formData })}>Save</button>
            <button onClick={() => NewData()}>New Entry</button>

        </div>
    </>
}

export default Education;