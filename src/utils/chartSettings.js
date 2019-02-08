let chartSettings = {
    aspectRatio: 8.0/1.0,
    fields: [
        {
        property: 'close',
        enabled: true,
        color: '#07d'
        },
        {
        property: 'volume',
        enabled: false,
        color: '#3d0'
        },
        {
        property: 'change',
        enabled: false,
        color: '#03d'
        },
        {
        property: 'high',
        enabled: true,
        color: '#70d'
        },
        {
        property: 'low',
        enabled: true,
        color: '#d70'
        },
        {
        property: 'marketHigh',
        enabled: true,
        color: '#d07'
        },
        {
        property: 'marketLow',
        enabled: true,
        color: '#7d0'
        },
        {
        property: 'marketAverage',
        enabled: true,
        color: '#d00'
        },
        {
        property: 'notional',
        enabled: false,
        color: '#0dd'
        },
        {
        property: 'average',
        enabled: false,
        color: '#333'
        },
        {
        property: 'numberOfTrades',
        enabled: false,
        color: '#d0d'
        }
    ]
};

export default chartSettings;