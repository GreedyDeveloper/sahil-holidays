const BASE_URL = 'https://paybook.club/paybboksa/holidays'; // Replace with your server's base URL

export const fetchData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/get_packages.php`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const addItem = async (newItem) => {
  try {
    const response = await fetch(`${BASE_URL}/create_package.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    });
    if (!response.ok) {
      throw new Error('Failed to add item');
    }
    return await response.json();
  } catch (error) {
    console.error('Error adding item:', error);
    throw error;
  }
};

export const updateItem = async (updatedItem) => {
  try {
    const response = await fetch(`${BASE_URL}/update_package.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedItem),
    });
    if (!response.ok) {
      throw new Error('Failed to update item');
    }
    return await response.json();
  } catch (error) {
    console.error('Error updating item:', error);
    throw error;
  }
};

export const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('image', file);
  
    try {
      const response = await fetch(`${BASE_URL}/upload_image.php`, {
        method: 'POST',
        body: formData,
      });
  
      const result = await response.json();
      if (result.success) {
        console.log('Image uploaded:', result.filePath);
        return {...result, filePath: `${BASE_URL}/${result.filePath}`}; // Ensure the file path is absolute
      } else {
        console.error('Upload failed:', result.message);
        return result;
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  };