export default async function handler(req, res) {
    try {
      if (req.method === 'POST') {
        const formData = req.body;
  
        // Your backend logic for handling the form data here, like saving to DB, etc.
        
        // Example of sending a successful response
        res.status(200).json({ message: 'Form submitted successfully' });
      } else {
        res.status(405).json({ message: 'Method Not Allowed' });
      }
    } catch (error) {
      console.error("Error processing form data:", error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
  