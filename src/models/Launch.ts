interface Launch {
  id: number;
  name: string;
  date: string;
  hour: string;
  success: boolean | null;
  patch: string | null;
}

export default Launch;
