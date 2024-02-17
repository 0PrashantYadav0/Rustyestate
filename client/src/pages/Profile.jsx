import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRef } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../config/firebaseConfig";

function Profile() {
  const [file, setFile] = useState(null);
  const [fileErr, setFileErr] = useState(false);
  const [Uploading, setUploading] = useState(0);
  const fileRef = useRef(null);
  const { currentUser } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({});

  
  console.log(Uploading)
  console.log(fileErr)
  console.log(formData)

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploading(Math.round(progress));
      },
      (error) => {
        setFileErr(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, avatar: downloadURL })
        );
      }
    );
  };

  return (
    <div className="mx-auto max-w-lg p-3">
      <h1 className="text-3xl text-center font-semibold my-7"> PROFILE </h1>
      <form className="flex flex-col gap-4">
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          ref={fileRef}
          hidden
          accept="image/"
        />
        <img
          src={formData.avatar || currentUser._doc.avatar}
          alt="profile"
          className="rounded-full h-32 w-32 object-cover cursor-pointer self-center mt-2"
          onClick={() => fileRef.current.click()}
        />
        <p className="text-center text-sm">
          {fileErr ?( <span className="text-red-700"> Error in Image Upload (image must be less than 2 mb)</span>) : Uploading > 0 && Uploading < 100 ? ( <span className="text-green-700">
            {`uploading ${Uploading}%`}
          </span>) : Uploading == 100 ? (<span className="text-green-700">succuessfull uploaded!</span>) : ""}
        </p>
        <input
          type="text"
          placeholder="username"
          className="rounded-lg border-2 px-4 py-2"
          id="username"
        />
        <input
          type="email"
          placeholder="email"
          className="rounded-lg border-2 px-4 py-2"
          id="email"
        />
        <input
          type="password"
          placeholder="password"
          className="rounded-lg border-2 px-4 py-2"
          id="password"
        />
        <button className="uppercase bg-slate-700 p-3 text-white rounded-lg hover:bg-slate-800 disabled:opacity-80">
          update
        </button>
        <div className="flex justify-between">
          <span className="text-red-700 cursor-pointer">Delete Account</span>
          <span className="text-red-700 cursor-pointer">Sign Out</span>
        </div>
      </form>
    </div>
  );
}

export default Profile;
