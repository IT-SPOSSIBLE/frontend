export const API_ENDPOINTS = {
    categories: {
      list: "/categories/",
      create: "/categories/",
      read: (id: string | number) => `/categories/${id}/`,
      update: (id: string | number) => `/categories/${id}/`,
      delete: (id: string | number) => `/categories/${id}/`,
    },
  
    conversations: {
      list: "/conversations/",
      create: "/conversations/",
      read: (id: string | number) => `/conversations/${id}/`,
      update: (id: string | number) => `/conversations/${id}/`,
      delete: (id: string | number) => `/conversations/${id}/`,
    },
  
    images: {
      list: "/images/",
      create: "/images/",
      read: (id: string | number) => `/images/${id}/`,
      update: (id: string | number) => `/images/${id}/`,
      delete: (id: string | number) => `/images/${id}/`,
    },
  
    messages: {
      list: "/messages/",
      create: "/messages/",
      read: (id: string | number) => `/messages/${id}/`,
      update: (id: string | number) => `/messages/${id}/`,
      delete: (id: string | number) => `/messages/${id}/`,
    },
  
    products: {
      list: "/products/",
      create: "/products/",
      read: (id: string | number) => `/products/${id}/`,
      update: (id: string | number) => `/products/${id}/`,
      delete: (id: string | number) => `/products/${id}/`,
    },
  
users: {
  forgotPassword: "/users/forgot-password/",
  loginToken: "/users/login/token/",
  profile: {
    list: "/users/profile/",
    update: "/users/profile/",
  },
  register: "/users/register/",
  resetPassword: (token: string) => `/users/reset-password/${token}/`,
  logout: "/users/logout/", // ✅ Add this
  refreshToken: "/users/refresh-token", // ✅ Add this
},

  };
  