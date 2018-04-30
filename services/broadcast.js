import * as AuthService from './auth';
import {
  SF_BASE_URL as BASE_URL,
  SF_ACCESS_TOKEN as auth_token
} from 'react-native-dotenv';
// const auth_token = AuthService.getAuthToken()

export const getBroacastObjs = async () => {
  const queryEndpoint = `${BASE_URL + '/broadcasts'}`;

  console.log('Fetching broadcast data from Salesforce');
  console.log(queryEndpoint);

  try {
    const response = await fetch(queryEndpoint, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth_token}`,
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    if (data) {
      console.log('-Broadcast Query DATA Response-\n');
      console.log(data);
      return data;
    } else {
      console.log('-Broadcast Query NO DATA Response-\n');
      console.log('Check auth_token and API call.-\n');
      return undefined;
    }
  } catch (e) {
    console.log(e);
  }
};

export const getBroadcastCards = async () => {
  return await getBroacastObjs();
};