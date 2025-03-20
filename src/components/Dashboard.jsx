import React, {useEffect, useState} from 'react';

const Dashboard = () => {

  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('http://localhost:8098/mission-metrics/country/list');
        if (!response.ok) {
          const errorData = await response.json(); // Attempt to parse error details
          throw new Error(`HTTP error! status: ${response.status}, message: ${errorData?.message || response.statusText}`);
        }
        const data = await response.json();
        setCountries(data);
      } catch (err) {
        console.error("Error fetching countries:", err);
        setError(err.message); // Set the error message
      } finally {
        setLoading(false);
      }
    };

    // Call the async function and handle the promise (even though it doesn't return anything specific)
    fetchCountries().catch(err => {
      console.error("Error in fetchCountries promise:", err); // Catch any errors from the promise itself
      setError("An unexpected error occurred."); // Set a generic error message
      setLoading(false); // Make sure loading is set to false in case of promise rejection.
    });
  }, []);

  if (loading) {
    return <div>Loading countries...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>; // Display the error message to the user
  }

  return (
      <div>
        <h1>Country List</h1>
        <ul>
          {countries.map((country) => (
              <li key={country.id}> {/* Assuming your Country object has an 'id' */}
                {country.name} {/* Assuming your Country object has a 'name' */}
              </li>
          ))}
        </ul>
      </div>
  );

}

export default Dashboard;
