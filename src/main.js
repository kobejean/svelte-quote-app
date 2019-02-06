import App from './components/App.html';
// import express from 'express';


let urlParams = new URLSearchParams(location.search);
let symbolsQuery = urlParams.get('symbols');
let symbols;
if (symbolsQuery) {
	symbols = symbolsQuery.split(',');
} else {
	symbols = []
}

const app = new App({
	target: document.body,
	data: {
		symbols: symbols,
	}
});

export default app;
