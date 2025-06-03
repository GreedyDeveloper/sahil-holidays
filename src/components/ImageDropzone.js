import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Typography } from '@mui/material';

const ImageDropzone = ({ value, onChange }) => {
    const onDrop = useCallback(
        (acceptedFiles) => {
            if (acceptedFiles && acceptedFiles.length > 0) {
                onChange(acceptedFiles[0]);
            }
        },
        [onChange]
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'image/*': [] },
        multiple: false,
    });

    return (
        <Box
            {...getRootProps()}
            sx={{
                border: '2px dashed #999',
                padding: 4,
                textAlign: 'center',
                cursor: 'pointer',
                borderRadius: 2,
                backgroundColor: isDragActive ? '#eee' : '#fafafa',
            }}
        >
            <input {...getInputProps()} />
            {value ? (
                <>
                    <img
                        src={typeof value === 'string' ? value : URL.createObjectURL(value)}
                        alt="preview"
                        style={{ maxWidth: '100%', maxHeight: 200, marginBottom: 8 }}
                    />
                    <Typography variant="body2" color="textSecondary">
                        Drag & drop to replace or click to select image
                    </Typography>
                </>
            ) : (
                <>
                    <Typography variant="h6" color="textPrimary" gutterBottom>
                        Cover Image
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Drag & drop an image here, or click to select file
                    </Typography>
                </>

            )}
        </Box>
    );
};

export default ImageDropzone;