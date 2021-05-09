export const isAuthenticated = () => {
    if (localStorage.getItem('userId') === null) {
        return false
    }else{ 
      return true
    }
};
