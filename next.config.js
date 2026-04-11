/** @type {import('next').NextConfig} */
// Version 1.0.1 - Restarting dev server to refresh manifest
const nextConfig = {
  // Désactivation de l'optimisation des polices à cause des problèmes réseaux
  optimizeFonts: false,
  // Optimisation des images depuis Sanity CDN
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  // En-têtes de sécurité
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
