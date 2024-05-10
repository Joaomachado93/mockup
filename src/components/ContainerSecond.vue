<template>
  <div class="content-container">
    <div class="image-section">
      <img :src="require('@/assets/banner1.jpeg')" alt="Slider Image" class="img"> 
    </div>
    <div class="text-section">
      <h1 class="heading">Lorem ipsum</h1>
      <div class="text-content">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
      </div>
      <div class="button-lorem">Lorem ipsum</div>
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
  flex-direction: row;
  align-items: stretch;
  margin-top: 20px;

  .image-section {
    flex: 1;
    text-align: center;
    overflow: hidden;

    .img {
      width: 100%;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  }

  .text-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    .heading, .text-content {
      text-align: end;
      margin: 0 0 16px;

      &:last-child {
        margin-bottom: 66px;
      }
    }

    .button-lorem {
      position: absolute;
      right: 0;
      bottom: 10px;
      display: inline-block;
      margin-top: 12px;
      background-color: lightgrey;
      padding: 8px 47px;
    }
  }
}

@media (max-width: 768px) {
  .content-container {
    flex-direction: column;

    .text-section, .image-section {
      flex: 1;
      padding: 0 15px;
      text-align: center;
      
      .heading, .text-content {
        text-align: center;
      }

      .button-lorem {
        position: static;  
        width: auto;  
        margin: 10px auto 0; 
        padding: 8px 20px;
      }
    }
  }
}
</style>
