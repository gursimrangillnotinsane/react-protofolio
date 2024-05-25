import Inputs from "./Input";
import { useState } from "react";
import Protofolio from "./Protofolio";
import "../styles/main.css"

function General() {
    const [formData, setFormData] = useState({
        name: "Gursimranjot Singh Gill",
        phoneNumber: "+17059840091",
        gmail: "gillsimranjot91@gmail.com"
    });
    const handerSet = (key, value) => {
        setFormData({
            ...formData,
            [key['types']]: value,
        })
    }

    return <>
        <div className="Protofolio ">
            <div className="generalOut ">
                <h1>{formData.name}</h1>
                <div style={{ display: "flex" }}>
                    <p style={{ marginRight: "40px" }}>{formData.phoneNumber}</p>
                    <p>{formData.gmail}</p>
                </div>
            </div>
        </div>
        <div className="inputDiv">
            <h2>GENERAL</h2>
            <div >
                <table>
                    <tbody>
                        <tr>
                            <td><p>Name:</p></td>
                            <td><Inputs setInput={handerSet} keyValue="name" types="name" /></td>
                        </tr>
                        <tr>
                            <td><p>Phone Number:</p> </td>
                            <td> <Inputs setInput={handerSet} keyValue="phone" types="phoneNumber" /></td>
                        </tr>
                        <tr>
                            <td><p>Gmail:</p></td>
                            <td><Inputs setInput={handerSet} keyValue="gmial" types="gmail" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </>
}

export default General;