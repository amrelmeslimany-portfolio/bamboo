$(function () {
  // All Vars
  const loading = $(".page-loading");
  const mainHeader = $("#main-header");
  const quantityButtons = $(".quantity-buttons");

  // select payment methods vars
  const paymentMethods = $(".payment-methods .list-group-item");
  const nextAfterSelectPayment = $(".toggle-next-btn");

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

  // Shopping Cart Page
  // quantity
  if (quantityButtons.length) {
    quantityButtons.each(function () {
      let [minus, input, plus] = [
        $(this).find(".minus"),
        $(this).find("input"),
        $(this).find(".plus"),
      ];

      let inputVal = parseInt(input.val());

      // Increase Quantity
      minus.click(function () {
        if (inputVal > 1) {
          inputVal -= 1;
          input.val(inputVal);
        }
      });

      // Decrease Quantity
      plus.click(function () {
        inputVal += 1;
        input.val(inputVal);
      });
    });
  }

  // select payment page
  if (paymentMethods.length) {
    paymentMethods.click(function () {
      $(this).addClass("active");

      $(this).siblings().removeClass("active");
      nextAfterSelectPayment.show(200);
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
