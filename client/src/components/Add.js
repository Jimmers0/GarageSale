import React, { useState, useEffect } from 'react'
import Autocomplete from 'react-google-autocomplete'
import {Button, Form} from 'semantic-ui-react'
import '../styles/post.css'
import Navbar from './Navbar'
import {createPost} from '../actions/posting.actions'
import firebase from "firebase"
import FileUploader from "react-firebase-file-uploader"
import LoadingOverlay from 'react-loading-overlay'
import { checkLogin } from '../actions/login.actions'
import { useSelector } from 'react-redux'
const config = {
    apiKey: "AIzaSyAJDhsNvb6SRPqpfCzu6MEY5vvG994KXBI",
    authDomain: "garagesale-1566844332293.firebaseapp.com",
    databaseURL: "https://garagesale-1566844332293.firebaseio.com",
    storageBucket: "garagesale-1566844332293.appspot.com"
  }
firebase.initializeApp(config)

export default props => {
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')
    const [address, setAddress] = useState('')
    const [date, setDate] = useState('')
    const [name, setName] = useState('')
    const [results, setResults] = useState('')
    const [button, setButton] = useState(false)
    const [isUploading, setIsUploading] = useState(false)
    const [progress, setProgress] = useState('')
    const [images, setImages] = useState([])
    const [fileName, setFileName] = useState('')

    const loginValid = useSelector(appState => appState.authRedirect)


    useEffect(() => {
        checkLogin()
    }, [])
    function addPost() {
        createPost(name, city, state, zip, address, date, images)
        setResults('Your garage sale has been successfully added to our system!')
        setCity('')
        setState('')
        setZip('')
        setAddress('')
        setDate('')
        setName('')
        setButton(true)
        setImages([])
        console.log(images)
    }
    function handleUploadStart(filename) {
        setIsUploading(true)
        setProgress(0)
    }
    function handleProgress(progress) {
        setProgress(progress)
    }
    function handleUploadError(error) {
        setIsUploading(false)
        console.log(error)
    }
    function handleUploadSuccess(filename,e) {
        setFileName('')
        setProgress(100)
        setIsUploading(false)
        firebase
          .storage()
          .ref("images")
          .child(filename)
          .getDownloadURL()
          .then(url => {
              setImages([...images, {url: url, price: 0, condition: "", name: ""}])
            })
    }

    return loginValid ?
        <LoadingOverlay
  active={isUploading}
  spinner
  text='Uploading your image...'
  >
        <div id="postWrap">
            <Form id="postForm">
            <h1>Add a Garage Sale</h1>
            <p>{results}</p>
            <Autocomplete
    style={{width: '90%'}}
    onPlaceSelected={(place) => {
      console.log(place)
      setCity(place.address_components[2].long_name)
      setState(place.address_components[4].long_name)
      setZip(place.address_components[6].long_name)
      setAddress(`${place.address_components[0].long_name} ${place.address_components[1].long_name}`)
    }}
    types={['address']}
    componentRestrictions={{country: "us"}}
/>
<input type="date" onChange={e => setDate(e.target.value)}/>
<input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name of Garage Sale"/>
<input type="text" value={address} placeholder="Address" onChange={e => setAddress(e.target.value)}></input>
<input type="text" value={city} placeholder="City" onChange={e => setCity(e.target.value)}></input>
<input type="text" value={state} placeholder="State" onChange={e => setState(e.target.value)}></input>
<input type="text" value={zip} placeholder="Zip" onChange={e => setZip(e.target.value)}></input>
<FileUploader
            accept="image/*"
            name="garagesaleimage"
            randomizeFilename
            storageRef={firebase.storage().ref("images")}
            onUploadStart={handleUploadStart}
            onUploadError={handleUploadError}
            onUploadSuccess={handleUploadSuccess}
            onProgress={handleProgress}
            value={fileName}
/>
<div id="images">
    {images.map((item, i) => {
        return(
            <div id="singleImage">
            <img src={item.url}></img>
            <label htmlFor={"image-" + i}>Name:</label>
            <input id={"image-" + i} type="text" onChange={e => item.name = e.target.value}/>
            <label htmlFor={"image-" + i}>Condition:</label>
            <input id={"image-" + i} type="text" onChange={e => item.condition = e.target.value}/>
            <label htmlFor={"image-" + i}>Price:</label>
            <input id={"image-" + i} type="text" onChange={e => item.price = e.target.value}/>
            </div>
        )
    })}
</div>
<Button primary disabled={button} onClick={addPost}>Submit</Button>
</Form>

        </div>
        </LoadingOverlay>
    : <div className="fuckOff"><p>Please login to add a Garage Sale</p></div>
}