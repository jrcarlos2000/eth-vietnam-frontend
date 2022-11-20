import './styles.css';


const UploadFacet = () => {

    return (
        <div className="uploadFacet">
           <text className={"title"}>Upload a Facet</text>
            <label className={"label"}>title</label>
            <input className={"titleInput"} placeholder={"title"}  />
            <label className={"descriptionLabel"}>description</label>
            <input className={"descriptionInput"} placeholder={"description"} />
            <label className={"abiLabel"}>upload ABI</label>
            <input className={"abiInput"} placeholder={"Paste ABI code"} />
            <label className={"sourceLabel"}>source code</label>
            <input className={"sourceInput"} placeholder={"Paste source code"} />
       
        </div>
    )
}
export default UploadFacet;