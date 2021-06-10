import cookie from "js-cookie"


export const getCookie=(key) => {
    if(window !== "undefined"){
        return cookie.get(key);
    }
}


// Get User info from localsotrage
export const isAuth = () => {
    // if (window !== "undefined") {
      // console.log("window", window);
     const token = localStorage.getItem('token');
     console.log("toooooken",token)
    //   const cookieChecked = getCookie("token");     
    //   console.log("cookieChecked", cookieChecked);
    //   if (cookieChecked) {
    //     // console.log("window", window);
    //     if (localStorage.getItem("token")) {
    //       console.log(
    //         "localStorage.getItem('token')",
    //         localStorage.getItem("token")
    //       );
  
    //       return JSON.parse(localStorage.getItem("token"));
    //     } else {
    //       // console.log("else false");
    //       return false;
    //     }
    //   }
    // }
  };


