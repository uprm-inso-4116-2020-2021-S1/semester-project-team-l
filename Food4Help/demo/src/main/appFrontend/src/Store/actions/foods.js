import Food from '../../models/foods';

export const SET_FOODS = 'SET_FOODS';

export const fetchFoods = (id, name, type, amount, SKU) => {
  return async (dispatch) => {
    // any async code you want!
//    const userId = getState().auth.userId;
    try {
      const response = await fetch(
        '/food',
        {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  id: id,
                  name: name,
                  type: type,
                  amount: amount,
                  SKU: SKU
                })
              }
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const resData = await response.json();
      console.log(resData);
      const loadedFoods = [];

      for (const key in resData) {
        loadedFoods.push(
          new Food(
            key,
            resData[key].name,
            resData[key].type,
            resData[key].amount,
            resData[key].SKU
          )
        );
      }

      dispatch({
        type: SET_FOODS,
        foods: loadedFoods,
      });
    } catch (err) {
      // send to custom analytics server
      throw err;
    }
  };
};

//export const deleteProduct = productId => {
//  return async (dispatch, getState) => {
//    const token = getState().auth.token;
//    const response = await fetch(
//      `https://rn-complete-guide4-c75c3.firebaseio.com/products/${productId}.json?auth=${token}`,
//      {
//        method: 'DELETE'
//      }
//    );
//
//    if (!response.ok) {
//      throw new Error('Something went wrong!');
//    }
//    dispatch({ type: DELETE_PRODUCT, pid: productId });
//  };
//};
//
//export const createProduct = (title, description, imageUrl, price) => {
//  return async (dispatch, getState) => {
//    // any async code you want!
//    let pushToken;
//    let statusObj = await Permissions.getAsync(Permissions.NOTIFICATIONS);
//    if (statusObj.status !== 'granted') {
//      statusObj = await Permissions.askAsync(Permissions.NOTIFICATIONS);
//    }
//    if (statusObj.status !== 'granted') {
//      pushToken = null;
//    } else {
//      pushToken = (await Notifications.getExpoPushTokenAsync()).data;
//    }
//    const token = getState().auth.token;
//    const userId = getState().auth.userId;
//    const response = await fetch(
//      `https://rn-complete-guide4-c75c3.firebaseio.com/products.json?auth=${token}`,
//      {
//        method: 'POST',
//        headers: {
//          'Content-Type': 'application/json'
//        },
//        body: JSON.stringify({
//          title,
//          description,
//          imageUrl,
//          price,
//          ownerId: userId,
//          ownerPushToken: pushToken
//        })
//      }
//    );
//
//    const resData = await response.json();
//
//    dispatch({
//      type: CREATE_PRODUCT,
//      productData: {
//        id: resData.name,
//        title,
//        description,
//        imageUrl,
//        price,
//        ownerId: userId,
//        pushToken: pushToken
//      }
//    });
//  };
//};
//
//export const updateProduct = (id, title, description, imageUrl) => {
//  return async (dispatch, getState) => {
//    //console.log(getState());
//    const token = getState().auth.token;
//    const response = await fetch(
//      `https://rn-complete-guide4-c75c3.firebaseio.com/products/${id}.json?auth=${token}`,
//      {
//        method: 'PATCH',
//        headers: {
//          'Content-Type': 'application/json'
//        },
//        body: JSON.stringify({
//          title,
//          description,
//          imageUrl
//        })
//      }
//    );
//
//    if (!response.ok) {
//      throw new Error('Something went wrong!');
//    }
//
//    dispatch({
//      type: UPDATE_PRODUCT,
//      pid: id,
//      productData: {
//        title,
//        description,
//        imageUrl
//      }
//    });
//  };
//};