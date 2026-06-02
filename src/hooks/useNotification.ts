import { useState } from "react";

export function useNotification() {
  const [permission, setPermission] = useState(
    "Notification" in window ? Notification.permission : "unsupported"
  );

  const requestPermission = async () => {
    if (!("Notification" in window)) return;
    const result = await Notification.requestPermission();
    setPermission(result);
  };

  const notify = (title: string, options: NotificationOptions) => {
    if (permission === "granted") {
      return new Notification(title, options);
    }
  };

  return { permission, requestPermission, notify };
}