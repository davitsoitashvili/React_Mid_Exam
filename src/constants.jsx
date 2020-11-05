export const POSTS_URL = "https://jsonplaceholder.typicode.com/posts"
export const COMMENTS_url = "https://jsonplaceholder.typicode.com/comments"
export const USERNAME ="user@yahoo.com";
export const PASSWORD = "123123";
export const LOGIN_KEY = "Login";
export const LOGIN_TOKEN = "logged in successfully";



export const saveToken = () => {
  localStorage.setItem(LOGIN_KEY, LOGIN_TOKEN);
};

export const getToken = () => {
  return localStorage.getItem(LOGIN_KEY);
};
export const removeToken = () => {
  localStorage.removeItem(LOGIN_KEY);
};


export const ButtonType = {
    posts : {
        type : "button",
        className : "btn btn-primary",
        text : "Posts"
    },

    comments : {
        type : "button",
        className : "btn btn-secondary",
        text : "Comments"
    }
}

export const LoginInputs = {
    email: {
      labelClassName: "sr-only",
      labelText: "Email address",
      type: "email",
      id: "inputEmail",
      className: "form-control",
      placeholder: "Email address",
      required: true,
      autoFocus: true,
      name: "email",
    },
  
    password: {
      labelClassName: "sr-only",
      labelText: "Password",
      type: "password",
      id: "inputPassword",
      className: "form-control",
      placeholder: "Password",
      required: true,
      autoFocus: false,
      name: "password",
    },
  
    button : {
      className : "btn btn-lg btn-primary btn-block",
      type: "submit",
      text : "Sign in"
  
    }
  };

export const LogOutButton = {
  className : "btn btn-lg btn-primary btn-block",
  type: "button",
  text : "Sign out"
}