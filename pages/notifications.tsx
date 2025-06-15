// pages/notifications.tsx – Alerts & Automations UI

import { useEffect, useState } from 'react';

type NotificationSetting = {
  type: string;
  enabled: boolean;
};

export default function NotificationSettings() {
  const [settings, setSettings] = useState<NotificationSetting[]>([]);

  useEffect(() => {
    fetch('/api/notifications/update')
      .then(res => res.json())
      .then(setSettings);
  }, []);

  const toggle = async (type: string) => {
    const updated = settings.map(s =>
      s.type === type ? { ...s, enabled: !s.enabled } : s
    );
    setSettings(updated);
    await fetch('/api/notifications/update', {
      method: 'POST',
      body: JSON.stringify({ type }),
    });
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Notifications & Alerts</h1>
      {settings.map((s) => (
        <div key={s.type} className="flex items-center justify-between p-4 bg-white dark:bg-zinc-900 rounded shadow">
          <div className="font-medium">{s.type.replaceAll('_', ' ')}</div>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="form-checkbox"
              checked={s.enabled}
              onChange={() => toggle(s.type)}
            />
            <span className="ml-2">{s.enabled ? 'Enabled' : 'Disabled'}</span>
          </label>
        </div>
      ))}
    </div>
  );
}
