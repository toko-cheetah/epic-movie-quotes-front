<template>
  <div>
    <div
      class="main h-[431px] xl:h-[75vh] bg-gradient-to-b from-[#11101A] to-[#08080D] text-beige flex flex-col items-center justify-center"
    >
      <p
        class="w-[281px] xl:w-[703px] text-2xl xl:text-6xl xl:leading-normal mb-6 text-center font-bold"
      >
        {{ $t("landing_page.find_any_quote") }}
      </p>

      <router-link :to="{ name: 'sign_up' }">
        <RedBtn class="xl:py-[9px] px-[13px] xl:px-[17px] xl:text-xl">
          {{ $t("landing_page.get_started") }}
        </RedBtn>
      </router-link>
    </div>

    <LandingQuotes
      id="interstellar"
      quote="landing_page.leave_behind_to_go_forward"
      movie="landing_page.interstellar"
      year="2014"
    />

    <LandingQuotes
      id="tenenbaums"
      quote="landing_page.secretly_in_love_and_leave_it_that"
      movie="landing_page.the_royal_tenenbaums"
      year="2001"
    />

    <LandingQuotes
      id="lord-of-rings"
      quote="landing_page.i_see_in_your_eyes_the_same_fear"
      movie="landing_page.the_lord_of_the_rings"
      year="2003"
    />

    <RouterView />
  </div>
</template>

<script setup>
import RedBtn from "../components/buttons/RedBtn.vue";
import LandingQuotes from "../components/LandingQuotes.vue";
</script>

<style scoped>
#interstellar {
  background: var(--gradient-over-image-mobile),
    url("../assets/images/interstellar-small.png");
}

#tenenbaums {
  background: var(--gradient-over-image-mobile),
    url("../assets/images/tenenbaums-small.png");
}

#lord-of-rings {
  background: var(--gradient-over-image-mobile),
    url("../assets/images/lord-of-rings-small.png");
}

@media (min-width: 1280px) {
  #interstellar {
    background: var(--gradient-over-image),
      url("../assets/images/interstellar.png");
  }

  #tenenbaums {
    background: var(--gradient-over-image),
      url("../assets/images/tenenbaums.png");
  }

  #lord-of-rings {
    background: var(--gradient-over-image),
      url("../assets/images/lord-of-rings.png");
  }

  #interstellar,
  #tenenbaums,
  #lord-of-rings {
    background-attachment: fixed;
  }
}

#interstellar,
#tenenbaums,
#lord-of-rings {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
