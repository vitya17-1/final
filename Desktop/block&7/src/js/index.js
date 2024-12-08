// import '../scss/style.scss'
import '../scss/service.scss'
import '../scss/_fonts.scss'
import '../scss/aside.scss'
import '../scss/brands.scss'
import '../scss/price.scss'
import '../scss/send.scss'
import '../scss/call.scss'
import '../scss/footer.scss'
import '../scss/repair.scss'

/*ASIDE MENU*/
const menuButton = document.getElementById('menu')
const blur = document.querySelector('.blur')
const closeButton = document.getElementById('close')
const aside = document.querySelector('.service-aside')
menuButton.addEventListener('click', () => {
  aside.classList.add('service-aside--active')
  blur.classList.add('blur--active')
})

closeButton.addEventListener('click', () => {
  aside.classList.add('closing')
  setTimeout(() => {
    aside.classList.toggle('service-aside--active')
    aside.classList.remove('closing')
  }, 300)
  blur.classList.remove('blur--active')
})

/*WORK WITH TEXT*/

const readNextButton = document.querySelector('.service-info__read-next')
readNextButton.addEventListener('click', () => {
  document
    .querySelector('.service-info__text')
    .classList.toggle('service-info__text--active')
  document
    .querySelector('.service-info__read-next')
    .classList.toggle('service-info__read-next--active')
  readNextButton.textContent = readNextButton.classList.contains(
    'service-info__read-next--active'
  )
    ? 'Скрыть'
    : 'Читать далее'
})
/*ALL SWIPERS*/
let swiperBrands = new Swiper('.swiper-brands', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-brands__swiper-pagination'
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: true
  },
  slidesPerView: 'auto',
  spaceBetween: 35
})

let swiperRepair = new Swiper('.swiper-repair', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-repair__swiper-pagination'
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: true
  },
  slidesPerView: 'auto',
  spaceBetween: 35
})
let swiperPrice = new Swiper('.swiper-price', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-price__swiper-pagination'
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: true
  },
  slidesPerView: 'auto',
  spaceBetween: 35
})

if (window.innerWidth > 767) {
  swiperBrands.destroy()
  swiperBrands = 0
  swiperRepair.destroy()
  swiperRepair = 0
  swiperPrice.destroy()
  swiperPrice = 0
}
window.addEventListener(
  'resize',
  function (event) {
    if (event.target.innerWidth > 767 && swiperBrands) {
      swiperBrands.destroy()
      swiperBrands = 0
      swiperRepair.destroy()
      swiperRepair = 0
      swiperPrice.destroy()
      swiperPrice = 0
    } else if (event.target.innerWidth < 767 && !swiperBrands) {
      swiperBrands = new Swiper('.swiper-brands', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        pagination: {
          el: '.swiper-brands__swiper-pagination'
        },

        autoplay: {
          delay: 3000,
          disableOnInteraction: true
        },

        slidesPerView: 'auto', // Количество видимых слайдов
        spaceBetween: 35
      })
      swiperRepair = new Swiper('.swiper-repair', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        pagination: {
          el: '.swiper-repair__swiper-pagination'
        },

        autoplay: {
          delay: 3000,
          disableOnInteraction: true
        },

        slidesPerView: 'auto', // Количество видимых слайдов
        spaceBetween: 35
      })
      swiperPrice = new Swiper('.swiper-price', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        pagination: {
          el: '.swiper-price__swiper-pagination'
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: true
        },
        slidesPerView: 'auto',
        spaceBetween: 35
      })
    }
  },
  true
)
/*BRANDS*/
const showAll = document.querySelector('.brands__show-all')
showAll.addEventListener('click', () => {
  let hiddens = document.querySelectorAll('.hidden, .grid-hidden')
  if (hiddens[0].classList.contains('visible')) {
    hiddens.forEach((element) => {
      element.classList.remove('visible')
    })
    showAll.textContent = 'Показать все'
    showAll.classList.remove('brands__show-all--active')
  } else {
    hiddens.forEach((element) => {
      element.className += ' visible'
    })
    showAll.textContent = 'Скрыть'
    showAll.className += ' brands__show-all--active'
  }
})
// *REPAIR*
const showAllRepair = document.querySelector('.repair__show-all')
showAllRepair.addEventListener('click', () => {
  let hiddens = document.querySelectorAll('.repair-hidden')
  if (hiddens[0].classList.contains('visible')) {
    hiddens.forEach((element) => {
      element.classList.remove('visible')
    })
    showAllRepair.textContent = 'Показать все'
    showAllRepair.classList.remove('repair__show-all--active')
  } else {
    hiddens.forEach((element) => {
      element.className += ' visible'
    })
    showAllRepair.textContent = 'Скрыть'
    showAllRepair.className += ' repair__show-all--active'
  }
})
/*SEND*/

const sendButtons = document.querySelectorAll('#send, #aside-send')
sendButtons.forEach((button) => {
  button.addEventListener('click', function () {
    document.querySelector('.send').classList.toggle('send--active')
    blur.classList.add('blur--active')
    blur.classList.add('blur--dominate')
  })
})

const sendClose = document.querySelector('#send-close')
const send = document.querySelector('.send')
sendClose.addEventListener('click', () => {
  send.classList.add('send-closing')
  setTimeout(() => {
    send.classList.remove('send--active')
    send.classList.remove('send-closing')
  }, 300)
  blur.classList.remove('blur--active')
  blur.classList.remove('blur--dominate')
})
/*CALL*/

const callButtons = document.querySelectorAll('#call, #aside-call')
callButtons.forEach((button) => {
  button.addEventListener('click', function () {
    document.querySelector('.call').classList.toggle('call--active')
    blur.classList.add('blur--active')
    blur.classList.add('blur--dominate')
  })
})

const callClose = document.querySelector('#call-close')
const call = document.querySelector('.call')
callClose.addEventListener('click', () => {
  call.classList.add('call-closing')
  setTimeout(() => {
    call.classList.remove('call--active')
    call.classList.remove('call-closing')
  }, 300)
  blur.classList.remove('blur--active')
  blur.classList.remove('blur--dominate')
})
/*BLUR*/

blur.addEventListener('click', () => {
  if (blur.classList.contains('blur--active')) {
    if (aside.classList.contains('service-aside--active')) {
      aside.classList.add('closing')
    }
    send.classList.add('send-closing')
    call.classList.add('call-closing')
    setTimeout(() => {
      aside.classList.remove('service-aside--active')
      aside.classList.remove('closing')
      send.classList.remove('send--active')
      send.classList.remove('send-closing')
      call.classList.remove('call--active')
      call.classList.remove('call-closing')
    }, 300)
    blur.classList.remove('blur--active')
    blur.classList.remove('blur--dominate')
  }
})
