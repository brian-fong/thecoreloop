module.exports = {
  async redirects() {
    return [
      {
        source: "/onchain",
        destination: "https://thecoreloop.notion.site/On-Chain-Space-Station-9dd9e3579d984cd8bb0bc2e4a5b7f8f2?pvs=4",
        permanent: true,
      },
      {
        source: "/telegram",
        destination: "https://t.me/thecoreloop",
        permanent: true,
      }
    ];
  },
};
