import { getToaster } from './toast';

const initPropertySnippet = () => {
  const allPropertyItems = Array.from(
    document.querySelectorAll<HTMLElement>('[data-property-item]')
  );

  if (allPropertyItems.length === 0) {
    console.log('[data-property-item] count is 0');
    return;
  }

  for (const propertyItem of allPropertyItems) {
    const urlElement = propertyItem.querySelector<HTMLAnchorElement>('[data-property-url]');

    if (!urlElement) continue;

    const url = urlElement.href;

    const copyBtn = propertyItem.querySelector<HTMLElement>('[data-property-copy]');

    if (!copyBtn) continue;

    const toastText = copyBtn.dataset.snippetText;

    if (!toastText) continue;

    const { offsetX, offsetY, duration, position, isTop } = copyBtn.dataset;

    const toasterProps = {
      text: toastText,
      offsetX,
      offsetY,
      isTop: isTop === 'true',
      position,
      duration: Number.parseInt(duration || '0'),
    };

    copyBtn.addEventListener('click', async () => {
      await navigator.clipboard.writeText(url);

      const toaster = getToaster(toasterProps);
      toaster.showToast();
    });
  }
};

initPropertySnippet();
