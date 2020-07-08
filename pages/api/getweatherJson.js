
import fetch from 'node-fetch'
export async function getSortedPostsData() {
    // Instead of the file system,
    // fetch post data from an external API endpoint
    const res = await fetch('http://localhost:3000/api/weatherdata')
    const data = await res.json()
    return data;   
}