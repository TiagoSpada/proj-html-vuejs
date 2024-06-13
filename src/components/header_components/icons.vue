<script>
export default{
    name: `icon`,
}
</script>
<template>
     <!-- icons -->
                    <div class="col-md-2 text-end">
                        <ul class="example-2">
                            <li class="icon-content">
                                <a
                                href="https://www.facebook.com/ThemeFusionAvada"
                                aria-label="facebook"
                                data-social="facebook"
                                >
                                <div class="filled"></div>
                                <font-awesome-icon icon="fa-brands fa-facebook-f" />
                                </a>
                                <div class="tooltip">Facebook</div>
                            </li>
                            <li class="icon-content">
                                <a
                                href="https://www.instagram.com/themefusion/"
                                aria-label="instagram"
                                data-social="instagram"
                                >
                                <div class="filled"></div>
                                <font-awesome-icon icon="fa-brands fa-instagram" />
                                </a>
                                <div class="tooltip">Instagram</div>
                            </li>
                            <li class="icon-content">
                                <a
                                href="https://x.com/theme_fusion?mx=2"
                                aria-label="twitter"
                                data-social="twitter"
                                >
                                <div class="filled"></div>
                                <font-awesome-icon icon="fa-brands fa-x-twitter" />
                                </a>
                                <div class="tooltip">X</div>
                            </li>
                            <li class="icon-content">
                                <a
                                href="https://www.youtube.com/@AvadaVideos"
                                aria-label="youtube"
                                data-social="youtube"
                                >
                                <div class="filled"></div>
                                <font-awesome-icon icon="fa-brands fa-youtube" />
                                </a>
                                <div class="tooltip">YouTube</div>
                            </li>
                        </ul>
                    </div>
</template>
<style scoped lang="scss">
/********** 
icons
***********/ 

ul {
  list-style: none;
}

li::after {
  content: "";
  display: block;
  height: 0px;
  transition: height 0.3s ease-in-out;
  pointer-events: none;
}

li:hover::after {
  height: 10px;
}

.example-2 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.example-2 .icon-content {
  margin: 0 10px;
  position: relative;
}
.example-2 .icon-content .tooltip {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  color: black;
  padding: 6px 10px;
  border-radius: 5px;
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  font-size: 14px;
  transition: all 0.3s ease;
}
.example-2 .icon-content:hover .tooltip {
  opacity: 1;
  visibility: visible;
  bottom: -40px;
}
.example-2 .icon-content a {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  color: #4d4d4d;
  transition: all 0.3s ease-in-out;
}
.example-2 .icon-content a:hover {
  box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 12%);
}
.example-2 .icon-content a:hover {
  color: black;
}
.example-2 .icon-content a .filled {
  position: absolute;
  top: auto;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  transition: all 0.3s ease-in-out;
}
.example-2 .icon-content a:hover .filled {
  height: 100%;
}
</style>