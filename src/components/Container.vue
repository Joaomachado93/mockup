<template>
  <div class="content-container">
    <div class="text-section">
      <h1 class="heading">Lorem ipsum</h1>
      <div class="text-content">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
      </div>
      <div class="button-lorem">Lorem ipsum</div>
    </div>
    <div class="image-section">
      <img :src="require('@/assets/banner1.jpeg')" alt="Slider Image" style="width: 100%;"> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSlider',
  data() {
    return {
      currentImage: 0,
      images: ['banner1.jpeg', 'banner1.jpg', 'banner2.jpg']
    };
  },
  computed: {
    imageSrc() {
      return require(`@/assets/${this.images[this.currentImage]}`);
    }
  },
  methods: {
    next() {
      this.currentImage = (this.currentImage + 1) % this.images.length;
    },
    prev() {
      this.currentImage = (this.currentImage + this.images.length - 1) % this.images.length;
    }
  }
};
</script>
<style lang="scss" scoped>
.content-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;

  .text-section {
    flex: 1 1 300px;
    padding: 0 39px 0 0;

    .heading { margin-bottom: 20px; }

    .text-content {
      font-size: 16px;
      line-height: 1.5;
      color: #333;
    }

    .button-lorem {
      display: inline-block;
      margin-top: 12px;
      background-color: lightgrey;
      padding: 8px 47px;
    }
  }

  .image-section {
    flex: 1 1 300px;
    text-align: center;
    img {
      width: 100%;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .text-section, .image-section {
      padding: 0 15px;
      flex-basis: auto;
      text-align: center;
    }
    .button-lorem {
      margin-bottom: 18px;
    }
  }
}
</style>
