export const normalizeTempListData = (data) =>
  data.map(({ dt_txt, main }) => ({ date: dt_txt, temp: main.temp }));
