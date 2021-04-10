export const fetchMarsInfo = async () => {
  const res = await fetch(
    `https://api.nasa.gov/insight_weather/?api_key=${process.env.VUE_APP_NASA_KEY}&feedtype=json&ver=1.0`
  );
  if (res.status !== 200) return console.log(res.status);
  return await res.json();
};

export const fetchStoryByDate = async (date: string) => {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.VUE_APP_NASA_KEY}&date=${date}` //exmp 2021-04-07
  );
  if (res.status !== 200) return console.log(res.status);
  const data = await res.json();
  console.log(data, "d");
  return data;
};
