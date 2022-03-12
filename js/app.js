$(function () {
  // All Vars
  const loading = $(".page-loading");
  const mainHeader = $("#main-header");
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

  // Add to body, padding top because the navbar and the alert if founded
  $("body").css("padding-top", bodyPaddingTop() + "px");

  // Categories carousel at home page
  if ($(".categories-swiper").length) {
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
  }

  // Best Products At Home page
  if ($(".best-products-swiper").length) {
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
  }

  // Public functions
  function bodyPaddingTop() {
    let navbarHeight = mainHeader.find("nav.navbar").innerHeight();
    let navbarAlert = mainHeader.find(".alert");

    // Check if alerts in navbar
    if (navbarAlert.length) {
      return navbarHeight + navbarAlert.innerHeight();
    } else {
      return navbarHeight;
    }
  }
});
