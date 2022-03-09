$(function () {
  // All Vars
  const PUBLIC_SETTING_CAROUSEL = (...other) => ({
    autoWidth: true,
    margin: 30,
    dots: false,
    ...other,
  });

  // Categories carousel at home page
  $(".categories-swiper").owlCarousel({
    ...PUBLIC_SETTING_CAROUSEL({
      responsive: {
        0: {
          center: true,
          items: 1,
        },
        1500: {
          center: false,
          items: 5,
        },
      },
    }),
  });

  $(".best-products-swiper").owlCarousel(
    PUBLIC_SETTING_CAROUSEL({
      loop: true,
    })
  );
});
