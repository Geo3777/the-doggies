<template>
  <section id="header">
    <div class="primary-overlay text-white">
      <div class="h-100 w-100 d-flex">
        <div
          class="d-flex justify-content-end align-items-md-center align-items-lg-end w-100 mb-5 pb-5 pt-4"
        >
          <font-awesome-icon
            icon="fa-solid fa-angles-down"
            size="2xl"
            bounce
            @click="scroll"
            class="icon text-mintCream"
          />
        </div>
        <div
          class="d-flex justify-content-end align-items-end pb-5 pe-3 flex-column w-100 margins"
        >
          <h2 class="text-mintCream">Welcome to the Doggies Explorer</h2>
          <h3 class="text-airBlue">
            <span class="typed-text">{{ typeValue }}</span>
            <span class="blinking-cursor">|</span>
            <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      typeValue: "",
      typeStatus: false,
      displayTextArray: [
        "See the power of smart contracts",
        "Learn more about dogs",
        "And watch cute puppies",
        "Enjoy!",
      ],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 2000,
      displayTextArrayIndex: 0,
      charIndex: 0,
    };
  },
  methods: {
    typeText() {
      if (
        this.charIndex <
        this.displayTextArray[this.displayTextArrayIndex].length
      ) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[
          this.displayTextArrayIndex
        ].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.displayTextArray[
          this.displayTextArrayIndex
        ].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
          this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
    scroll() {
      document.getElementById("explorer").scrollIntoView({
        behavior: "smooth",
      });
    },
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
};
</script>

<style lang="scss" scoped>
#header {
  position: relative;
  background: url(../assets/wp.jpg);
  min-height: 100vh;
  background-size: cover;
  background-position: 50% 35%;
}
#header .primary-overlay {
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.margins {
  margin-left: -3vw;
}

.icon {
  cursor: pointer;
}

h1 {
  span.typed-text {
    color: #d2b94b;
  }
}

.blinking-cursor {
  color: #ffffff;
  -webkit-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}
@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #ffffff;
  }
}
@-webkit-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #ffffff;
  }
}
</style>
