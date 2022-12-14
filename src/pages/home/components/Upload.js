import React from 'react';
import { useState, useEffect, useRef } from 'react';
import imgProfile from '../assets/imgProfile.png';

//componente lógico para la previsualización de la imágen

export const Upload = () => {
    const [preview, setPreview] = useState();
    const [photoProfile, setphotoProfile] = useState("");
    const fileInputRef = useRef();

    useEffect(() => {
        if (photoProfile) {
            const reader = new FileReader();
            reader.onloadend = () => {
            setPreview(reader.result);
        };
        reader.readAsDataURL(photoProfile);
        } else {
            setPreview(null);
        }
    }, [photoProfile]);

  return (
    
    <div>
        {preview ? (
            <img
                className="imgProfile"
                src={preview}
                style={{ objectFit: "cover" }}
                onClick={() => {setphotoProfile(null)}}
                alt='default'
              />
        ) : (
            <button
                className="btnUpload"
                onClick={(event) => {
                  event.preventDefault();
                  fileInputRef.current.click();
                }}
              >
                <img src={imgProfile} alt="img" />
            </button>
        )}
            
            <input
                style={{ display: "none" }}
                ref={fileInputRef}
                type="file"
                onChange={(event) => {
                    const file = event.target.files[0];
                    if (file && file.type.substring(0, 5) === "image") {
                        setphotoProfile(file);
                    } else {
                        setphotoProfile(null);
                    }
                }}
            />
    </div>

  )
}
