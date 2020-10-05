document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger'),
        headerList = document.querySelector('.header-list');

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger_active');
    headerList.classList.toggle('header-list_active');
    document.body.classList.toggle('bodyLocked');
  })

  // burger


  // tabs 
  const tabsButtonsContainer = document.querySelector('.features-tabs-buttons'),
        tabsButton = document.getElementsByClassName('features-tabs-buttons__item'),
        tab = document.getElementsByClassName('features-tab');

  const clearTabsButtons = num => {
    for (let i = num; i < tabsButton.length; i++) {
      tabsButton[i].classList.remove('colored_bg');
    }
  }
  clearTabsButtons(1);

  const setTabButton = num => {tabsButton[num].classList.add('colored_bg')}
  setTabButton(0);

  const tabIndex = 0;

  const clearTabs = num => {
    for (let i = num; i < tab.length; i++) {
      tab[i].classList.remove('tab_showen');
      tab[i].classList.add('tab_hidden');
    }
  }
  clearTabs(1);

  const setTab = num => {
    clearTabs(0);
    tab[num].classList.add('tab_showen'); 
  }

  tabsButtonsContainer.addEventListener('click', event => {
    const target = event.target;

    if (target.classList.contains('features-tabs-buttons__item')) {
      for (let num = 0; num < tabsButton.length; num++) {
        if (target === tabsButton[num]) {
          clearTabsButtons(0);
          tabsButton[num].classList.add('colored_bg');
          setTab(num);
        }
      }
    }
  })
})