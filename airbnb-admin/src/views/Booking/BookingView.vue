<script setup>
  import { useStore } from "vuex";
  import { computed } from "vue";
  import { formatDate, formatDateTime } from "@/utils/formatDate";
  import { formatCurrency } from "@/utils/formatCurrency";

  const store = useStore();
  store.dispatch("ticket/getAllTicKetsAction");
  const ticketList = computed(() => store.state.ticket.ticketList);
  console.log(ticketList)
</script>

<template>
  <!-- Content
  ================================================== -->
  <div class="dashboard-content">

    <!-- Titlebar -->
    <div id="titlebar">
      <div class="row">
        <div class="col-md-12">
          <h2>Bookings</h2>
          <!-- Breadcrumbs -->
          <nav id="breadcrumbs">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Dashboard</a></li>
              <li>Bookings</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <div class="row">

      <!-- Listings -->
      <div class="col-lg-12 col-md-12">
        <div class="dashboard-list-box margin-top-0">

          <!-- Booking Requests Filters  -->
          <div class="booking-requests-filter">

            <!-- Sort by -->
            <div class="sort-by">
              <div class="sort-by-select">
                <select data-placeholder="Default order" class="chosen-select-no-single">
                  <option>All Listings</option>
                  <option>Burger House</option>
                  <option>Tom's Restaurant</option>
                  <option>Hotel Govendor</option>
                </select>
              </div>
            </div>

            <!-- Date Range -->
            <div id="booking-date-range">
              <span></span>
            </div>
          </div>

          <!-- Reply to review popup -->
          <div id="small-dialog" class="zoom-anim-dialog mfp-hide">
            <div class="small-dialog-header">
              <h3>Send Message</h3>
            </div>
            <div class="message-reply margin-top-0">
              <textarea cols="40" rows="3" placeholder="Your Message to Kathy"></textarea>
              <button class="button">Send</button>
            </div>
          </div>

          <h4>Booking Requests</h4>
          <ul>

            <li v-for="(ticket, index) in ticketList" :key="index" class="pending-booking">
              <div class="list-box-listing bookings">
                <div class="list-box-listing-img"><img src="data:image/jpeg;base64,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" alt=""></div>
                <div class="list-box-listing-content">
                  <div class="inner">
                    <h3> {{ticket.room.room_name}} <span class="booking-status pending">Pending</span><span class="booking-status unpaid">Unpaid</span></h3>

                    <div class="inner-booking-list">
                      <h5>Booking Date:</h5>
                      <ul class="booking-list">
                        <li class="highlighted">{{ formatDate(ticket.ticket.check_in) }} - {{ formatDate(ticket.ticket.check_out) }}</li>
                      </ul>
                    </div>

                    <div class="inner-booking-list">
                      <h5>Booking Created:</h5>
                      <ul class="booking-list">
                        <li class="highlighted">{{ formatDateTime(ticket.ticket.created_at) }}</li>
                      </ul>
                    </div>

                    <div class="inner-booking-list">
                      <h5>Price:</h5>
                      <ul class="booking-list">
                        <li class="highlighted">{{ formatCurrency(ticket.room.price) }}</li>
                      </ul>
                    </div>

                    <div class="inner-booking-list">
                      <h5>Client:</h5>
                      <ul class="booking-list">
                        <li>{{ ticket.user.user_name }}</li>
                        <li>{{ ticket.user.email }}</li>
                        <li>{{ ticket.user.phone }}</li>
                      </ul>
                    </div>

                    <a href="#small-dialog" class="rate-review popup-with-zoom-anim"><i class="sl sl-icon-envelope-open"></i> Send Message</a>

                  </div>
                </div>
              </div>
              <div class="buttons-to-right">
                <a href="#" class="button gray reject"><i class="sl sl-icon-close"></i> Reject</a>
                <a href="#" class="button gray approve"><i class="sl sl-icon-check"></i> Approve</a>
              </div>
            </li>

<!--            <li class="approved-booking">-->
<!--              <div class="list-box-listing bookings">-->
<!--                <div class="list-box-listing-img"><img src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&s=120" alt=""></div>-->
<!--                <div class="list-box-listing-content">-->
<!--                  <div class="inner">-->
<!--                    <h3>Burger House <span class="booking-status">Approved</span></h3>-->

<!--                    <div class="inner-booking-list">-->
<!--                      <h5>Booking Date:</h5>-->
<!--                      <ul class="booking-list">-->
<!--                        <li class="highlighted">10.12.2019 at 12:30 pm - 13:30 pm</li>-->
<!--                      </ul>-->
<!--                    </div>-->

<!--                    <div class="inner-booking-list">-->
<!--                      <h5>Booking Details:</h5>-->
<!--                      <ul class="booking-list">-->
<!--                        <li class="highlighted">2 Adults, 2 Children</li>-->
<!--                      </ul>-->
<!--                    </div>-->

<!--                    <div class="inner-booking-list">-->
<!--                      <h5>Client:</h5>-->
<!--                      <ul class="booking-list">-->
<!--                        <li>Kathy Brown</li>-->
<!--                        <li>kathy@example.com</li>-->
<!--                        <li>123-456-789</li>-->
<!--                      </ul>-->
<!--                    </div>-->

<!--                    <a href="#small-dialog" class="rate-review popup-with-zoom-anim"><i class="sl sl-icon-envelope-open"></i> Send Message</a>-->

<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="buttons-to-right">-->
<!--                <a href="#" class="button gray reject"><i class="sl sl-icon-close"></i> Cancel</a>-->
<!--              </div>-->
<!--            </li>-->

<!--            <li class="canceled-booking">-->
<!--              <div class="list-box-listing bookings">-->
<!--                <div class="list-box-listing-img"><img src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&s=120" alt=""></div>-->
<!--                <div class="list-box-listing-content">-->
<!--                  <div class="inner">-->
<!--                    <h3>Tom's Restaurant <span class="booking-status">Canceled</span></h3>-->

<!--                    <div class="inner-booking-list">-->
<!--                      <h5>Booking Date:</h5>-->
<!--                      <ul class="booking-list">-->
<!--                        <li class="highlighted">21.10.2019 at 9:30 am - 10:30 am</li>-->
<!--                      </ul>-->
<!--                    </div>-->

<!--                    <div class="inner-booking-list">-->
<!--                      <h5>Booking Details:</h5>-->
<!--                      <ul class="booking-list">-->
<!--                        <li class="highlighted">2 Adults</li>-->
<!--                      </ul>-->
<!--                    </div>-->

<!--                    <div class="inner-booking-list">-->
<!--                      <h5>Client:</h5>-->
<!--                      <ul class="booking-list">-->
<!--                        <li>Kathy Brown</li>-->
<!--                        <li>kathy@example.com</li>-->
<!--                        <li>123-456-789</li>-->
<!--                      </ul>-->
<!--                    </div>-->

<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </li>-->

          </ul>
        </div>
      </div>


      <!-- Copyrights -->
      <div class="col-md-12">
        <div class="copyrights">© 2021 Listeo. All Rights Reserved.</div>
      </div>
    </div>

  </div>
  <!-- Content / End -->
</template>

<style scoped lang="scss">

</style>