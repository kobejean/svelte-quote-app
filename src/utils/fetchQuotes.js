// async data fetching function
const fetchQuotes = async (symbols, range, component) => {
  if (symbols.length == 0) return;

  let symbolsQuery = symbols.map(x => x.toLowerCase()).join(',');
  let url = 'https://api.iextrading.com/1.0/stock/market/batch?symbols='+symbolsQuery+'&types=quote,chart&range='+range;
  const response = await fetch(url);
  const json = await response.json();
  component.set({ quotes: json });
};

export default fetchQuotes;
