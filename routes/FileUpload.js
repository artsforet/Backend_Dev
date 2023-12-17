import { useEffect, useState } from 'react';
import axios from "axios";

function FileUpload() {
  const [file, changeFile] = useState();
  const [fileName, changeFileName] = useState("");

  return (
    <div className="App">
      <input type="file" onChange={ (e)=>{
        changeFile(e.target.files[0]);
        changeFileName(e.target.files[0].name);
      } } />
      <button onClick={ ()=>{

        const formData = new FormData();

        formData.append("file", file);
        formData.append("fileName", fileName);
        try {
          axios.post("http://localhost:3001/fileUpload", formData).then(
            (response)=>{
              console.log(response);
            }
          )

        } catch (exception) {
          console.log(exception);
        }

      } }>업로드!!</button>
    </div>
  );

}
export default FileUpload