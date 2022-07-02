import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './Previews.css';

export default function Previews(props) {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <img
      src={file.preview}
      // style={img}
      // Revoke data uri after image is loaded
      onLoad={() => {
        URL.revokeObjectURL(file.preview);
      }}
    />
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <section className="container">
      <div
        {...getRootProps({ className: 'dropzone' })}
        style={{ marginBottom: 5 }}
      >
        <input {...getInputProps()} />

        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <div>{thumbs}</div>
    </section>
  );
}
