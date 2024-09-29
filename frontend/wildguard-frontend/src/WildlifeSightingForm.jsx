// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const WildlifeSightingForm = () => {
//     const [speciesValue, setSpeciesValue] = useState(''); // State for species name
//     const [dateValue, setDateValue] = useState('');
//     const [latitudeValue, setLatitudeValue] = useState('');
//     const [longitudeValue, setLongitudeValue] = useState('');
//     const [photoFile, setPhotoFile] = useState(null);
//     const navigate = useNavigate();

//     const getCSRFToken = () => {
//       const name = 'csrftoken';
//       const cookieValue = document.cookie.split(';').find(cookie => cookie.trim().startsWith(name + '='));
//       return cookieValue ? cookieValue.split('=')[1] : '';
//     };
    
//   const checkAuthentication = async () => {
//     try {
//         const response = await fetch('http://localhost:8000/api/auth/check/', {
//             method: 'GET',
//             credentials: 'include', // Include cookies for session authentication
//             headers: {
//                 'X-CSRFToken': getCSRFToken(), // Include CSRF token if using session authentication
//             },
//         });

//         if (response.ok) {
//             const data = await response.json();
//             console.log('User is authenticated:', data);
//             // You might want to store user data in state or context
//             // setUser(data.user); // Assuming you have a setUser function from context or state
//         } else {
//             console.log('User is not authenticated');
//             navigate('/login'); // Redirect to login if not authenticated
//         }
//     } catch (error) {
//         console.error('Error checking authentication:', error);
//         navigate('/login'); // Redirect to login on error
//     }
// };


//     // Call this function when your component mounts
//     useEffect(() => {
//         checkAuthentication();
//     }, []);

//     const handleSubmit = async (event) => {
//         event.preventDefault();
        
//         const formData = new FormData();
//         formData.append('species_name', speciesValue);  // Include species name
//         formData.append('date_seen', dateValue);
//         formData.append('latitude', latitudeValue);
//         formData.append('longitude', longitudeValue);
//         if (photoFile) {
//             formData.append('photo', photoFile);
//         }

//         try {
//             const response = await fetch('http://127.0.0.1:8000/api/sightings/add/', {
//                 method: 'POST',
//                 headers: {
//                     // Include your token logic here if needed
//                     // 'Authorization': `Bearer ${token}`,
//                 },
//                 body: formData,
//             });

//             if (!response.ok) {
//                 const errorData = await response.json();
//                 console.error('Error:', errorData);
//                 // Handle validation errors or other problems
//             } else {
//                 const result = await response.json();
//                 // Success: Handle the successful response here
                
//                 // Reset form fields
//                 setSpeciesValue('');
//                 setDateValue('');
//                 setLatitudeValue('');
//                 setLongitudeValue('');
//                 setPhotoFile(null);
                
//                 alert('Sighting submitted successfully!');
//                 navigate('/map-page');
//             }
//         } catch (error) {
//             console.error('Submission failed:', error);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label htmlFor="species_name">Species Name:</label>
//                 <input
//                     type="text"
//                     id="species_name"
//                     value={speciesValue}
//                     onChange={(e) => setSpeciesValue(e.target.value)}
//                     required
//                 />
//             </div>

//             <div>
//                 <label htmlFor="date_seen">Date Seen:</label>
//                 <input
//                     type="date"
//                     id="date_seen"
//                     value={dateValue}
//                     onChange={(e) => setDateValue(e.target.value)}
//                     required
//                 />
//             </div>

//             <div>
//                 <label htmlFor="latitude">Latitude:</label>
//                 <input
//                     type="number"
//                     id="latitude"
//                     value={latitudeValue}
//                     onChange={(e) => setLatitudeValue(e.target.value)}
//                     required
//                 />
//             </div>

//             <div>
//                 <label htmlFor="longitude">Longitude:</label>
//                 <input
//                     type="number"
//                     id="longitude"
//                     value={longitudeValue}
//                     onChange={(e) => setLongitudeValue(e.target.value)}
//                     required
//                 />
//             </div>

//             <div>
//                 <label htmlFor="photo">Photo (Optional):</label>
//                 <input
//                     type="file"
//                     id="photo"
//                     onChange={(e) => setPhotoFile(e.target.files[0])}
//                 />
//             </div>

//             <button type="submit">Submit Sighting</button>
//         </form>
//     );
// };

// export default WildlifeSightingForm;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WildlifeSightingForm = () => {
    const [speciesValue, setSpeciesValue] = useState(''); // State for species name
    const [dateValue, setDateValue] = useState('');
    const [latitudeValue, setLatitudeValue] = useState('');
    const [longitudeValue, setLongitudeValue] = useState('');
    const [photoFile, setPhotoFile] = useState(null);
    const token = '';  // Add logic for obtaining token here if needed
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData();
        formData.append('species_name', speciesValue);  // Include species name
        formData.append('date_seen', dateValue);
        formData.append('latitude', latitudeValue);
        formData.append('longitude', longitudeValue);
        if (photoFile) {
            formData.append('photo', photoFile);
        }

        try {
            const response = await fetch('http://127.0.0.1:8000/api/sightings/add/', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,  // Use the correct token if authentication is required
                },
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error:', errorData);
                // Handle validation errors or other problems
            } else {
                const result = await response.json();
                // Success: Handle the successful response here
                
                // Reset form fields
                setSpeciesValue('');
                setDateValue('');
                setLatitudeValue('');
                setLongitudeValue('');
                setPhotoFile(null);
                
                alert('Sighting submitted successfully!');
                navigate('/map-page');
            }
        } catch (error) {
            console.error('Submission failed:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="species_name">Species Name:</label>
                <input
                    type="text"
                    id="species_name"
                    value={speciesValue}
                    onChange={(e) => setSpeciesValue(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor="date_seen">Date Seen:</label>
                <input
                    type="date"
                    id="date_seen"
                    value={dateValue}
                    onChange={(e) => setDateValue(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor="latitude">Latitude:</label>
                <input
                    type="number"
                    id="latitude"
                    value={latitudeValue}
                    onChange={(e) => setLatitudeValue(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor="longitude">Longitude:</label>
                <input
                    type="number"
                    id="longitude"
                    value={longitudeValue}
                    onChange={(e) => setLongitudeValue(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor="photo">Photo (Optional):</label>
                <input
                    type="file"
                    id="photo"
                    onChange={(e) => setPhotoFile(e.target.files[0])}
                />
            </div>

            <button type="submit">Submit Sighting</button>
        </form>
    );
};

export default WildlifeSightingForm;
