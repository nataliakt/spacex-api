import Home from "../models/Home";
import {
  getLatestLaunch,
  getNextLaunch,
  getUpcomingLaunches,
  getPastLaunches
} from "../repository/Lauches"

export async function homeCompiled(req: any, res: any) {
  const nextLaunch = await getNextLaunch();
  const upcomingLaunches = await getUpcomingLaunches();
  const pastLaunches = await getPastLaunches();

  const home: Home = {
    nextLaunch,
    pastLaunches,
    upcomingLaunches,
  }

  res.send(home);
}
