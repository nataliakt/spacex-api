import {
  getLatestLaunch,
  getNextLaunch,
  getUpcomingLaunches,
  getPastLaunches
} from "../repository/Lauches"

export async function latestLaunch(req: any, res: any) {
  const latestLaunch = await getLatestLaunch();
  res.send(latestLaunch);
}

export async function nextLaunch(req: any, res: any) {
  const nextLaunch = await getNextLaunch();
  res.send(nextLaunch);
}

export async function upcomingLaunch(req: any, res: any) {
  const upcomingLaunch = await getUpcomingLaunches();
  res.send(upcomingLaunch);
}

export async function pastLaunch(req: any, res: any) {
  const pastLaunch = await getPastLaunches();
  res.send(pastLaunch);
}
