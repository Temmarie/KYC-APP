export default function handler(req, res) {
  if (req.method === "POST") {
    try {
      const formData = req.body;
      console.log("Received form data:", formData);
      res.status(200).json({ message: "Form submitted successfully!" });
    } catch (error) {
      console.error("Error processing form:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
