export function convertPrice(price: string) {
  return parseFloat(price.replace(/[$,]/g, ""));
}

export function formatDate(date: any) {
  const newDate = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return newDate.toLocaleString("id", options);
}

export function formatHotelRating(rating: number) {
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
}

export function bookingDays(start: string, end: string) {
  const startDate: any = new Date(start);
  const endDate: any = new Date(end);
  const diff = (endDate - startDate) / 1000;
  const result = Math.ceil(diff / (60 * 60 * 24));

  return isNaN(result) || result == 0 ? 1 : result;
}

export function calculateRating(rating: any) {
  let total = rating.reduce((prev: any, cur: any) => prev + cur.horeRating, 0);

  return total / rating.length;
}
