import API from './Api';
import { HOME_NEW_PAGE, CATEGORY_API, CATEGORY_ITEMS } from '../Constant/UrlConstants';
import axios from 'axios';

export const HomePage = async text => {
  return await API({
    method: 'GET',
    url: HOME_NEW_PAGE,
  }).then(res => {
    return res;
  });
};

export const getCategoty = async () => {
  return await API({
    method: 'GET',
    url: CATEGORY_API,
  }).then(res => {
    return res;
  });
};

export const getCategotyItems = async (category) => {
  return await API({
    method: 'GET',
    url: CATEGORY_ITEMS + category,
  }).then(res => {
    return res;
  });
};