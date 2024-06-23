const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:service(car_polishing|car_wash|tint|ceramic_protection|car_accessories|car_screen|upholstery|car_balance|gearbox|transmission|axle_driveshaft|tire_repair|suspension|comfort_system|brake|ac|electric)',
        destination: '/Services',
      },
      {
        source: '/:service(AC_Services|Service_Packages|Electric_CWP|EWP_NewCars|EWP_PreOwnedCars|EWP_LuxuryCars)',
        destination: '/Packages',
      },
    ];
  },
  env: {
    BASE_URL: "https://carrefour-1.onrender.com/api/",
    MAP_KEY: "AIzaSyBmXFsC7j7TpnZhwwqTYGPc8YaUXUjDw0g",
  },
};

module.exports = nextConfig;
