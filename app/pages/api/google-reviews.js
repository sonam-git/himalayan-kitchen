// /pages/api/google-reviews.js
export default async function handler(req, res) {
  const placeId = "ChIJxVexf-CbhYARLeVUmA9nZn8"; // Updated to your provided Place ID
  const apiKey = process.env.GOOGLE_API_KEY; // Store your API key in .env.local
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log('Google Places API response:', JSON.stringify(data, null, 2)); // Log the full response for debugging
  res.status(200).json(data.result?.reviews || []);
}