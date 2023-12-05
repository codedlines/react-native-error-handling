import axios from 'axios';
import config from 'react-native-ultimate-config';
import * as Sentry from '@sentry/react-native';

const timeout = 6400;

export const fetchApiData = async (endPoint: string) => {
  const baseUrl = config.BASE_URL;
  try {
    const response = await axios.get(`${baseUrl}/${endPoint}`, {
      timeout,
    });

    return response.data;
  } catch (error) {
    Sentry.captureException(new Error(error.message));
  }
};

export const getUsers = async (): Promise<string | null> => {
  try {
    return fetchApiData('/users');
  } catch (error) {
    Sentry.captureException(new Error(error.message));
  }
  return null;
};

export const getAddresses = async (): Promise<string | null> => {
  try {
    return fetchApiData('/addresses');
  } catch (error) {
    Sentry.captureException(new Error(error.message));
  }
  return null;
};

export const getBanks = async (): Promise<string | null> => {
  try {
    return fetchApiData('/banks');
  } catch (error) {
    Sentry.captureException(new Error(error.message));
  }
  return null;
};

export const getAppliances = async (): Promise<string | null> => {
  try {
    return fetchApiData('/appliances');
  } catch (error) {
    Sentry.captureException(new Error(error.message));
  }
  return null;
};

export const getBeers = async (): Promise<string | null> => {
  try {
    return fetchApiData('/beers');
  } catch (error) {
    Sentry.captureException(new Error(error.message));
  }
  return null;
};

export const getBloodTypes = async (): Promise<string | null> => {
  try {
    return fetchApiData('/blood_types');
  } catch (error) {
    Sentry.captureException(new Error(error.message));
  }
  return null;
};

export const getCreditCards = async (): Promise<string | null> => {
  try {
    return fetchApiData('/credit_cards');
  } catch (error) {
    Sentry.captureException(new Error(error.message));
  }
  return null;
};
