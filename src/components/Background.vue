<template>
  <div class="parallax">
    <div class="container">
      <div class="Background">
        <h1>{{ msg }}</h1>
        <SearchBar />
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet.
          Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim.
          Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi
          tincidunt ornare. Enim sit amet venenatis urna cursus eget. Non quam
          lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Odio
          aenean sed adipiscing diam donec adipiscing tristique. Amet nisl
          suscipit adipiscing bibendum est ultricies integer. Vel elit
          scelerisque mauris pellentesque pulvinar pellentesque habitant. Elit
          at imperdiet dui accumsan sit. Scelerisque felis imperdiet proin
          fermentum leo vel orci. Fermentum leo vel orci porta non. Nunc
          scelerisque viverra mauris in aliquam. Pellentesque diam volutpat
          commodo sed egestas egestas. Imperdiet sed euismod nisi porta lorem
          mollis aliquam ut porttitor. At in tellus integer feugiat scelerisque
          varius morbi enim nunc. Nunc vel risus commodo viverra. Arcu dictum
          varius duis at. Vitae turpis massa sed elementum tempus egestas.
          Penatibus et magnis dis parturient montes nascetur ridiculus mus
          mauris. Et malesuada fames ac turpis egestas sed tempus urna et. Orci
          ac auctor augue mauris augue neque gravida in. Pellentesque massa
          placerat duis ultricies lacus. Egestas quis ipsum suspendisse
          ultrices. Cras ornare arcu dui vivamus arcu. Nulla facilisi nullam
          vehicula ipsum a. Ultrices tincidunt arcu non sodales neque sodales.
          Egestas sed sed risus pretium quam vulputate dignissim suspendisse in.
          Fringilla phasellus faucibus scelerisque eleifend donec pretium
          vulputate. Sit amet cursus sit amet dictum sit amet justo donec.
          Platea dictumst quisque sagittis purus sit amet volutpat consequat
          mauris. Pellentesque eu tincidunt tortor aliquam nulla facilisi.
          Sagittis id consectetur purus ut. Purus ut faucibus pulvinar elementum
          integer enim. Aliquam vestibulum morbi blandit cursus risus at
          ultrices mi tempus. Iaculis nunc sed augue lacus viverra vitae. Sed
          viverra ipsum nunc aliquet bibendum enim. Nec feugiat nisl pretium
          fusce. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper
          malesuada proin. Auctor elit sed vulputate mi sit amet mauris commodo.
          Ac orci phasellus egestas tellus rutrum. Consequat ac felis donec et
          odio. Viverra justo nec ultrices dui sapien eget mi. Vitae elementum
          curabitur vitae nunc sed velit dignissim sodales ut. At erat
          pellentesque adipiscing commodo. At lectus urna duis convallis
          convallis tellus id interdum velit. Venenatis a condimentum vitae
          sapien pellentesque habitant morbi tristique. Nullam ac tortor vitae
          purus faucibus ornare suspendisse sed nisi. Faucibus turpis in eu mi
          bibendum neque egestas congue. Turpis in eu mi bibendum neque egestas
          congue. Dui id ornare arcu odio ut sem. Dignissim cras tincidunt
          lobortis feugiat vivamus at augue. Nibh venenatis cras sed felis eget.
          Id consectetur purus ut faucibus pulvinar elementum integer enim
          neque. Hendrerit dolor magna eget est lorem ipsum. Bibendum ut
          tristique et egestas quis ipsum. Eget mi proin sed libero enim.
          Feugiat nisl pretium fusce id velit. In hendrerit gravida rutrum
          quisque non tellus. Semper risus in hendrerit gravida rutrum quisque
          non tellus. Vel pretium lectus quam id leo. Non pulvinar neque laoreet
          suspendisse interdum consectetur. Tellus in hac habitasse platea
          dictumst vestibulum rhoncus est. Dui vivamus arcu felis bibendum ut
          tristique et. Pulvinar elementum integer enim neque. Pretium aenean
          pharetra magna ac placerat. Adipiscing commodo elit at imperdiet dui
          accumsan. Sed sed risus pretium quam vulputate dignissim. Pellentesque
          eu tincidunt tortor aliquam nulla. Ut sem nulla pharetra diam sit.
          Faucibus interdum posuere lorem ipsum dolor sit. Sollicitudin ac orci
          phasellus egestas tellus. Arcu felis bibendum ut tristique et egestas
          quis ipsum suspendisse.
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from './SearchBar.vue'

export default {
  name: 'Background',
  props: {
    msg: String
  },
  components: { SearchBar }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: white;
}
h2 {
  color: black;
}
</style>
