$(function () {
  // All Vars
  const PUBLIC_SETTING_CAROUSEL = (other) => ({
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
          loop: true,
          center: true,
        },
        768: {
          center: false,
          loop: false,
        },
      },
    }),
  });

  // Best Products At Home page
  $(".best-products-swiper").owlCarousel({
    ...PUBLIC_SETTING_CAROUSEL({
      responsive: {
        0: {
          loop: true,
          center: true,
        },
        768: {
          center: false,
          loop: false,
        },
      },
    }),
  });
});
