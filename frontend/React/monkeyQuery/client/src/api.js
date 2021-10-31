export const getAllAvatars = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_SERVER}/avatars`);
  
    if (!response.ok) {
      throw new Error("Something went wrong.");
    }

    return response.json();
  };
  
  export const getAvatar = async ({ queryKey }) => {
    /* eslint-disable no-unused-vars */
    const [_key, { _id }] = queryKey;
    const response = await fetch(`${process.env.REACT_APP_API_SERVER}/avatars/${_id}`);
  
    if (!response.ok) {
      throw new Error(response.json().message);
    }
  
    return response.json();
  };
  
  export const updateAvatar = async ({ _id, ...data }) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_SERVER}/avatars/${_id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
  
    if (!response.ok) {
      throw new Error(response.json().message);
    }
  
    return response.json();
  };
  
  export const createAvatar = async ({ ...data }) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_SERVER}/avatars/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
  
    if (!response.ok) {
      throw new Error(response.json().message);
    }
  
    return response.json();
  };
  
  
  export const removeAvatar = async (_id) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_SERVER}/avatars/${_id}`,
      {
        method: "DELETE"
      }
    );
  
    if (!response.ok) {
      throw new Error(response.json().message);
    }
  
    return true;
  };