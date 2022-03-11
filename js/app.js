$(function () {
  // All Vars
  const loading = $(".page-loading");
  const languageMenu = $(".language-menu");
  const mainHeader = $("#main-header");
  const mainFooter = $("footer");
  const PUBLIC_SETTING_CAROUSEL = (other) => ({
    autoWidth: true,
    margin: 30,
    dots: false,
    ...other,
  });

  // Handle Loading page
  loading.hide(100, function () {
    $(this).remove();
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
