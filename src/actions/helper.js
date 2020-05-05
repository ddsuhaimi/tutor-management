export const filterTutors = (tutors, criteria) => {
  let tempTutors = tutors;
  const { age, experience, gender, subject, rate, state, city } = criteria;
  console.log(criteria);
  if (!Number.isNaN(age)) {
    tempTutors = tempTutors.filter((tutor) => tutor.age === age);
  }

  if (!Number.isNaN(experience)) {
    tempTutors = tempTutors.filter((tutor) => tutor.experience === experience);
  }

  if (gender !== "") {
    tempTutors = tempTutors.filter(
      (tutor) => tutor.gender.toLowerCase() === gender.toLowerCase()
    );
  }

  if (subject !== "") {
    tempTutors = tempTutors.filter(
      (tutor) => tutor.subject.toLowerCase() === subject.toLowerCase()
    );
  }

  if (rate !== "$.00") {
    tempTutors = tempTutors.filter((tutor) => tutor.rate === rate);
  }

  if (state !== "") {
    tempTutors = tempTutors.filter(
      (tutor) => tutor.address.state.toLowerCase() === state.toLowerCase()
    );
  }

  if (city !== "") {
    tempTutors = tempTutors.filter(
      (tutor) => tutor.address.city.toLowerCase() === city.toLowerCase()
    );
  }

  return tempTutors;
};
