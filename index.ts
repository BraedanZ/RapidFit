import * as functions from 'firebase-functions';

import { dialogflow, SimpleResponse, BasicCard, Button, Image } from 'actions-on-google';
const app = dialogflow({ debug: true });

app.intent('Today I did 50 push-ups', async (conv) => {
    conv.close(new SimpleResponse({
        text: 'Congratulations, you did more push-ups this time than in your past session',
        speech: 'Congratulations, you did more push-ups this time than two days ago'
    }))
    conv.close(new BasicCard({
        title: 'Check your progress',
        image: new Image({
            url: 'https://lh3.googleusercontent.com/L8FkCywLrbH--Aw7EvJQLMbTjK6sAA_yK7MU6txmAwhS7pHuZMeF0aYUrhk6LzEXyPNM2Kcdq2lLzmOq4HUGo2eLTqvcQD_FR86al_k7roKZaAqZFXY=w1280',
            alt: 'Delta hacks proj. logo'
        }),
        buttons: new Button({
            title: 'Track',
            url: 'https://sites.google.com/view/imagefordelta/p%C3%A1gina-inicial?authuser=0'
        })
    }));
});

// Export the Cloud Functions
export const fulfillment = functions.https.onRequest(app);

//heroku bit is WIP
