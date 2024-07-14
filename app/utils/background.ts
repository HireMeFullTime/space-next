export const getBackgroundClasses = (pathname: string) => {
    switch (pathname) {
      case '/':
        return 'bg-home-mobile sm:bg-home-tablet lg:bg-home-desktop'
      case '/destination':
        return 'bg-destination-mobile sm:bg-destination-tablet lg:bg-destination-desktop'
      case '/crew':
        return 'bg-crew-mobile sm:bg-crew-tablet lg:bg-crew-desktop'
      case '/technology':
        return 'bg-technology-mobile sm:bg-technology-tablet lg:bg-technology-desktop'
      case '/register':
      case '/login':
        return 'bg-register-login-mobile sm:bg-register-login-tablet lg:bg-register-login-desktop'
      default:
        if (pathname.startsWith('/user/')) {
          return 'bg-user-mobile sm:bg-user-tablet lg:bg-user-desktop'
        }
        return 'bg-default-mobile sm:bg-default-tablet lg:bg-default-desktop'
    }
  }