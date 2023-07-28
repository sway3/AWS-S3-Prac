import React, { useState } from 'react';
import axios from 'axios';

const Main = () => {
  const [file, setFile] = useState(null);

  const selectImageHandler = (event) => {
    event.preventDefault();

    setFile(event.target.files[0]);
  };

  const submitImageHandler = async () => {
    const data = {
      fileName: file.name,
    };

    try {
      axios.withCredentials = true;

      console.log('requesting presignedURL');
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/products/upload`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            // Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );

      console.log(response);

      const presignedURL = response.data.presignedURL;

      uploadToS3(presignedURL, file);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadToS3 = async (presignedURL, imgFile) => {
    console.log('uploading to S3 ...');
    console.log(imgFile);

    try {
      const response = await axios.put(presignedURL, imgFile, {
        headers: {
          'Content-Type': 'image/*',
        },
      });

      console.log('image upload success');
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <input
        type='file'
        accept='image/*'
        name='product_img'
        onChange={selectImageHandler}
      />
      <button onClick={submitImageHandler}>Submit</button>
    </>
  );
};

export default Main;
