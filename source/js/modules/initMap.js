export const mapInit = () => {
  const mapContainer = document.querySelector('.contacts__map-wrapper');
  const mapIframe = document.querySelector('.contacts__map');

  if (!mapContainer || !mapIframe) {
    return;
  } else {
    let iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=82.928281%2C55.028522&mode=search&oid=89955256696&ol=biz&sctx=ZAAAAAgBEAAaKAoSCdlg4SRN4mBAEb3kf%2FJ3PUhAEhIJTl5kAn6N3z8Rt7dbkgN2xz8iBgABAgMEBSgKOABAvJAGSAFiEnBvaW50X2NvbnRleHRfdjI9MWoCcnWdAc3MTD2gAQCoAQC9AarWR4jCAQb4koGOzwLqAQDyAQD4AQCCAnfQsy4g0J3QvtCy0L7RgdC40LHQuNGA0YHQuiwg0YPQuy4g0KnQtdGC0LjQvdC60LjQvdCwIDY4LCDigKjQutGD0LvRjNGC0YPRgNC90YvQuSDRhtC10L3RgtGAIMKr0JHQtdC50YIg0JzQtdC90LDRhdC10LzCu4oCAJICAjY1mgIMZGVza3RvcC1tYXBzsAIB&sll=82.928281%2C55.028522&sspn=0.015407%2C0.004949&text=%D0%B3.%20%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D0%B8%D0%B1%D0%B8%D1%80%D1%81%D0%BA%2C%20%D1%83%D0%BB.%20%D0%A9%D0%B5%D1%82%D0%B8%D0%BD%D0%BA%D0%B8%D0%BD%D0%B0%2068%2C%20%E2%80%A8%D0%BA%D1%83%D0%BB%D1%8C%D1%82%D1%83%D1%80%D0%BD%D1%8B%D0%B9%20%D1%86%D0%B5%D0%BD%D1%82%D1%80%20%C2%AB%D0%91%D0%B5%D0%B9%D1%82%20%D0%9C%D0%B5%D0%BD%D0%B0%D1%85%D0%B5%D0%BC%C2%BB&z=17');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('loading', 'lazy');
    iframe.setAttribute('width', '100%');
    iframe.setAttribute('height', '100%');

    mapIframe.classList.add('is-shown');
    mapIframe.appendChild(iframe);
  }
};
