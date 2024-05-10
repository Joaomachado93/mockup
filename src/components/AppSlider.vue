<template>
  <div class="slider">
    <div @click="prev" class="nav-button">
      <img :src="require('@/assets/left-arrow.png')" alt="Left Arrow" class="arrow-icon"> 
    </div>
    <img :src="images[currentImage]" alt="Slider Image" class="main-image">
    <div @click="next" class="nav-button">
      <img :src="require('@/assets/right-arrow.png')" alt="Right Arrow" class="arrow-icon"> 
    </div>
  </div>
</template>

  
  <script>
  export default {
    name: 'AppSlider',
    data() {
      return {
        currentImage: 0,
        images: [    require('@/assets/banner1.jpg'), require('@/assets/banner3.jpg'), require('@/assets/banner2.jpg'), require('@/assets/banner.jpg'), ]
      };
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
 <style scoped>
 .slider {
   display: flex;
   align-items: center;
   justify-content: center;
   position: relative;
   overflow: hidden;
 }
 
 .main-image {
   width: 92%;
   height: auto;
   object-fit: contain;
 }
 
 .arrow-icon {
   width: 50px;
   height: auto;
 }
 
 .nav-button {
   background: rgba(0, 0, 0, 0.5);
   border: none;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   width: 60px;
   height: 60px;
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   z-index: 10;
   transition: background-color 0.3s ease;
 }
 
 .nav-button:hover {
   background-color: rgba(0, 0, 0, 0.7);
 }
 
 .nav-button:first-child {
   left: 0px;
 }
 
 .nav-button:last-child {
   right: 0px;
 }
 
 @media (max-width: 768px) {
   .arrow-icon {
     width: 30px;
   }
 
   .nav-button {
     width: 40px;
     height: 40px; 
   }
   .main-image {
    width: 100%; 
  }
  .nav-button:last-child {
    right: 0px;
  }
  .nav-button:first-child {
    left: 0x;
  }
 }
 </style>
 