'use strict';

exports.displayVolunteerPage = (req, res) => {
  res.render('volunteer');
}

exports.displayVolunteerHospital = (req, res) => {
  res.render('volunteer/hospital');
}

exports.displayVolunteerFoodbank = (req, res) => {
  res.render('volunteer/foodbank');
}

exports.displayVolunteerAnimalShelter = (req, res) => {
  res.render('volunteer/animalshelter');
}
