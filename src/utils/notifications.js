import { Permissions, Notifications } from 'expo';
import axios from 'axios';

const PUSH_ENDPOINT = 'https://law-news-push-notifications.herokuapp.com/notifications/register';

export async function registerForPushNotificationsAsync() {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  // Stop here if the user did not grant permissions
  if (finalStatus !== 'granted') {
    return;
  }

  let token = await Notifications.getExpoPushTokenAsync();
  console.log(`attempting to send ${token} to ${PUSH_ENDPOINT}`)
  try {
    let res = await axios.post(PUSH_ENDPOINT, { token: token })
  } catch (err) {
    console.log(err);
  }

}

const askNotificationPermissions_withTimeout = () => {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(async () => {
      const { status } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
      );
      resolve(status === 'granted');
    }, 5000);

    const promise = Permissions.askAsync(
      Permissions.NOTIFICATIONS
    );

    promise.then(r => {
      clearTimeout(timeoutId);

      const { status } = r;
      resolve(status === 'granted');
    });
  });

};
