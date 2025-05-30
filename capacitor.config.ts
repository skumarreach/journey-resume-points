
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.d545cc81870544b4962d6ec513a33c4e',
  appName: 'Gurukulam',
  webDir: 'dist',
  server: {
    url: 'https://d545cc81-8705-44b4-962d-6ec513a33c4e.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#1e40af',
      showSpinner: false
    }
  }
};

export default config;
