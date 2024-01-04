<style scoped lang="scss">
.bg{
  text-align: center;
  background: #ada2a2;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
}
.rainbow {
  width: 400px;
  height: 300px;
  border-radius: 10px;
  padding: 2rem;
  margin: auto;
  display: grid;
  place-content: center;
  text-align: center;
  font-size: 1.5em;
  --border-size: 0.3rem;
  border: var(--border-size) dotted transparent;
  background-image: linear-gradient(
      to right,
      rgb(255 255 255 / var(--opacity)),
      rgb(255 255 255 / var(--opacity))
    ),
    conic-gradient(
      from var(--angle),
      #d53e33 0deg 90deg,
      #fbb300 90deg 180deg,
      #377af5 180deg 270deg,
      #399953 270deg 360deg
    );
  background-origin: border-box;
  background-clip: padding-box, border-box;
}
/* Animate when Houdini is available */
@supports (background: paint(houdini)) {
  @property --opacity {
    syntax: "<number>";
    initial-value: 0.5;
    inherits: false;
  }
  @property --angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }
  @keyframes opacityChange {
    to {
      --opacity: 1;
    }
  }
  @keyframes rotate {
    to {
      --angle: 360deg;
    }
  }
  .rainbow {
    animation: rotate 4s linear infinite, opacityChange 3s infinite alternate;
  }
}
span{
  background: repeating-conic-gradient(#5D67E8 10deg,#ef4444 20deg,#fff 55deg); 
	-webkit-background-clip: text; 
	background-clip: text; 
	color: transparent; 
}
</style>

<template>
	<div class="bg">
    <div class="rainbow">
      <span>彩色文字</span>
    </div>
  </div>
</template>