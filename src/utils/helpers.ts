export const convertPrice = (price: string) => {
  return parseFloat(price.replace(/[$,RP]/gi, ""));
};

export const formatPrice = (price: number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const formatDate = (date: any, weekday: any, year: any) => {
  const newDate = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    weekday: weekday,
    year: year,
    month: "short",
    day: "numeric",
  };
  return newDate.toLocaleString("id", options);
};

export const formatHotelRating = (rating: number) => {
  switch (rating) {
    case 1:
      return "Bad";
    case 2:
      return "Less";
    case 3:
      return "Cool";
    case 4:
      return "Good";
    case 5:
      return "Best";
  }
};

export const bookingDays = (start: string, end: string) => {
  const startDate: any = new Date(start);
  const endDate: any = new Date(end);
  const diff = (endDate - startDate) / 1000;
  const result = Math.ceil(diff / (60 * 60 * 24));

  return isNaN(result) || result == 0 ? 1 : result;
};

export const calculateRating = (rating: any) => {
  const total = rating.reduce(
    (prev: any, cur: any) => prev + cur.horeRating,
    0
  );

  return total / rating.length;
};

export const calculateRatingBySingleStar = (ratings: any) => {
  const count = [0, 0, 0, 0, 0];
  for (let i = 0; i < ratings.length; i++) {
    const rating = ratings[i].horeRating;
    count[rating - 1]++;
  }
  return count;
};

export const addOneDay = new Date(Date.now() + 3600 * 1000 * 24);

export const reduceOneDay = new Date(Date.now() - 3600 * 1000 * 24);

export const removeDuplicates = (arr: any) => {
  const duplicates: any[] = [];
  const uniqueArr = arr.filter((obj: any) => {
    if (duplicates.includes(obj.faciCagro.cagroId)) {
      return false;
    } else {
      duplicates.push(obj.faciCagro.cagroId);
      return true;
    }
  });
  return uniqueArr;
};

export const bookingOrderNumber = (num: string) => {
  const todayDate = new Date().toISOString().slice(0, 10).replace(/[-]/gi, "");
  const numberOfOrder = num.padStart(4, "0");

  return `BO#${todayDate}-${numberOfOrder}`;
};

export const transactionNumber = (num: string) => {
  const todayDate = new Date().toISOString().slice(0, 10).replace(/[-]/gi, "");
  const numberOfTrx = num.padStart(4, "0");

  return `TRB#${todayDate}-${numberOfTrx}`;
};

export const generateRandomString = (length: number): string => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
