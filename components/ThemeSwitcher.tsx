'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Switch } from '@nextui-org/react';
import { MoonIcon } from '@/assets/icons/MoonIcon';
import { SunIcon } from '@/assets/icons/SunIcon';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <Switch
        defaultSelected
        size="lg"
        color="primary"
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <SunIcon className={className} />
          ) : (
            <MoonIcon className={className} />
          )
        }
        onChange={() => {
          setTheme(theme === 'dark' ? 'light' : 'dark');
        }}
      />
    </div>
  );
}
