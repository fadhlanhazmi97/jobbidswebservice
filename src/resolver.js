const { jobData,bidData } = require('./data');
const { sortData } = require('./utils/sorter');
const { compareData } = require('./utils/comparator');

const getJobs = ({sortBy, sortType}) => {
    // data is already sorted by id
    // if sortBy key does not exists in keys then return all data
    if (sortBy === "id" || !sortBy in jobData){
      return jobData;
    }
    else {
      return sortData(jobData.slice(), compareData(sortBy,sortType));
    }
};

const filterBids = (bidData,job_id) => {
  if (job_id === 0){
    return bidData;
  }
  return bidData.filter((bid) => bid.job_id === job_id);
};
  
const getBids = ({job_id, sortBy, sortType}) => {
  const filteredBids = filterBids(bidData,job_id);

  // data is already sorted by id
  // if sortBy key does not exists in keys then return all data
  if (sortBy === "id" || !sortBy in filteredBids){
    return filteredBids;
  }
  else {
    return sortData(filteredBids.slice(), compareData(sortBy,sortType));
  }
};
  

const root = {
    jobs: getJobs,
    bids: getBids,
};

module.exports = { root };