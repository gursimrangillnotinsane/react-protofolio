import "../styles/main.css"

function Protofolio(parms) {
    return <>
        <div className="Protofolio">
            <div className="generalOut">
                <h1>{parms?.name}</h1>
                <div style={{ display: "flex" }}>
                    <p>{parms?.phone}</p>
                    <p>{parms?.gmail}</p>
                </div>
            </div>
            <p>{parms?.typeOfStudy}</p>
            <p>{parms?.school}</p>
            <p>{parms?.date}</p>
            <p>{parms?.jobTitle}</p>
            <p>{parms?.companyName}</p>
            <p>{parms?.Responsibilities}</p>
            <p>{parms?.jobDate}</p>
        </div>
    </>
}
export default Protofolio;
