/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import Toastify from 'toastify-js';

const toasterProps = {
  close: true,
  gravity: 'bottom', // `top` or `bottom`
  position: 'right', // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  className: 'toast-style',
  offset: {
    x: '1em', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
    y: '1em', // vertical axis - can be a number or a string indicating unity. eg: '2em'
  },
};

export const openToast = ({ text }: { text: string }) => {
  const toaster = Toastify({
    text,
    duration: 2000,
    ...toasterProps,
  });
  toaster.showToast();
};
