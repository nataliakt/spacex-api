import Launch from './Launch';

interface Home {
  nextLaunch: Launch | null;
  pastLaunches: Launch[] | null;
  upcomingLaunches: Launch[] | null;
}

export default Home;
