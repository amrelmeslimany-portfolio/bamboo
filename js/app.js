$(function () {
  // All Vars
  const loading = $(".page-loading");
  const mainHeader = $("#main-header");
  const quantityButtons = $(".quantity-buttons");

  // Home page
  const categoryList = $(".categories-swiper");

  // Contact Us Page
  const chatWrap = $(".chat-wraper");

  // Product details page vars
  const imageCarousel = $(".imagesproduct-carousel");
  const likeAndDislikesWrap = $(".likesdislikes-wrap");

  // select payment methods vars
  const paymentMethods = $(".payment-methods .list-group-item");
  const nextAfterSelectPayment = $(".toggle-next-btn");

  // Profile pages vars
  const profileInfoWrap = $(".profile-info-wrap");
  const myorderWrap = $(".myorder-wrap");
  const seemoreWrap = $(".seemore-wrap");
  const phoneKey = $("#phonekey");
  const editImgProfile = $(".image-profile");

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

  /*
    * Address page vars
    ** This is var for inputs tags of address type select

    <!-- If Selected address type == house -->
                        <div class="mb-3 toggled-inputs">
                            <label for="housenumber" class="form-label">House Number</label>
                            <input type="text" name="housenumber" id="housenumber"
                                class="form-control rounded-4" placeholder="EX: 744524">
                        </div>

                        <!-- If Selected address type == aparment  && == office -->
                        <div class="mb-3 toggled-inputs">
                            <label for="building" class="form-label">Building</label>
                            <input type="text" name="building" id="building" class="form-control rounded-4"
                                placeholder="EX: building">
                        </div>
                        <div class="mb-3 toggled-inputs">
                            <label for="floor" class="form-label">Floor</label>
                            <input type="text" name="floor" id="floor" class="form-control rounded-4"
                                placeholder="EX: floor">
                        </div>


                        <!-- If Selected address type == aparment -->
                        <div class="mb-3 toggled-inputs">
                            <label for="apartmentnumber" class="form-label">Apartment Number</label>
                            <input type="text" name="apartmentnumber" id="apartmentnumber"
                                class="form-control rounded-4" placeholder="EX: apartmentnumber">
                        </div>

                        <!-- If Selected address type == office -->
                        <div class="mb-3 toggled-inputs">
                            <label for="officenumber" class="form-label">Office Number</label>
                            <input type="text" name="officenumber" id="officenumber"
                                class="form-control rounded-4" placeholder="EX: officenumber">
                        </div>
  */

  const ADDRESS_INPUTS_TEMP = [
    {
      type: ["house"],
      htmlTemp: `
                <div class="mb-3 toggled-inputs">
                    <label for="housenumber" class="form-label">House Number</label>
                    <input type="text" name="housenumber" id="housenumber"
                        class="form-control rounded-4" placeholder="EX: 744524">
                </div>
              `,
    },
    {
      type: ["apartment"],
      htmlTemp: `
                <div class="mb-3 toggled-inputs">
                    <label for="apartmentnumber" class="form-label">Apartment Number</label>
                    <input type="text" name="apartmentnumber" id="apartmentnumber"
                        class="form-control rounded-4" placeholder="EX: apartmentnumber">
                </div>
              `,
    },
    {
      type: ["office"],
      htmlTemp: `
        <div class="mb-3 toggled-inputs">
        <label for="officenumber" class="form-label">Office Number</label>
        <input type="text" name="officenumber" id="officenumber"
            class="form-control rounded-4" placeholder="EX: officenumber">
    </div>
              `,
    },
    {
      type: ["office", "apartment"],
      htmlTemp: `
        <div class="mb-3 toggled-inputs">
        <label for="building" class="form-label">Building</label>
        <input type="text" name="building" id="building" class="form-control rounded-4"
            placeholder="EX: building">
    </div>
    <div class="mb-3 toggled-inputs">
        <label for="floor" class="form-label">Floor</label>
        <input type="text" name="floor" id="floor" class="form-control rounded-4"
            placeholder="EX: floor">
    </div>
              `,
    },
  ];
  const addressTypeWrap = $(".address-type-wrap");
  const toggledAddressInputs = $(".toggled-inputs");

  // Handle Loading page
  loading.hide(100, function () {
    $(this).remove();
  });

  // Add to body, padding top because the navbar and the alert if founded
  $("body").css("padding-top", bodyPaddingTop() + "px");

  // Categories carousel at home page
  if (categoryList.length) {
    categoryList.owlCarousel({
      ...PUBLIC_SETTING_CAROUSEL(30, {
        responsive: RESPONSIVE_CAROUSEL,
      }),
    });

    // Toggle active on category selected
    categoryList.find(".category-swiper-item").click(function (e) {
      e.preventDefault();
      $(this)
        .parent()
        .siblings(".owl-item")
        .find(".category-swiper-item")
        .removeClass("active");
      $(this).addClass("active");
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

  // Suggested Products at product details page
  if ($(".suggested-products-wrap").length) {
    $(".suggested-products-wrap").owlCarousel({
      ...PUBLIC_SETTING_CAROUSEL(30, {
        responsive: RESPONSIVE_CAROUSEL,
      }),
    });
  }
  // favourite Products at profile page
  if (
    $(".products-wrap-carousel").length ||
    $(".companies-wrap-carousel").length
  ) {
    // I used setTimeOut to wait elements loading
    $("#favorites-tab").one("click", function () {
      setTimeout(() => {
        $(".products-wrap-carousel , .companies-wrap-carousel").owlCarousel({
          ...PUBLIC_SETTING_CAROUSEL(30, {
            responsive: RESPONSIVE_CAROUSEL,
          }),
        });
      }, 300);
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

  // Product reviews
  // Like and dislike
  if (likeAndDislikesWrap.length) {
    const button = likeAndDislikesWrap.find(".btn");
    // When click on LIKE & Dislike BUTTON (BTN)
    button.click(function () {
      $(this).toggleClass("active");
      $(this).siblings(".btn").removeClass("active");

      if ($(this).hasClass("like-anm")) {
        $(this).removeClass("like-anm");
        setTimeout(() => $(this).addClass("like-anm"), 10);
      } else {
        $(this).addClass("like-anm");
      }
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
  /*
   * Change the select input by using selct2 plugin
   * Handle the select address type
   */
  if ($(".custom-select").length) {
    $(".wrap-input").each(function () {
      $(this)
        .find(".custom-select")
        .select2({
          dropdownParent: $(this),
          width: "100%",
        });
    });
  }

  if (addressTypeWrap.length) {
    const addressTypeInput = addressTypeWrap.find("select");
    // Set Defualt
    loopONInputsAddressOBJ(addressTypeInput.val());

    // Handle change of this input
    addressTypeInput.change(function () {
      let selectedValue = $(this).val();

      // Clear the toggled input first
      toggledAddressInputs.html("");

      // IF Selected is HOUSE
      loopONInputsAddressOBJ(selectedValue);
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

  // Profile pages
  /*
   * Handle see more orders status
   * Edit profile page
   * Handle image profile preview
   */

  // Handle seemore sidebar
  if (profileInfoWrap.length) {
    const ordersList = myorderWrap.find(".orders-list");
    const seemoreBTN = seemoreWrap.find("button");
    let infowrapHeight = profileInfoWrap.height();

    // At Tablets and Mobiles screen
    if ($(window).innerWidth() <= 992) {
      infowrapHeight = 550;
    }

    // Set height for "orders wrap section" (will make height == info height)
    myorderWrap.height(
      infowrapHeight - parseInt(myorderWrap.css("paddingTop")) + "px"
    );

    // if order list doesnt exists and its height isn't longer than the order section => hide see more wrap
    if (ordersList.length == 0) {
      seemoreWrap.remove();
    } else {
      if (ordersList.height() < myorderWrap.height()) {
        seemoreWrap.remove();
      }
    }

    // Handle onClick on button see more => remove the height
    if (seemoreWrap.length)
      seemoreBTN.click(function () {
        myorderWrap.removeAttr("style");
        seemoreWrap.remove();
      });
  }

  // Handle phone key select with flag img
  if (phoneKey.length) {
    const defaultNameOfSelect = phoneKey.attr("name");
    phoneKey.ddslick({
      width: "100%",
      defaultSelectedIndex: 0,
      background: "white",
      onSelected: function () {
        // Set name to hidden input to post data
        $(".dd-selected-value").attr("name", defaultNameOfSelect);
      },
    });
  }

  // Handle img profile
  if (editImgProfile.find(".overflow-btn").length) {
    const overflowBTN = editImgProfile.find(".overflow-btn");
    const imgProfileInput = editImgProfile.find("#profileimg");

    // On click on overflow -> click the hidden input upload type
    overflowBTN.click(function () {
      imgProfileInput.click();
    });
  }

  // Public functions
  /*
   ** Add "padding top" to body content becuse of navbar height
   ** loop on every element in object of address inputs and select the sutible input for the sutible value
   */
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

  function loopONInputsAddressOBJ(selectedType) {
    ADDRESS_INPUTS_TEMP.forEach(function ({ type, htmlTemp }) {
      if (type.includes(selectedType)) {
        toggledAddressInputs.prepend(htmlTemp);
      }
    });
  }
});
