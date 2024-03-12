const FatchData = async () => {
    try {
      // Simulating an API call with a delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      return { data: 'Your API data goes here' };
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // You can handle errors in the component file
    }
  };
  
  export default FatchData;
  