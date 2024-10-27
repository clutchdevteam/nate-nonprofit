export function useGlobal() {
  const global = useState("global", () => ({
    loaded: false,
    isMobileMenuOpen: false,
    pageHasModalOpen: false,
    mainNav: [],
    contact: [],
    logo: null,
    footer: {
      footerNav: [],
      logo: null,
      footerCTA: {},
    },
  }));

  function toggleMobileMenu(isMenuOpen) {
    global.value.isMobileMenuOpen = isMenuOpen;
  }

  function toggleModal(isModalOpen) {
    global.value.pageHasModalOpen = isModalOpen;
  }

  function isLoading(isLoaded) {
    global.value.loaded = isLoaded;
  }

  const setGlobals = async (data) => {
    global.value.mainNav = data?.mainNav;
    global.value.logo = data?.logo;
    global.value.contact = data?.contact;

    global.value.footer.footerNav = data.footer[0].footerNav;
    global.value.footer.logo = data.footer[0].logo;
    global.value.footer.footerCTA = data?.footer[0].footerCTA[0];
  };

  return {
    global,
    toggleMobileMenu,
    toggleModal,
    isLoading,
    setGlobals,
  };
}
