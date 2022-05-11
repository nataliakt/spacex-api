interface Launch {
  id: number;
  number: number;
  name: string;
  date: string;
  links: LaunchLinks;
  success: boolean;
  upcoming: boolean;
}

interface LaunchLinks {
  webcast: string;
}