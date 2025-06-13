import React from 'react';
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
import { addItem, uploadImage } from 'services/Api';


const validationSchema = Yup.object({
  packageName: Yup.string().required('Package Name is required'),
  destination: Yup.string().required('Destination is required'),
  image: Yup.mixed().required('Cover Image is required'),
  validity: Yup.object({
    startDate: Yup.date().nullable().required('Start Date is required'),
    endDate: Yup.date()
      .nullable()
      .required('End Date is required')
      .min(Yup.ref('startDate'), 'End Date can\'t be before Start Date'),
  }),
  duration: Yup.object({
    days: Yup.number()
      .typeError('Days must be a number')
      .integer('Days must be an integer')
      .min(1, 'Days must be at least 1')
      .required('Duration days required'),
    nights: Yup.number()
      .typeError('Nights must be a number')
      .integer('Nights must be an integer')
      .min(0, 'Nights cannot be negative')
      .required('Duration nights required'),
  }),
  price: Yup.number()
    .typeError('Price must be a number')
    .min(0, 'Price must be non-negative')
    .required('Price is required'),
  cities: Yup.array()
    .of(Yup.string().required('City cannot be empty'))
    .min(1, 'At least one city is required')
    .required('Starting From (Cities) is required'),
  sights: Yup.array()
    .of(Yup.string().required('Sightseeing point cannot be empty'))
    .min(1, 'At least one sightseeing point is required')
    .required('Sightseeing is required'),
  highlights: Yup.array()
    .of(
      Yup.object({
        text: Yup.string().required('Highlight text is required'),
        iconType: Yup.string().required(),
      })
    )
    .min(1, 'At least one highlight is required'),
});

const iconOptions = [
  { label: 'Meals', value: 'meals', icon: <RestaurantIcon /> },
  { label: 'Sightseeing', value: 'sightseeing', icon: <CameraAltIcon /> },
  { label: 'Tour', value: 'tour', icon: <TourIcon /> },
  { label: 'Flight', value: 'flight', icon: <FlightIcon /> },
  { label: 'Hotel', value: 'hotel', icon: <HotelIcon /> },
  { label: 'Transfer', value: 'transfer', icon: <DirectionsCarIcon /> },
];

const getIconComponent = (type) => {
  switch (type) {
    case 'meals': return <RestaurantIcon />;
    case 'sightseeing': return <CameraAltIcon />;
    case 'tour': return <TourIcon />;
    case 'flight': return <FlightIcon />;
    case 'hotel': return <HotelIcon />;
    case 'transfer': return <DirectionsCarIcon />;
    default: return null;
  }
};

const initialValues = {
  packageName: '',
  description: '',
  destination: '',
  duration: { days: '', nights: '' },
  validity: { startDate: null, endDate: null },
  image: null,
  price: '',
  cities: [],
  sights: [],
  highlights: [],
};

const TravelPackageForm = () => {
  const handleSubmit = async (values) => {
    try {
      const uploadResult = await uploadImage(values.image)
      if (!uploadResult.success) {
        throw new Error(uploadResult.message || 'Image upload failed');
      }

      const packageData = {
        id: Date.now(),
        ...values,
        image: uploadResult.filePath
      }

      await addItem(packageData)

      alert("Upload Success")

    } catch (e) {
      console.error("Error uploading image:", e);
      alert(e);
    }
  };

  const handleNumberInput = (e, setFieldValue, name) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setFieldValue(name, value);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
        {({ values, errors, touched, handleBlur, handleChange, setFieldValue, submitCount }) => (
          <Form>
            <Box maxWidth={800} mx="auto" p={4}>
              <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
                <Typography variant="h5" mb={3}>Travel Package Details</Typography>

                <ImageDropzone
                  value={values.image}
                  onChange={(file) => setFieldValue('image', file)}
                />

                <Box display="flex" flexDirection="column" gap={3} mt={3}>
                  <Box display="flex" gap={2}>
                    <Box maxWidth={300}>
                      <TextField
                        name="destination"
                        label="Destination"
                        value={values.destination}
                        inputProps={{ maxLength: 50 }}
                        onBlur={handleBlur}
                        error={Boolean(touched.destination && errors.destination)}
                        helperText={touched.destination && errors.destination}
                        onChange={handleChange}
                        fullWidth
                      />
                    </Box>
                    <Box flex={1}>
                      <TextField
                        name="packageName"
                        label="Package Name"
                        value={values.packageName}
                        inputProps={{ maxLength: 100 }}
                        onBlur={handleBlur}
                        error={Boolean(touched.packageName && errors.packageName)}
                        helperText={touched.packageName && errors.packageName}
                        onChange={handleChange}
                        fullWidth
                      />
                    </Box>
                  </Box>

                  <TextField
                    name="description"
                    label="Description"
                    multiline
                    rows={2}
                    value={values.description}
                    inputProps={{ maxLength: 500 }}
                    onChange={handleChange}
                    fullWidth
                  />

                  <Box display="flex" alignItems="center" gap={2}>
                    <Box maxWidth={100}>
                      <Typography variant="h6">Trip Duration</Typography>
                    </Box>
                    <Box flex={1}>
                      <TextField
                        name="duration.days"
                        label="Days"
                        value={values.duration.days}
                        inputProps={{ maxLength: 3 }}
                        onBlur={handleBlur}
                        error={Boolean(
                          touched.duration?.days && errors.duration?.days
                        )}
                        helperText={touched.duration?.days && errors.duration?.days}
                        onChange={(e) => handleNumberInput(e, setFieldValue, 'duration.days')}
                        fullWidth
                      />
                    </Box>
                    <Box flex={1}>
                      <TextField
                        name="duration.nights"
                        label="Nights"
                        value={values.duration.nights}
                        inputProps={{ maxLength: 3 }}
                        onBlur={handleBlur}
                        error={Boolean(
                          touched.duration?.nights && errors.duration?.nights
                        )}
                        helperText={touched.duration?.nights && errors.duration?.nights}
                        onChange={(e) => handleNumberInput(e, setFieldValue, 'duration.nights')}
                        fullWidth
                      />
                    </Box>
                  </Box>


                  <Box display="flex" alignItems="center" gap={2}>
                    <Box maxWidth={100}>
                      <Typography variant="h6">Trip Validity</Typography>
                    </Box>
                    <Box flex={1}>
                      <DatePicker
                        label="Start Date"
                        value={values.validity.startDate}
                        format="DD/MM/YYYY"
                        onChange={(value) => setFieldValue('validity.startDate', value)}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Box>
                    <Box flex={1}>
                      <DatePicker
                        label="End Date"
                        value={values.validity.endDate}
                        format="DD/MM/YYYY"
                        onChange={(value) => setFieldValue('validity.endDate', value)}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Box>
                  </Box>

                  <TextField
                    name="price"
                    label="Price (per couple)"
                    value={values.price}
                    onBlur={handleBlur}
                    error={Boolean(touched.price && errors.price)}
                    helperText={touched.price && errors.price}
                    onChange={(e) => {
                      const value = e.target.value;
                      // Allow only digits and limit max value
                      if (/^\d*$/.test(value) && Number(value) <= 9999999) {
                        setFieldValue('price', value);
                      }
                    }}
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">₹</InputAdornment>
                      ),
                    }}
                  />

                  <Box display="flex" alignItems="center" gap={2}>
                    <Box flex={1}>
                      <PlannerAutocomplete
                        values={values.cities}
                        setFieldValue={setFieldValue}
                        name="cities"
                        label='Starting From (Cities)'
                        placeholder='Add cities'
                      />
                    </Box>

                    <Box flex={1}>
                      <PlannerAutocomplete
                        values={values.sights}
                        setFieldValue={setFieldValue}
                        name="sights"
                        label='Sightseeing Points'
                        placeholder='Add places'
                      />
                    </Box>
                  </Box>

                  <Typography variant="h6" mt={2}>Highlights</Typography>
                  <FieldArray name="highlights">
                    {({ push, remove }) => (
                      <Box display="flex" flexDirection="column" gap={2}>
                        {values.highlights.map((highlight, index) => (
                          <Box key={index} display="flex" alignItems="center" gap={2}>
                            <FormControl sx={{ minWidth: 120 }}>
                              <InputLabel>Icon</InputLabel>
                              <Select
                                label="Icon"
                                value={highlight.iconType}
                                onChange={(e) =>
                                  setFieldValue(`highlights[${index}].iconType`, e.target.value)
                                }
                              >
                                {iconOptions.map((option) => (
                                  <MenuItem key={option.value} value={option.value}>
                                    <Box display="flex" alignItems="center" gap={1}>
                                      {option.label}
                                    </Box>
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                            <TextField
                              name={`highlights[${index}].text`}
                              value={highlight.text}
                              onChange={handleChange}
                              placeholder="Highlight text"
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    {getIconComponent(highlight.iconType)}
                                  </InputAdornment>
                                )
                              }}
                              fullWidth
                            />
                            <IconButton onClick={() => remove(index)}>
                              <CloseIcon sx={{ color: red[500] }} />
                            </IconButton>
                          </Box>
                        ))}
                        <Button
                          startIcon={<AddIcon />}
                          onClick={() => push({ iconType: 'tour', text: '' })}
                        >
                          Add Highlight
                        </Button>
                      </Box>
                    )}
                  </FieldArray>
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
                  Submit Package
                </Button>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </LocalizationProvider>
  );
};

export default TravelPackageForm;
