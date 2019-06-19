<template>
  <VApp>
    <!--VNavigationDrawer app>           
    </VNavigationDrawer-->
    <VToolbar color="indigo" app></VToolbar>
    <VContent>
      <vContainer fill-height grid-list-xl>
        <VLayout column>
          <VFlex xs12>
            <VCard>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Led status</h3>
                </div>
              </v-card-title>
              <VCardActions>
                <v-switch
                  v-model="switch1"
                  :label="`Switch 1: ${switch1.toString()}`"
                  @change="switchToggle"
                ></v-switch>
              </VCardActions>
            </VCard>
          </VFlex>
          <VFlex xs12>
            <VCard>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Led slider</h3>
                </div>
              </v-card-title>
              <VCardActions class="px-4">
                <v-slider v-model="slider" thumb-label @change="changeSlider" :max="100" :min="0"></v-slider>
              </VCardActions>
            </VCard>
          </VFlex>
        </VLayout>
      </vContainer>
    </VContent>
    <!--VFooter app>
    </VFooter-->
  </VApp>
</template>
<script>
export default {
  data() {
    return {
      switch1: false,
      slider: 0
    };
  },
  methods: {
    switchToggle() {
      console.log(this.switch1);
      Meteor.call("toggleLed", this.switch1);
    },
    changeSlider() {
      const value = parseInt(255 * this.slider/100)
      Meteor.call("changeSlider", value);
      console.log(value);
    }
  }
};
</script>