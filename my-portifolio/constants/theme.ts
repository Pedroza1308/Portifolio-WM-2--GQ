import { Platform } from 'react-native';

const palette = {
  primary: '#38bdf8',
  background: '#0f172a',
  card: '#1e293b', 
  text: '#f1f5f9', 
  textSecondary: '#94a3b8', 
  border: '#334155', 
};

export const Colors = {
  light: {
    text: palette.background,
    background: '#ffffff',
    tint: palette.primary,
    icon: '#64748b',
    tabIconDefault: '#64748b',
    tabIconSelected: palette.primary,
    card: '#f8fafc',
    border: '#e2e8f0',
  },
  dark: {
    text: palette.text,
    background: palette.background,
    tint: palette.primary,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: palette.primary,
    card: palette.card,
    border: palette.border,
  },
};

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'sans-serif',
    serif: 'serif',
    rounded: 'sans-serif-medium',
    mono: 'monospace',
  },
});