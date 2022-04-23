import React, {useState, useEffect} from "react";
import {storage} from "../../firebase/firebase";
import classes from './UploadImage.module.scss'
import icon from '../../assets/editIcon.png'

export const UploadImage = () => {
    const IMAGE_FOLDER_NAME = localStorage.getItem("email")
    const [downloadImage, setDownloadImage] = useState()

    // GET PROFILE PICTURE SAVED IN FIREBASE:
    useEffect(()=>{
        const presentImagePicture = storage.ref(`/${IMAGE_FOLDER_NAME}/`).listAll().then(res => {
            const picture = res.items.map(item => {
                const value = item.getDownloadURL().then(res => {
                    setDownloadImage(res)
                })
            })
        })
    },[])

    const [imageAsFile, setImageAsFile] = useState()
    const [isLoading, setIsLoading] = useState(false)

    // GET IMAGE FROM INPUT
    const handleImageAsFile = event => {
        const image = event.target.files[0]
        setImageAsFile(imageFile => (image))
    }

    //UPDATE PICTURE ON BUTTON CLICK
    const handleFireBaseUpload = event =>{
        event.preventDefault()

        if(imageAsFile ===''){
            console.error(`Not an image, the image file is a ${typeof imageAsFile}`)
        }
        const refrence = storage.ref(`/${IMAGE_FOLDER_NAME}/`)
        const ref = storage.ref(`/${IMAGE_FOLDER_NAME}/${imageAsFile.name}`)


        // UPLOAD IMAGE TO STORAGE
        const uploadTask = ref.put(imageAsFile)

        // DOWNLOAD IMAGE FROM STORAGE
        const downloadTask = ref.getDownloadURL()
            .then(result => {
                console.log(result)
                setDownloadImage(result)
                setIsLoading(true)

                // DELETE ALL PREVIOUS IMAGES IN  FIREBASE STORAGE
                refrence.listAll().then(res =>{
                    const promises = res.items.map(item => {
                        return item.delete()
                    });
                    Promise.all(promises)
                })
            })

    }


    return (
        <div className={classes.imageContainer} style={{backgroundImage: `url(${downloadImage})`}}>
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