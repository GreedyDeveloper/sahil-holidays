import React, { useState } from 'react';
import { Formik, Form, FieldArray } from 'formik';
import * as Yup from 'yup';
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  IconButton,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  InputAdornment,
} from '@mui/material';
import {Visibility, VisibilityOff} from '@mui/icons-material';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

import { red } from '@mui/material/colors';

import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import TourIcon from '@mui/icons-material/Tour';
import FlightIcon from '@mui/icons-material/Flight';
import HotelIcon from '@mui/icons-material/Hotel';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PlannerAutocomplete from 'components/PlannerAutocomplete';
import ImageDropzone from 'components/ImageDropzone';
import { addItem, addReview, uploadImage } from 'services/Api';


const validationSchema = Yup.object({
  packageName: Yup.string().required('Package Name is required'),
  image: Yup.mixed().required('Customer Review Image is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .max(20, 'Password cannot exceed 20 characters')
    .required('Password is required'),
  description: Yup.string()
    .max(500, 'Description cannot exceed 500 characters')
    .required('Description is required'),
});

const initialValues = {
  packageName: '',
  description: '',
  image: null,
  password: '',
};

const CustomerReviewForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (values) => {
    try {
      const uploadResult = await uploadImage(values.image, values.password);
      if (!uploadResult.success) {
        throw new Error(uploadResult.message || 'Image upload failed');
      }

      const reviewData = {
        id: Date.now(),
        ...values,
        image: uploadResult.filePath
      }

      await addReview(reviewData)

      alert("Upload Success")

    } catch (e) {
      console.error("Error uploading image:", e);
      alert(e);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
        {({ values, errors, touched, handleBlur, handleChange, setFieldValue, submitCount }) => (
          <Form>
            <Box maxWidth={800} mx="auto" p={4}>
              <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
                <Typography variant="h5" mb={3}>Customer Review Details</Typography>

                <ImageDropzone
                  value={values.image}
                  label='Customer Review Image'
                  onChange={(file) => setFieldValue('image', file)}
                />

                <Box display="flex" flexDirection="column" gap={3} mt={3}>
                  <Box display="flex" gap={2}>
                    <TextField
                      name="packageName"
                      label="Package Name"
                      placeholder='Enter Package Name with duration'
                      value={values.packageName}
                      inputProps={{ maxLength: 100 }}
                      onBlur={handleBlur}
                      error={Boolean(touched.packageName && errors.packageName)}
                      helperText={touched.packageName && errors.packageName}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Box>

                  <TextField
                    name="description"
                    label="Description"
                    multiline
                    rows={2}
                    value={values.description}
                    inputProps={{ maxLength: 500 }}
                    onBlur={handleBlur}
                    error={Boolean(touched.description && errors.description)}
                    helperText={touched.description && errors.description}
                    onChange={handleChange}
                    fullWidth
                  />

                  <TextField
                    name="password"
                    label="Password"
                    placeholder='Enter Password to submit review'
                    type={showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    inputProps={{ maxLength: 20 }}
                    error={Boolean(touched.password && errors.password)}
                    helperText={touched.password && errors.password}
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword((show) => !show)}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
              </Paper>

              {/* Show all errors above submit button, only if user has tried submitting at least once */}
              {submitCount > 0 && Object.keys(errors).length > 0 && (
                <Box mb={2} p={2} bgcolor="#fdecea" color="#b71c1c" borderRadius={1}>
                  <Typography variant="body1" fontWeight="bold" mb={1}>
                    Please fix the following errors:
                  </Typography>
                  <ul style={{ margin: 0, paddingLeft: 20 }}>
                    {Object.entries(errors).map(([key, value]) => {
                      if (typeof value === 'string') {
                        return <li key={key}>{value}</li>;
                      } else if (Array.isArray(value)) {
                        // value is an array
                        return value.map((v, i) => {
                          if (typeof v === 'string') {
                            return <li key={`${key}-${i}`}>{v}</li>;
                          } else if (typeof v === 'object' && v !== null) {
                            // maybe nested object error messages
                            return Object.entries(v).map(([subKey, subValue]) => (
                              <li key={`${key}.${subKey}-${i}`}>{subValue}</li>
                            ));
                          }
                          return null;
                        });
                      } else if (typeof value === 'object') {
                        return Object.entries(value).map(([subKey, subValue]) => (
                          <li key={`${key}.${subKey}`}>{subValue}</li>
                        ));
                      }
                      return null;
                    })}
                  </ul>
                </Box>
              )}

              <Box mt={4}>
                <Button type="submit" variant="contained" color="primary" size="large">
                  Submit Review
                </Button>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </LocalizationProvider>
  );
};

export default CustomerReviewForm;
