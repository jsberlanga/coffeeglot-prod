import moment from "moment";
const now = moment();

export const findDate = (startDate, now) => {
  const startDateMoment = moment(startDate);

  if (startDateMoment.diff(now, "days") === 0) {
    return (
      <div className="title active">
        <p>{`This course starts today. Don't miss it!`}</p>
        <p>{`You can still REGISTER.`}</p>
      </div>
    );
  }
  if (startDateMoment.diff(now) < 0) {
    return (
      <div className="title inactive">
        <p>{`You are a bit too late`}</p>
        <p>{`This course has already started.`}</p>
      </div>
    );
  }
  if (startDateMoment.diff(now) > 0) {
    return (
      <div className="title active">
        <p>{`This course starts in ${startDateMoment.diff(
          now,
          "days"
        )} days.`}</p>
        <p>{`Go ahead and REGISTER NOW!`}</p>
      </div>
    );
  }
};

export const compareDates = (startDate, endDate) => {
  return `${moment(endDate).diff(moment(startDate), "days")} days`;
};
