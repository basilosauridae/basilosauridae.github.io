---
title: 魔力卡片
date: 2024-01-04
tags:
  - css
---

<magicCard/>

```html
<div class="bg">
	<div class="card">
		Magic Card
  </div>
</div>
```

```scss
.bg{
  background: #22272e;
  position: relative;
  height: 300px;
  border-radius: 0.8rem;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
}
@property --rotate {
  syntax: "<angle>";
  initial-value: 132deg;
  inherits: false;
}
.card {
  background: #191c29;
  width: 50%;
  height: 80%;
  padding: 3px;
  position: relative;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  font-size: 1.5em;
  color: #fff;
  cursor: pointer;
  font-family: cursive;
}
.card:hover {
  color: rgb(88 199 250 / 100%);
  transition: color 1s;
}
.card:hover:before, .card:hover:after {
  animation: none;
  opacity: 0;
}
.card::before {
  content: "";
  width: 104%;
  height: 102%;
  border-radius: 8px;
  background-image: linear-gradient(
	var(--rotate)
    , #5ddcff, #3c67e3 43%, #4e00c2);
    position: absolute;
    z-index: -1;
    top: -1%;
    left: -2%;
    animation: spin 2.5s linear infinite;
  }
.card::after {
  position: absolute;
  content: "";
  left: 0;
  right: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  transform: scale(0.8);
  background-image: linear-gradient(
  var(--rotate)
  , #5ddcff, #3c67e3 43%, #4e00c2);
  opacity: 1;
  transition: opacity .5s;
  animation: spin 2.5s linear infinite;
}
@keyframes spin {
  0% {
    --rotate: 0deg;
  }
  100% {
    --rotate: 360deg;
  }
}
```
