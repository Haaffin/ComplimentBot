import { BskyAgent } from '@atproto/api';
import * as dotenv from 'dotenv';
import * as process from 'process';

import axios from 'axios'

dotenv.config();
const apiUrl = "https://my-fun-api.onrender.com/compliment"

let TextToPost

// Create a Bluesky Agent 
const agent = new BskyAgent({
    service: 'https://bsky.social',
  })


async function post(TextToPost: string) {
    try{
        await agent.login({ identifier: process.env.BLUESKY_USERNAME!, password: process.env.BLUESKY_PASSWORD!})
        await agent.post({
            text: `${TextToPost}`
        });
        console.log(`Just posted: ${TextToPost}`)
    } 
    catch(error){
        console.log(`An Error has occured while attempting to Post: ${Error}`)
    }
}

async function main() {
    try {
        const response = await axios.get(apiUrl);
        post(response.data.data.compliment)
     } catch (error) {
        // Handle the error
        console.log(`An error has occured during API Call: ${error}`)
     }
}

main();
