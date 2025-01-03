import { useCallback, useEffect, useState } from 'react';

interface UseNotificationsOptions {
  title: string;
  body?: string;
  icon?: string;
  requireInteraction?: boolean;
}

export function useNotifications() {
  const [isPermissionGranted, setIsPermissionGranted] = useState(false);

  useEffect(() => {
    if (!("Notification" in window)) {
      console.warn("This browser does not support notifications.");
      return;
    }

    setIsPermissionGranted(Notification.permission === "granted");
  }, []);

  const requestPermission = useCallback(() => {
    if (!("Notification" in window)) {
      console.warn("This browser does not support notifications.");
      return;
    }

    Notification.requestPermission().then((permission) => {
      setIsPermissionGranted(permission === "granted");
    });
  }, []);

  const showNotification = useCallback(
    (options: UseNotificationsOptions) => {
      if (!isPermissionGranted) {
        console.warn("Permission for notifications is not granted.");
        return;
      }

      const { title, body, icon, requireInteraction } = options;

      const notification = new Notification(title, {
        body,
        icon,
        requireInteraction,
      });

      notification.onclick = () => {
        console.log("Notification clicked!");
        notification.close();
      };

      notification.onclose = () => {
        console.log("Notification closed!");
      };
    },
    [isPermissionGranted]
  );

  return {
    isPermissionGranted,
    requestPermission,
    showNotification,
  };
}
