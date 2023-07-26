import React, { useState } from 'react';
import AWS from 'aws-sdk';

const UploadImage = () => {
  const [img, setImg] = useState(null);

  const imageChangeHandler = (event) => {
    event.preventDefault();

    const file = event.target.files[0];
    setImg(file);
  };

  const imageUploadHandler = async () => {
    console.log('uploading image...');

    const S3_BUCKET = process.env.REACT_APP_BUCKET_NAME;
    const REGION = process.env.REACT_APP_BUCKET_REGION;

    AWS.config.update({
      accessKeyId: process.env.REACT_APP_ACCESS_KEY,
      secretAccessKey: process.env.REACT_APP_SECRET_KEY,
    });

    const s3 = new AWS.S3({
      params: { Bucket: S3_BUCKET },
      region: REGION,
      useAccelerateEndpoint: true,
    });

    const params = {
      Bucket: S3_BUCKET,
      Key: img.name,
      Body: img,
    };

    let upload = s3
      .putObject(params)
      .on('httpUploadProgress', (event) => {
        console.log(
          'Uploading ' + parseInt((event.loaded * 100) / event.total) + '%'
        );
      })
      .promise();

    await upload.then((err, data) => {
      console.log(err);
      alert('File uploaded successfully');
    });
  };

  return (
    <div>
      <h1>Upload Image</h1>
      <input type='file' accept='image/*' onChange={imageChangeHandler} />
      <img alt='preview' src={img} />
      <button onClick={imageUploadHandler}>Submit</button>
    </div>
  );
};

export default UploadImage;
