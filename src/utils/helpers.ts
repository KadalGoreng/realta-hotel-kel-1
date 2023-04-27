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
