function Inputs({ setInput, keyValue, types }) {

    return <input key={keyValue} type="text" onChange={(e) => { setInput({ types }, e.target.value) }} />
}
export default Inputs;