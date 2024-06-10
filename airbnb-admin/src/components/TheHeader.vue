<script setup>

</script>

<template>
  <header id="header-container" class="fixed fullwidth dashboard">

    <!-- Header -->
    <div id="header" class="not-sticky">
      <div class="container">

        <!-- Left Side Content -->
        <div class="left-side">

          <!-- Logo -->
          <div id="logo">
            <a href="index.html"><img src="images/logo.png" alt=""></a>
            <a href="index.html" class="dashboard-logo"><img src="images/logo2.png" alt=""></a>
          </div>

          <!-- Mobile Navigation -->
          <div class="mmenu-trigger">
            <button class="hamburger hamburger--collapse" type="button">
						<span class="hamburger-box">
							<span class="hamburger-inner"></span>
						</span>
            </button>
          </div>

          <!-- Main Navigation -->
          <nav id="navigation" class="style-1">
            <ul id="responsive">

              <li><a href="#">Home</a>
                <ul>
                  <li><a href="index.html">Home 1 (Modern)</a></li>
                  <li><a href="index-2.html">Home 2 (Default)</a></li>
                  <li><a href="index-3.html">Home 3 (Airbnb)</a></li>
                  <li><a href="index-4.html">Home 4 (Creative)</a></li>
                  <li><a href="index-5.html">Home 5 (Slider)</a></li>
                  <li><a href="index-6.html">Home 6 (Map)</a></li>
                  <li><a href="index-7.html">Home 7 (Video)</a></li>
                  <li><a href="index-8.html">Home 8 (Classic)</a></li>
                </ul>
              </li>

              <li><a href="#">Listings</a>
                <ul>
                  <li><a href="#">List Layout</a>
                    <ul>
                      <li><a href="listings-list-with-sidebar.html">With Sidebar</a></li>
                      <li><a href="listings-list-full-width.html">Full Width</a></li>
                      <li><a href="listings-list-full-width-with-map.html">Full Width + Map</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Grid Layout</a>
                    <ul>
                      <li><a href="listings-grid-with-sidebar-1.html">With Sidebar 1</a></li>
                      <li><a href="listings-grid-with-sidebar-2.html">With Sidebar 2</a></li>
                      <li><a href="listings-grid-full-width.html">Full Width</a></li>
                      <li><a href="listings-grid-full-width-with-map.html">Full Width + Map</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Half Screen Map</a>
                    <ul>
                      <li><a href="listings-half-screen-map-list.html">List Layout</a></li>
                      <li><a href="listings-half-screen-map-grid-1.html">Grid Layout 1</a></li>
                      <li><a href="listings-half-screen-map-grid-2.html">Grid Layout 2</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Single Listings</a>
                    <ul>
                      <li><a href="listings-single-page.html">Single Listing 1</a></li>
                      <li><a href="listings-single-page-2.html">Single Listing 2</a></li>
                      <li><a href="listings-single-page-3.html">Single Listing 3</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Open Street Map</a>
                    <ul>
                      <li><a href="listings-half-screen-map-list-OpenStreetMap.html">Half Screen Map List Layout</a></li>
                      <li><a href="listings-half-screen-map-grid-1-OpenStreetMap.html">Half Screen Map Grid Layout 1</a></li>
                      <li><a href="listings-half-screen-map-grid-2-OpenStreetMap.html">Half Screen Map Grid Layout 2</a></li>
                      <li><a href="listings-list-full-width-with-map-OpenStreetMap.html">Full Width List</a></li>
                      <li><a href="listings-grid-full-width-with-map-OpenStreetMap.html">Full Width Grid</a></li>
                      <li><a href="listings-single-page-OpenStreetMap.html">Single Listing</a></li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li><a class="current" href="#">User Panel</a>
                <ul>
                  <li><a href="dashboard.html">Dashboard</a></li>
                  <li><a href="dashboard-messages.html">Messages</a></li>
                  <li><a href="dashboard-bookings.html">Bookings</a></li>
                  <li><a href="dashboard-wallet.html">Wallet</a></li>
                  <li><a href="dashboard-my-listings.html">My Listings</a></li>
                  <li><a href="dashboard-reviews.html">Reviews</a></li>
                  <li><a href="dashboard-bookmarks.html">Bookmarks</a></li>
                  <li><a href="dashboard-add-listing.html">Add Listing</a></li>
                  <li><a href="dashboard-my-profile.html">My Profile</a></li>
                  <li><a href="dashboard-invoice.html">Invoice</a></li>
                </ul>
              </li>

              <li><a href="#">Pages</a>
                <div class="mega-menu mobile-styles three-columns">

                  <div class="mega-menu-section">
                    <ul>
                      <li class="mega-menu-headline">Pages #1</li>
                      <li><a href="pages-user-profile.html"><i class="sl sl-icon-user"></i> User Profile</a></li>
                      <li><a href="pages-booking.html"><i class="sl sl-icon-check"></i> Booking Page</a></li>
                      <li><a href="pages-add-listing.html"><i class="sl sl-icon-plus"></i> Add Listing</a></li>
                      <li><a href="pages-blog.html"><i class="sl sl-icon-docs"></i> Blog</a></li>
                    </ul>
                  </div>

                  <div class="mega-menu-section">
                    <ul>
                      <li class="mega-menu-headline">Pages #2</li>
                      <li><a href="pages-contact.html"><i class="sl sl-icon-envelope-open"></i> Contact</a></li>
                      <li><a href="pages-coming-soon.html"><i class="sl sl-icon-hourglass"></i> Coming Soon</a></li>
                      <li><a href="pages-404.html"><i class="sl sl-icon-close"></i> 404 Page</a></li>
                      <li><a href="pages-masonry-filtering.html"><i class="sl sl-icon-equalizer"></i> Masonry Filtering</a></li>
                    </ul>
                  </div>

                  <div class="mega-menu-section">
                    <ul>
                      <li class="mega-menu-headline">Other</li>
                      <li><a href="pages-elements.html"><i class="sl sl-icon-settings"></i> Elements</a></li>
                      <li><a href="pages-pricing-tables.html"><i class="sl sl-icon-tag"></i> Pricing Tables</a></li>
                      <li><a href="pages-typography.html"><i class="sl sl-icon-pencil"></i> Typography</a></li>
                      <li><a href="pages-icons.html"><i class="sl sl-icon-diamond"></i> Icons</a></li>
                    </ul>
                  </div>

                </div>
              </li>

            </ul>
          </nav>
          <div class="clearfix"></div>
          <!-- Main Navigation / End -->

        </div>
        <!-- Left Side Content / End -->

        <!-- Right Side Content / End -->
        <div class="right-side">
          <!-- Header Widget -->
          <div class="header-widget">

            <!-- User Menu -->
            <div class="user-menu">
              <div class="user-name"><span><img src="data:image/jpeg;base64,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" alt=""></span>My Account</div>
              <ul>
                <li><a href="dashboard.html"><i class="sl sl-icon-settings"></i> Dashboard</a></li>
                <li><a href="dashboard-messages.html"><i class="sl sl-icon-envelope-open"></i> Messages</a></li>
                <li><a href="dashboard-bookings.html"><i class="fa fa-calendar-check-o"></i> Bookings</a></li>
                <li><a href="index.html"><i class="sl sl-icon-power"></i> Logout</a></li>
              </ul>
            </div>

            <a href="dashboard-add-listing.html" class="button border with-icon">Add Listing <i class="sl sl-icon-plus"></i></a>
          </div>
          <!-- Header Widget / End -->
        </div>
        <!-- Right Side Content / End -->

      </div>
    </div>
    <!-- Header / End -->

  </header>
</template>

<style scoped lang="scss">

</style>