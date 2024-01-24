// Growth Rate formula:
// (Ending Value - Begining value / Begining Value) * 100
function findGrowthRate(company) {
  const growthRates = [];
  // Loop through each company
  let yearlyRevenue = company.yearlyRevenue;
  // Calculate the consecutive year to find growth rate
  // And push the result to growthRates
  for (let i = 0; i < yearlyRevenue.length - 1; i++) {
    const endingValue = yearlyRevenue[i + 1].revenue;
    const beginingValue = yearlyRevenue[i].revenue;
    // data -> growth rate
    const data = ((endingValue - beginingValue) / beginingValue) * 100;

    growthRates.push(Number(data.toFixed(2)));
  }

  return growthRates;
}

// Average Growth Rate = ((1 + 1st Growth_Rate / 100 ) + ... + (1 + nth Growth_Rate / 100 )) ^ 1/n  - 1
function findAverageGrowthRate(growthRates) {
  const product = growthRates.reduce((acc, rate) => acc * (1 + rate / 100), 1);
  const averageGrowthRate = Math.pow(product, 1 / growthRates.length) - 1;

  return averageGrowthRate;
}

// Functiont to get the score of the companies
function getScores(companies, riskTolerance) {
  const scores = [];
  for (let i = 0; i < companies.length; i++) {
    const debt = companies[i].debt;
    const growthRate = riskTolerance * companies[i].growthRate;
    const score = growthRate - debt;
    scores.push({ ...companies[i], score: Number(score.toFixed(3)) });
  }
  return scores;
}

// Function to suggest investment according to risk - low, high, or medium
function suggestInvestment(companies, riskTolerance, risk) {
  if (risk === "low") {
    // Focus on low debt
    // Sort the companies by debt in ascending order
    const sortedCompany = companies.slice().sort((a, b) => a.debt - b.debt);
    // Select the top 2 companies with lowest debt and calculate their score
    const scores = getScores(sortedCompany.slice(0, 2), riskTolerance);
    return scores;
  } else if (risk === "high") {
    // Focus on high growth rate
    // Sort the companies by growth in descending order
    const sortedCompany = companies
      .slice()
      .sort((a, b) => b.growthRate - a.growthRate);
    // Select the top 2 companies with highest growth and calculate their score
    const scores = getScores(sortedCompany.slice(0, 2), riskTolerance);
    return scores;
  } else {
    // Medium focuses on balanced scores - Get the highest scores
    const scores = getScores(companies, riskTolerance);
    // Sort by score in descending order
    const sortedScores = scores.slice().sort((a, b) => b.score - a.score);
    return sortedScores;
  }
}
// Find the avg growth rate of each company and store it in them
function getCompaniesFinalData(companiesData) {
  let res = companiesData.map((company) => {
    const resultGrowthRates = findGrowthRate(company);
    const resultAvg = Number(
      findAverageGrowthRate(resultGrowthRates).toFixed(4)
    );
    return {
      ...company,
      growthRate: resultAvg,
    };
  });
  return res;
}

export {
  findGrowthRate,
  findAverageGrowthRate,
  getScores,
  getCompaniesFinalData,
  suggestInvestment,
};
