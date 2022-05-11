import spacexApi from '../configs/spacexApi';

export async function getLatestLaunch() {
  let result = null;

  try {
    const latest = await spacexApi.get('/latest');
    result = latest.data;
  } catch (error) {
    console.log(error);
  }

  return result;
}

export async function getNextLaunch() {
  let result = null;

  try {
    const next = await spacexApi.get('/next');
    result = next.data;
  } catch (error) {
    console.log(error);
  }

  return result;
}

export async function getUpcomingLaunches() {
  let result = null;

  try {
    const upcoming = await spacexApi.get('/upcoming');
    result = upcoming.data;
  } catch (error) {
    console.log(error);
  }

  return result;
}

export async function getPastLaunches() {
  let result = null;

  try {
    const past = await spacexApi.get('/past');
    result = past.data;
  } catch (error) {
    console.log(error);
  }

  return result;
}