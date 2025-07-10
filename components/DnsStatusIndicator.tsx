'use client';

import { useEffect, useState } from 'react';

export default function DnsStatusIndicator({ subdomain }: { subdomain: string }) {
  const [resolved, setResolved] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const checkResolution = async () => {
      try {
        // DNS resolution check via loading a tiny resource
        const res = await fetch(`https://${subdomain}.sunstatehoa.com/favicon.ico`, {
          method: 'HEAD',
          mode: 'no-cors',
        });
        // If it doesn't throw, we assume DNS is working
        setResolved(true);
        clearInterval(interval);
      } catch {
        // Still unresolved; try again on next interval
      }
    };

    checkResolution(); // first check immediately
    interval = setInterval(checkResolution, 2000);

    return () => clearInterval(interval);
  }, [subdomain]);

  return (
    <span
      className={`inline-block w-3 h-3 rounded-full ${
        resolved ? 'bg-green-500' : 'bg-gray-400'
      }`}
      title={resolved ? 'Domain is live' : 'Waiting for DNS…'}
    />
  );
}
