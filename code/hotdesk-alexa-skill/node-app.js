/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');

const APP_NAME = "hot desk";
const messages = {
  NOTIFY_MISSING_PERMISSIONS: 'Please enable profile permissions in the Amazon Alexa app.',
  ERROR: 'Uh Oh. Looks like something went wrong.'
};

const FULL_NAME_PERMISSION = "alexa::profile:name:read";
const EMAIL_PERMISSION = "alexa::profile:email:read";
const MOBILE_PERMISSION = "alexa::profile:mobile_number:read";
const EMAIL = "paul.lewis@devoteam.com";

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Welcome to hotdesk app';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .withSimpleCard(APP_NAME, speakOutput)
            .getResponse();
    }
};

const BookDeskIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'BookHotDeskIntent';
    },
async handle(handlerInput) {
    const { serviceClientFactory, responseBuilder } = handlerInput;
    try {
      const upsServiceClient = serviceClientFactory.getUpsServiceClient();
      const profileEmail = EMAIL;
      if (!profileEmail) {
        const noEmailResponse = `It looks like you don't have an email set. You can set your email from the companion app.`
        return responseBuilder
                      .speak(noEmailResponse)
                      .withSimpleCard(APP_NAME, noEmailResponse)
                      .withShouldEndSession(false)
                      .getResponse();
      }
      let speechResponse;
      //prepare json body for external api calls
      	const postData = JSON.stringify({
    	  'userId': profileEmail,
    	  'request': handlerInput.requestEnvelope.request
	});
      
      //add code to external api to get booking request-response
       await callExternalAPI('https://dvt-exp-hotdesk-alexa-v1-sandbox.uk-e1.cloudhub.io/alexa',postData,'POST')
      .then((response) => {
        const data = JSON.parse(response);
        speechResponse = `${data.response.outputSpeech.text}`;
      })
      .catch((err) => {
        console.log(`ERROR: ${err.message}`);
        // set an optional error message here
        // outputSpeech = err.message;
      });
      
      return responseBuilder
                      .speak(speechResponse)
                      .withSimpleCard(APP_NAME, speechResponse)
                      .withShouldEndSession(false)
                      .getResponse();
    } catch (error) {
      console.log(JSON.stringify(error));
      if (error.statusCode === 403) {
        return responseBuilder
        .speak(messages.NOTIFY_MISSING_PERMISSIONS)
        .withAskForPermissionsConsentCard([EMAIL_PERMISSION])
        .getResponse();
      }
      console.log(JSON.stringify(error));
      const response = responseBuilder.speak(messages.ERROR).getResponse();
      return response;
    }
  }
};

const CheckBookingStatusIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CheckBookingStatusIntent';
    },
  async handle(handlerInput) {
        const { serviceClientFactory, responseBuilder } = handlerInput;
    try {
      const upsServiceClient = serviceClientFactory.getUpsServiceClient();
      const profileEmail = EMAIL;
      if (!profileEmail) {
        const noEmailResponse = `It looks like you don't have an email set. You can set your email from the companion app.`
        return responseBuilder
                      .speak(noEmailResponse)
                      .withSimpleCard(APP_NAME, noEmailResponse)
                      .withShouldEndSession(false)
                      .getResponse();
      }
      let speechResponse;
      //prepare json body for external api calls
      	const postData = JSON.stringify({
    	  'userId': profileEmail,
    	  'request': handlerInput.requestEnvelope.request
	});
      
      //add code to external api to get booking request-response
       await callExternalAPI('https://dvt-exp-hotdesk-alexa-v1-sandbox.uk-e1.cloudhub.io/alexa',postData,'POST')
      .then((response) => {
        const data = JSON.parse(response);
        speechResponse = `${data.response.outputSpeech.text}`;
      })
      .catch((err) => {
        console.log(`ERROR: ${err.message}`);
        // set an optional error message here
        // outputSpeech = err.message;
      });
      
      return responseBuilder
                      .speak(speechResponse)
                      .withSimpleCard(APP_NAME, speechResponse)
                      .withShouldEndSession(false)
                      .getResponse();
    } catch (error) {
      console.log(JSON.stringify(error));
      if (error.statusCode === 403) {
        return responseBuilder
        .speak(messages.NOTIFY_MISSING_PERMISSIONS)
        .withAskForPermissionsConsentCard([EMAIL_PERMISSION])
        .getResponse();
      }
      console.log(JSON.stringify(error));
      const response = responseBuilder.speak(messages.ERROR).getResponse();
      return response;
    }
 }
};

const CancelBookingIntent = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CancelBookingIntent';
    },
  async handle(handlerInput) {
        const { serviceClientFactory, responseBuilder } = handlerInput;
    try {
      const upsServiceClient = serviceClientFactory.getUpsServiceClient();
      const profileEmail = EMAIL;
      if (!profileEmail) {
        const noEmailResponse = `It looks like you don't have an email set. You can set your email from the companion app.`
        return responseBuilder
                      .speak(noEmailResponse)
                      .withSimpleCard(APP_NAME, noEmailResponse)
                      .getResponse();
      }
      let speechResponse;
      //prepare json body for external api calls
      	const postData = JSON.stringify({
    	  'userId': profileEmail,
    	  'request': handlerInput.requestEnvelope.request
	});
      
      //add code to external api to get booking request-response
       await callExternalAPI('https://dvt-exp-hotdesk-alexa-v1-sandbox.uk-e1.cloudhub.io/alexa',postData,'POST')
      .then((response) => {
        const data = JSON.parse(response);
        speechResponse = `${data.response.outputSpeech.text}`;
      })
      .catch((err) => {
        console.log(`ERROR: ${err.message}`);
        // set an optional error message here
        // outputSpeech = err.message;
      });
      
      return responseBuilder
                      .speak(speechResponse)
                      .withSimpleCard(APP_NAME, speechResponse)
                      .getResponse();
    } catch (error) {
      console.log(JSON.stringify(error));
      if (error.statusCode === 403) {
        return responseBuilder
        .speak(messages.NOTIFY_MISSING_PERMISSIONS)
        .withAskForPermissionsConsentCard([EMAIL_PERMISSION])
        .getResponse();
      }
      console.log(JSON.stringify(error));
      const response = responseBuilder.speak(messages.ERROR).getResponse();
      return response;
    }
 }
};

const GetTeamBookginsIntent = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'GetTeamBookginsIntent';
    },
  async handle(handlerInput) {
        const { serviceClientFactory, responseBuilder } = handlerInput;
    try {
      const upsServiceClient = serviceClientFactory.getUpsServiceClient();
      const profileEmail = EMAIL;
      if (!profileEmail) {
        const noEmailResponse = `It looks like you don't have an email set. You can set your email from the companion app.`
        return responseBuilder
                      .speak(noEmailResponse)
                      .withSimpleCard(APP_NAME, noEmailResponse)
                      .getResponse();
      }
      let speechResponse;
      //prepare json body for external api calls
      	const postData = JSON.stringify({
    	  'userId': profileEmail,
    	  'request': handlerInput.requestEnvelope.request
	});
      
      //add code to external api to get booking request-response
       await callExternalAPI('https://dvt-exp-hotdesk-alexa-v1-sandbox.uk-e1.cloudhub.io/alexa',postData,'POST')
      .then((response) => {
        const data = JSON.parse(response);
        speechResponse = `${data.response.outputSpeech.text}`;
      })
      .catch((err) => {
        console.log(`ERROR: ${err.message}`);
        // set an optional error message here
        // outputSpeech = err.message;
      });
      
      return responseBuilder
                      .speak(speechResponse)
                      .withSimpleCard(APP_NAME, speechResponse)
                      .getResponse();
    } catch (error) {
      console.log(JSON.stringify(error));
      if (error.statusCode === 403) {
        return responseBuilder
        .speak(messages.NOTIFY_MISSING_PERMISSIONS)
        .withAskForPermissionsConsentCard([EMAIL_PERMISSION])
        .getResponse();
      }
      console.log(JSON.stringify(error));
      const response = responseBuilder.speak(messages.ERROR).getResponse();
      return response;
    }
 }
};

const callExternalAPI = (url,postData,httpmethod) => new Promise((resolve, reject) => {

  const client = url.startsWith('https') ? require('https') : require('http');

	const options = {
	  hostname: 'dvt-exp-hotdesk-alexa-v1-sandbox.uk-e1.cloudhub.io',
	  port: 443,
	  path: '/alexa',
	  method: httpmethod,
	  headers: {
		'Content-Type': 'application/json',
		'Content-Length': Buffer.byteLength(postData)
	  }
	};
  const request = client.request(options, (response) => {
    if (response.statusCode < 200 || response.statusCode > 299) {
      reject(new Error(`Failed with status code: ${response.statusCode}`));
    }
    const body = [];
    response.on('data', (chunk) => body.push(chunk));
    response.on('end', () => resolve(body.join('')));
  });
  request.on('error', (err) => reject(err));
  request.write(postData);
  request.end();
});

const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Hello World!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Goodbye!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn�t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Sorry, I don\'t know about that. Please try again.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const RequestLog = {
  process(handlerInput) {
    console.log(`REQUEST ENVELOPE = ${JSON.stringify(handlerInput.requestEnvelope)}`);
  },
};

const ResponseLog = {
  process(handlerInput) {
    console.log(`RESPONSE BUILDER = ${JSON.stringify(handlerInput)}`);
  },
};

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        BookDeskIntentHandler,
        CheckBookingStatusIntentHandler,
		CancelBookingIntent,
		GetTeamBookginsIntent,
        HelloWorldIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
  .addRequestInterceptors(RequestLog)
  .addResponseInterceptors(ResponseLog)
  .addErrorHandlers(ErrorHandler)
  .withApiClient(new Alexa.DefaultApiClient())
  .lambda();
