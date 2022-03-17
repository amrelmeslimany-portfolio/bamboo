$(function () {
  // All Vars
  const loading = $(".page-loading");
  const mainHeader = $("#main-header");
  const quantityButtons = $(".quantity-buttons");

  // Contact Us Page
  const chatWrap = $(".chat-wraper");

  // Product details page vars
  const imageCarousel = $(".imagesproduct-carousel");

  // select payment methods vars
  const paymentMethods = $(".payment-methods .list-group-item");
  const nextAfterSelectPayment = $(".toggle-next-btn");

  // Carousel Settings Vars
  const PUBLIC_SETTING_CAROUSEL = (margin = 30, other) => ({
    autoWidth: true,
    margin,
    dots: false,
    ...other,
  });
  const RESPONSIVE_CAROUSEL = {
    0: {
      loop: true,
      center: true,
    },
    768: {
      center: false,
      loop: false,
    },
  };

  // Handle Loading page
  loading.hide(100, function () {
    $(this).remove();
  });

  // Add to body, padding top because the navbar and the alert if founded
  $("body").css("padding-top", bodyPaddingTop() + "px");

  // Categories carousel at home page
  if ($(".categories-swiper").length) {
    $(".categories-swiper").owlCarousel({
      ...PUBLIC_SETTING_CAROUSEL(30, {
        responsive: RESPONSIVE_CAROUSEL,
      }),
    });
  }

  // Best Products At Home page
  if ($(".best-products-swiper").length) {
    $(".best-products-swiper").owlCarousel({
      ...PUBLIC_SETTING_CAROUSEL(30, {
        responsive: RESPONSIVE_CAROUSEL,
      }),
    });
  }

  // Companies Page
  // Carousel for companies categories
  if ($(".companies-carousel").length) {
    $(".companies-carousel").owlCarousel({
      ...PUBLIC_SETTING_CAROUSEL(15),
    });
  }

  // Product Details Carousel
  if (imageCarousel.length) {
    // Enable the carousel
    imageCarousel.owlCarousel({
      ...PUBLIC_SETTING_CAROUSEL(15),
    });

    // Toggle active class when click on image
    imageCarousel.find(".nav-link").click(function () {
      $(this)
        .parent()
        .parent()
        .siblings(".owl-item")
        .find(".nav-link")
        .removeClass("active");
    });
  }

  // Contact us page
  // Make scroll of chat at the end
  if (chatWrap.length) {
    let chatBody = chatWrap.find(".chat-body");

    chatBody.animate({
      scrollTop: chatBody.offset().top + chatBody.innerHeight(),
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

  // Address
  if ($(".custom-select").length) {
    $(".wrap-input").each(function () {
      $(".custom-select").select2({
        dropdownParent: $(this),
        width: "100%",
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
