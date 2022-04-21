import React, {useState} from "react";
import {storage} from "../../firebase/firebase";
import classes from './UploadImage.module.scss'
import icon from '../../assets/editIcon.png'


export const UploadImage = () => {
    const allInputs = {imgUrl: ''}
    const [imageAsFile, setImageAsFile] = useState()
    const[imageAsUrl, setImageAsUrl] = useState(allInputs)

    const handleImageAsFile = event => {
        const image = event.target.files[0]
        setImageAsFile(imageFile => (image))
    }

    console.log(storage)

    const handleFireBaseUpload = event =>{
        event.preventDefault()
        //NOTE: to change (not working)
        if(imageAsFile ===''){
            console.error(`Not an image, the image file is a ${typeof imageAsFile}`)
        }
        console.log(storage.ref())
        const ref = storage.ref(`/images/${imageAsFile.name}`)
        const uploadTask = ref.put(imageAsFile)

        console.log(imageAsFile)
    }

    return (
        <div className={classes.imageContainer}>
            <form onSubmit={handleFireBaseUpload}>
                <label htmlFor='file-input'>
                    <img src={icon}/>
                </label>
                <input id='file-input' type='file' onChange={handleImageAsFile}/>
                <button>Upload image</button>
            </form>
        </div>
    )

}