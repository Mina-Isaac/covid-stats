const sampleCasesResponse = {
  data: {
    "09162": {
      ags: "09162",
      name: "LK Dithmarschen",
      history: [
        { cases: 6, date: "2021-02-16T00:00:00.000Z" },
        { cases: 3, date: "2021-02-17T00:00:00.000Z" },
        { cases: 6, date: "2021-02-18T00:00:00.000Z" },
        { cases: 1, date: "2021-02-19T00:00:00.000Z" },
        { cases: 0, date: "2021-02-20T00:00:00.000Z" },
        { cases: 1, date: "2021-02-21T00:00:00.000Z" },
        { cases: 0, date: "2021-02-22T00:00:00.000Z" },
        { cases: 4, date: "2021-02-23T00:00:00.000Z" },
        { cases: 3, date: "2021-02-24T00:00:00.000Z" },
        { cases: 1, date: "2021-02-25T00:00:00.000Z" },
        { cases: 0, date: "2021-02-26T00:00:00.000Z" },
        { cases: 2, date: "2021-02-27T00:00:00.000Z" },
        { cases: 2, date: "2021-02-28T00:00:00.000Z" },
        { cases: 2, date: "2021-03-01T00:00:00.000Z" },
        { cases: 5, date: "2021-03-02T00:00:00.000Z" },
        { cases: 7, date: "2021-03-03T00:00:00.000Z" },
        { cases: 6, date: "2021-03-04T00:00:00.000Z" },
      ],
    },
  },
  meta: {
    source: "Robert Koch-Institut",
    contact: "Marlon Lueckert (m.lueckert@me.com)",
    info: "https://github.com/marlon360/rki-covid-api",
    lastUpdate: "2021-05-16T00:00:00.000Z",
    lastCheckedForUpdate: "2021-05-17T21:54:56.572Z",
  },
};

const sampleIncidenceResponse = {
  data: {
    "09162": {
      ags: "09162",
      name: "Dithmarschen",
      history: [
        { weekIncidence: 18.018964960621055, date: "2021-02-16T00:00:00.000Z" },
        { weekIncidence: 17.26817475392851, date: "2021-02-17T00:00:00.000Z" },
        { weekIncidence: 15.76659434054342, date: "2021-02-18T00:00:00.000Z" },
        { weekIncidence: 14.265013927158334, date: "2021-02-19T00:00:00.000Z" },
        { weekIncidence: 12.763433513773245, date: "2021-02-20T00:00:00.000Z" },
        { weekIncidence: 13.51422372046579, date: "2021-02-21T00:00:00.000Z" },
        { weekIncidence: 12.763433513773245, date: "2021-02-22T00:00:00.000Z" },
        { weekIncidence: 11.261853100388159, date: "2021-02-23T00:00:00.000Z" },
        { weekIncidence: 11.261853100388159, date: "2021-02-24T00:00:00.000Z" },
        { weekIncidence: 7.507902066925438, date: "2021-02-25T00:00:00.000Z" },
        { weekIncidence: 6.757111860232895, date: "2021-02-26T00:00:00.000Z" },
        { weekIncidence: 8.258692273617983, date: "2021-02-27T00:00:00.000Z" },
        { weekIncidence: 9.009482480310528, date: "2021-02-28T00:00:00.000Z" },
        { weekIncidence: 10.511062893695614, date: "2021-03-01T00:00:00.000Z" },
        { weekIncidence: 11.261853100388159, date: "2021-03-02T00:00:00.000Z" },
        { weekIncidence: 14.265013927158334, date: "2021-03-03T00:00:00.000Z" },
        { weekIncidence: 18.018964960621055, date: "2021-03-04T00:00:00.000Z" },


      ],
    },
  },
  meta: {
    source: "Robert Koch-Institut",
    contact: "Marlon Lueckert (m.lueckert@me.com)",
    info: "https://github.com/marlon360/rki-covid-api",
    lastUpdate: "2021-05-16T00:00:00.000Z",
    lastCheckedForUpdate: "2021-05-17T21:54:56.680Z",
  },
};

export {sampleCasesResponse, sampleIncidenceResponse}