import React, { useState } from 'react'

const Calculation = () => {

  // set variables to each user input
  let currentAge = 30
  let retirementAge = 67
  let currentRetirementSavings = 0
  let contributionPercentOfIncome = 0.05
  let InvestmentAnnualReturn = 0.15
  let lifeExpectancy = 90
  let currentSalary = 55000
  let ExpectedAnnualIncomeIncreasePercent = 0.02

  // set variables to input calculations
  let date = 2021
  let workingYears = (retirementAge - currentAge)
  let retirementYears = (lifeExpectancy - retirementAge)

  // hidden inputs
  let newAnnualReturnPercentInRetirement = 0.082
  let inflationRate = 0.081
  let totalAmountContributed = 'xxx'
  let returnFromInterest = currentRetirementSavings - totalAmountContributed


  // set an empty array for working years
  let workingSavingsArr = []

  // set an empty array for retirement years
  let retiredSavingsArr = []

  // create an object that represents the first year's data
  let currentYear = {
    year: date,
    age: currentAge,
    savings: currentRetirementSavings,
    salary: currentSalary,
    totalAmountContributed: 0,
    returnFromInterest: 0
  }

  // loop through for every working year
  for (let i = 0; i < (retirementAge - currentAge); i++) {
    // For each working year iteration, push an object into the workingSavings array that contains a key
    // for every input. Each object represents a year.
    workingSavingsArr.push({ ...currentYear });
    currentYear.year++
    currentYear.age++
  }
  return workingSavingsArr
};


// sample data

// [{
//   year: 2021
//   age: 30,
//   currentRetirementSavings: 0,
//   salary: 55000,
//   totalAmountContributed: 0,
//   returnFromInterest: 0
// },
// {
//   age: 31,
//   currentRetirementSavings: 3038.75,
//   salary: 56100,
//   totalAmountContributed: 0,
//   returnFromInterest: 0
// }
// ]

export default Calculation;