export const areCookiesEnabled = () => {
    try {
      document.cookie = "test=1";
      const cookiesEnabled = document.cookie.indexOf("test=") !== -1;
      document.cookie = "test=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
      return cookiesEnabled;
    } catch (e) {
      return false;
    }
  };
  