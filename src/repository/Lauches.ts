import spacexApi from '../configs/spacexApi';
import Launch from '../models/Launch';
import { datetimeToDate, datetimeToHour } from '../parsers/date';

async function getLaunch(path: string): Promise<Launch | null> {
  let result = null;

  try {
    const {
      id, name, date_utc, success, links: { patch: { small } }
    } = (await spacexApi.get(path)).data;
    result = {
      id,
      name,
      date: datetimeToDate(date_utc),
      hour: datetimeToHour(date_utc),
      success,
      patch: small
    };
  } catch (error) {
    console.log(error);
  }

  return result;
}

async function getLaunches(path: string): Promise<Launch[] | null> {
  let result = null;

  try {
    const launches = await spacexApi.get(path);
    result = launches.data.map((launch: any) => {
      const {
        id, name, date_utc, success, links: { patch: { small } }
      } = launch;
      return {
        id,
        name,
        date: datetimeToDate(date_utc),
        hour: datetimeToHour(date_utc),
        success,
        patch: small
      };
    });
  } catch (error) {
    console.log(error);
  }

  return result;
}

export async function getLatestLaunch(): Promise<Launch | null> {
  return getLaunch('/latest');
}

export async function getNextLaunch(): Promise<Launch | null> {
  return getLaunch('/next');
}

export async function getUpcomingLaunches(): Promise<Launch[] | null> {
  return getLaunches('/upcoming');
}

export async function getPastLaunches(): Promise<Launch[] | null> {
  return getLaunches('/past');
}