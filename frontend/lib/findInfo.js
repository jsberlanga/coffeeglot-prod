import { languages, locations } from "./data";

export const findFlag = courseLanguage => {
  const filtered = languages.find(lang => {
    return lang.language.toLowerCase() === courseLanguage.toLowerCase();
  });
  return filtered && filtered.flag;
};

export const findLocationPicture = courseLocation => {
  const filtered = locations.find(loc => {
    return loc.name.toLowerCase() === courseLocation.toLowerCase();
  });
  return filtered && filtered.pictures;
};

export const findLocationAddress = courseLocation => {
  const filtered = locations.find(loc => {
    return loc.name.toLowerCase() === courseLocation.toLowerCase();
  });
  return filtered && filtered.address;
};

export const findMaxSeats = courseLocation => {
  if (!courseLocation) return 1;
  const filtered = locations.find(loc => {
    return loc.name.toLowerCase() === courseLocation.toLowerCase();
  });
  return filtered.seats;
};

export const findEnrollMessage = course => {
  const now = new Date().toISOString();

  if (course.endDate < now) return "This course has already finished";
  if (course.startDate < now) return "This course has already started";
  if (course.usersEnrolled.length >= course.seats) return "This course is full";
  else {
    return "Enroll to this course";
  }
};
