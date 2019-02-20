import { Permissions, Notifications } from 'expo';
import axios from 'axios';

const PUSH_ENDPOINT = 'https://law-news-push-notifications.herokuapp.com/notifications/register';

export async function registerForPushNotificationsAsync() {
  const {status} = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  let finalStatus = status;

  if(finalStatus === "granted"){
    return;
  }


  if(finalStatus !== "granted"){
    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS)
    finalStatus = status;
  }

  if(finalStatus !== "granted"){
    return;
  }

  let token = await Notifications.getExpoPushTokenAsync();
  console.log(`attempting to send ${token} to ${PUSH_ENDPOINT}`)
  try{
    let res = await axios.post(PUSH_ENDPOINT,{token: token})
  }catch(err){
    console.log(err);
  }
  
}