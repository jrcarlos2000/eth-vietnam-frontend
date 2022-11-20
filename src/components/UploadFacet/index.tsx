import './styles.css';
import { useState } from 'react';
import axios from 'axios';

const UploadFacet = () => {
    const [title, setTitle] = useState<string>('');
    const [desc, setDesc] = useState<string>('');
    const [source, setSource] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const handleSubmit = async () => {
        const result = await axios.post('https://shark-app-ciezx.ondigitalocean.app/add-facet', {
            name: title,
            description: desc,
            address,
            src: source
            // name, src, address, description
        });
        console.log('result ->>>', JSON.stringify(result));
    }
    return (
        <div className="uploadFacet">
            <h1 className={"title"}>Upload a Facet</h1>
            <div className="uploadContainer">
                <label className={"label"} onChange={(e: any) => setTitle(e.target.value)}>title</label>
                <input className={"textInput titleInput"} placeholder={"title"}  />
                <label className={"descriptionLabel"}>description</label>
                <input className={"textInput descriptionInput"} onChange={(e: any) => setDesc(e.target.value)} placeholder={"description"} />
                <label className={"label addressLabel"}>address</label>
                <input className={"textInput addressInput"} onChange={(e: any) => setAddress(e.target.value)} placeholder={"address"} />
                {/* <label className={"abiLabel"}>upload ABI</label>
                <input className={"abiInput"} placeholder={"Paste ABI code"} /> */}
                <label className={"sourceLabel"} >source code</label>
                <textarea rows={4} cols={50} className={"sourceInput"} placeholder={"Paste source code"} onChange={(e: any) => setSource(e.target.value)}></textarea>
                <button className={"button uploadSubmit"} onClick={handleSubmit}>submit</button>
            </div>
        </div>
    )
}
export default UploadFacet;